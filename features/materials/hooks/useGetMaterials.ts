import { ChangeEvent, useContext, useEffect, useState } from "react";

import { getMaterials } from "../api/getMaterials";
import { AuthContext } from "@/lib/context/AuthState";

export const useGetMaterials = (material?: string, locationQuery?: string) => {
  const { currentUser } = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [allMaterials, setAllMaterials] = useState<any>([]);
  const [rating, setRating] = useState("");
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(150);
  const [noOfReviews, setNoOfReviews] = useState<string | undefined>(undefined);
  const [totalProducts, setTotalProducts] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const fetchAllMaterials = async () => {
    try {
      const {
        products: newProducts,
        totalPages,
        totalProducts,
      } = await getMaterials({
        page: currentPage,
        limit: 10,
        userId: currentUser?._id,
        search: search,
        rating: rating,
        noOfReviews: noOfReviews,
        locationQuery: locationQuery,
        material: material,
      });
      setAllMaterials(newProducts);
      setTotalProducts(totalProducts);
      setData((prev) => [...prev, ...newProducts]);
      setTotalPages(totalPages);
      if (currentPage >= newProducts) {
        setHasMore(false);
      }
    } catch (error: any) {
      console.log("error fetching all materials", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMaterials();
  }, [currentPage]);

  return {
    data,
    loading,
    hasMore,
    allMaterials,
    search,
    handleChange,
    handlePageChange,
    totalPages,
    currentPage,
    fetchAllMaterials,
    handleMinChange,
    handleMaxChange,
    rating,
    setRating,
    minValue,
    maxValue,
    noOfReviews,
    setNoOfReviews,
    totalProducts,
    setLoading,
    setCurrentPage,
  };
};
