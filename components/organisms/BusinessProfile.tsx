import { numberWithCommas } from "@/lib/helpers";

import CustomButton from "../atoms/CustomButton";
import LevelDisplay from "../atoms/LevelDisplay";
import StatItem from "../atoms/StatItem";
import BusinessHeader from "../molecules/BusinessHeader";
import ReadMore from "../molecules/ReadMore";
import UserRatingDisplay from "../molecules/UserRatingDisplay";
import InsuranceInfo from "../molecules/InsuranceInfo";
import MembershipCard from "../molecules/cards/MembershipCard";
import BusinessOwnerInfo from "../molecules/BusinessOwnerInfo";

interface BusinessProfileProps {
  handleOpenModal: () => void;
  serviceInfo: {
    profileImage: string;
    firstName?: string;
    lastName?: string;
    userId: { level?: string };
    averageRating?: number;
    totalReviews?: number;
    createdAt: Date;
    state?: string;
    country?: string;
    languages?: string[];
    noticePeriod?: number;
    bio?: string;
    totalJobs?: number;
    successfulJobs?: number;
    unsuccessfulJobs?: number;
    successRate?: number;
  };
}

const BusinessProfile = ({
  handleOpenModal,
  serviceInfo,
}: BusinessProfileProps) => {
  return (
    <div className="space-y-8">
      <div>
        <BusinessHeader
          firstName={serviceInfo.firstName}
          lastName={serviceInfo.lastName}
          profileImage={serviceInfo.profileImage}
          level={serviceInfo?.userId?.level}
          rating={serviceInfo?.averageRating}
          totalReviews={serviceInfo?.totalReviews}
          handleOpenModal={handleOpenModal}
        />
      </div>

      <BusinessOwnerInfo
        createdAt={serviceInfo.createdAt}
        state={serviceInfo.state}
        country={serviceInfo.country}
        languages={serviceInfo.languages}
        noticePeriod={serviceInfo.noticePeriod}
      />

      <div className="py-6">
        <ReadMore
          text={serviceInfo.bio || "No bio provided"}
          maxLength={600}
          style="text-[#303632] text-sm lg:col-span-3"
        />
      </div>

      <div className="flex flex-col gap-4">
        <StatItem
          label="Total Jobs"
          value={
            serviceInfo.totalJobs ? numberWithCommas(serviceInfo.totalJobs) : 0
          }
        />
        <StatItem
          label="Successful Jobs"
          value={
            serviceInfo.successfulJobs
              ? numberWithCommas(serviceInfo.successfulJobs)
              : 0
          }
        />
        <StatItem
          label="Unsuccessful Jobs"
          value={
            serviceInfo.unsuccessfulJobs
              ? numberWithCommas(serviceInfo.unsuccessfulJobs)
              : 0
          }
        />
        <StatItem
          label="Job Success Rate"
          value={
            serviceInfo.successRate
              ? `${numberWithCommas(serviceInfo.successRate)}%`
              : "N/A"
          }
        />
      </div>

      <div className="pt-10">
        <h3 className="text-xl font-semibold mb-6">Insurance</h3>
        <InsuranceInfo
          issuingOrg="Leadway Assurance"
          coverType="Property Insurance"
          description="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Certification</h3>
        <button className="pb-10 max-sm:pb-6 text-[20px] font-semibold text-primary-green underline">
          See certification
        </button>
      </div>

      <div className="pt-10 pb-6">
        <h3 className="text-xl font-semibold mb-6">Membership</h3>
        <MembershipCard
          organization="Painters Association of Nigeria"
          position="Member"
          startDate="25/Feb/1998"
          endDate="25/Feb/1998"
        />
      </div>
    </div>
  );
};
export default BusinessProfile;
