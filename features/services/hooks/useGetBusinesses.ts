import { useState, useEffect, useContext, ChangeEvent } from "react";

import { AuthContext } from "@/lib/context/AuthState";
import { getBusinesses } from "../api/getBusinesses";

export const useGetBusinesses = (
  serviceQuery?: string,
  locationQuery?: string
) => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("");
  const [totalBusinesses, setTotalBusinesses] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(10000000000);
  const [location, setLocation] = useState("");
  const [expertType, setExpertType] = useState("");
  const [rating, setRating] = useState("");
  const [noOfReviews, setNoOfReviews] = useState<string | undefined>(undefined);
  const [noticePeriod, setNoticePeriod] = useState<number | undefined>(
    undefined
  );

  const handleMinChange = (value: number) => {
    setMinValue(Math.min(value, maxValue));
  };

  const handleMaxChange = (value: number) => {
    setMaxValue(Math.max(value, minValue));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setData([]);
    setCurrentPage(1);
    setHasMore(true);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const fetchBusinesses = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const {
        business: newBusinesses,
        totalPages,
        totalBusinesses,
      } = await getBusinesses({
        page: currentPage,
        limit: 10,
        userId: currentUser?._id,
        search,
        serviceQuery,
        location,
        locationQuery,
        noticePeriod,
        noOfReviews,
        rating,
        expertType,
      });

      setData((prev) => [...prev, ...newBusinesses]);
      setBusinesses(newBusinesses);
      setTotalPages(totalPages);
      setTotalBusinesses(totalBusinesses);
      if (currentPage >= totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch businesses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, [currentPage]);

  return {
    data,
    loading,
    hasMore,
    search,
    setSearch,
    businesses,
    totalPages,
    currentPage,
    handleChange,
    handlePageChange,
    fetchBusinesses,
    setLoading,
    setCurrentPage,
    minValue,
    maxValue,
    expertType,
    setExpertType,
    handleMinChange,
    handleMaxChange,
    rating,
    setRating,
    noOfReviews,
    setNoOfReviews,
    location,
    setLocation,
    noticePeriod,
    setNoticePeriod,
    totalBusinesses,
    currency,
    setCurrency,
    reFetchAllBusinesses: fetchBusinesses,
  };
};
