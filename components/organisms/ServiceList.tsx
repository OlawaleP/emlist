import { BusinessListProps } from "@/types";

import { useCompare } from "@/features/services/hooks/useCompare";
import { useLikeBusiness } from "@/features/services/hooks/useLikeBusiness";
import { useUnlikeBusiness } from "@/features/services/hooks/useUnLikeBusiness";

import WhiteBgLoader from "../atoms/WhiteBgLoader";
import ResultMsg from "../atoms/ResultMsg";
import CustomPagination from "../molecules/CustomPagination";
import ServiceViewCard from "../molecules/cards/ServiceViewCard";

const ServiceList = ({
  totalBusinesses,
  totalPages,
  currentPage,
  handlePageChange,
  reFetchAllBusinesses,
  businesses,
}: BusinessListProps) => {
  const { compare } = useCompare();
  const { handleLikeBusiness, isLoading } = useLikeBusiness();
  const { handleUnlikeBusiness, isLoad } = useUnlikeBusiness();

  const handleLike = (id: string) => {
    handleLikeBusiness(id, () => {
      reFetchAllBusinesses();
    });
  };

  const handleUnlike = (id: string) => {
    handleUnlikeBusiness(id, () => {
      reFetchAllBusinesses();
    });
  };

  return (
    <div className="col-span-7 lg:pl-6 max-lg:col-span-10">
      {isLoad && <WhiteBgLoader />}
      {isLoading && <WhiteBgLoader />}
      <ResultMsg
        msg={
          totalBusinesses > 0
            ? `${totalBusinesses} results found`
            : "No result found"
        }
      />
      <div className="flex flex-col gap-5 lg:h-[calc(100vh-5rem)] overflow-y-auto hide-scrollbar py-2">
        {businesses?.map((expert: any) => (
          <ServiceViewCard
            key={expert._id}
            expert={expert}
            compare={compare}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
          />
        ))}
      </div>
      {totalBusinesses > 10 && (
        <div className="md:w-2/3 w-full pt-2">
          <CustomPagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default ServiceList;
