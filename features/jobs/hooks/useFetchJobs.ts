import { ChangeEvent, useContext, useEffect, useState } from "react";

import { getJobs } from "../api/getJobs";
import { AuthContext } from "@/lib/context/AuthState";

export const useFetchJobs = () => {
  const { currentUser } = useContext(AuthContext);

  const [data, setData] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [allJobs, setAllJobs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterService, setFilterService] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getAllJobs = async () => {
    setIsLoading(true);
    try {
      const { jobs: newJobs, totalPages } = await getJobs({
        currentPage: currentPage,
        userId: currentUser?._id,
        search: search,
        filterName: filterName,
        filterLocation: filterLocation,
        filterService: filterService,
      });
      setAllJobs(newJobs);
      setData((prev) => [...prev, ...newJobs]);
      setTotalPages(totalPages);
      if (currentPage >= totalPages) {
        setHasMore(false);
      }
    } catch (error: any) {
      console.log("error fetching all product", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, [currentPage]);

  return {
    isLoading,
    allJobs,
    search,
    handleChange,
    getAllJobs,
    handlePageChange,
    totalPages,
    currentPage,
    filterLocation,
    setFilterLocation,
    filterName,
    filterService,
    setFilterName,
    setFilterService,
    data,
    hasMore,
    setIsLoading,
    setCurrentPage,
  };
};
