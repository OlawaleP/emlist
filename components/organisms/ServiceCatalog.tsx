"use client";

import { useSearchParams } from "next/navigation";

import { FilterServiceWrapperProps } from "@/types";
import { useGetBusinesses } from "@/features/services/hooks/useGetBusinesses";

import FeatureContentHeader from "./FeatureContentHeader";
import FilterServiceWrapper from "./FilterServiceWrapper";
import FilterPanel from "./FilterPanel";
import ServiceList from "./ServiceList";
import PageLoader from "../atoms/PageLoader";

const ServiceCatalog = () => {
  const searchParams = useSearchParams();

  const service = searchParams.get("q") || "";
  const locationQuery = searchParams.get("location") || "";

  const {
    fetchBusinesses,
    loading,
    search,
    businesses,
    totalPages,
    currentPage,
    handleChange,
    handlePageChange,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
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
    reFetchAllBusinesses,
  } = useGetBusinesses(service, locationQuery);

  const filterProps: FilterServiceWrapperProps = {
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
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
    fetchBusinesses,
    currency,
    setCurrency,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await reFetchAllBusinesses();
  };

  return (
    <div className="pt-10 padding-ctn">
      <FeatureContentHeader
        search={search}
        handleSearchChange={handleChange}
        handleSearchSubmit={handleSubmit}
        title={
          service
            ? service
            : locationQuery
            ? locationQuery
            : "Explore Businesses"
        }
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enimt."
      />
      {loading ? (
        <PageLoader />
      ) : (
        <div className="grid grid-cols-10 pt-10 no-scroll">
          <FilterPanel>
            <FilterServiceWrapper {...filterProps} />
          </FilterPanel>
          <ServiceList />
        </div>
      )}
    </div>
  );
};

export default ServiceCatalog;
