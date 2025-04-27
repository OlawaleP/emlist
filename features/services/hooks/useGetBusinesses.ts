import { AuthContext } from "@/lib/context/AuthState";
import { useState, useEffect, useContext, ChangeEvent } from "react";
import { getBusinesses } from "../api/getBusinesses";

export const useGetBusinesses = () => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [businesses, setBusinesses] = useState<any[]>([]);

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
      const { business: newBusinesses, totalPages } = await getBusinesses({
        page: currentPage,
        limit: 10,
        userId: currentUser?._id,
        search,
      });

      setData((prev) => [...prev, ...newBusinesses]);
      setBusinesses(newBusinesses);
      setTotalPages(totalPages);
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
  }, [currentPage, search]);

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
  };
};
