import Link from "next/link";

import PopularImage from "@/components/atoms/PopularImage";
import PopularPriceDisplay from "@/components/atoms/PopularPriceDisplay";
import PopularTitleName from "@/components/atoms/PopularTitleName";

import { ExpertCardProps } from "@/types";
import { ROUTES } from "@/lib/constants/routes";

const ExpertCard: React.FC<ExpertCardProps> = ({ expert, onClick }) => {
  return (
    <Link
      href={ROUTES?.GENERAL_EXPERT_DETAILS(expert?._id)}
      className="flex flex-col gap-2 group"
      onClick={onClick}
    >
      <PopularImage
        imageUrl={expert?.businessImages?.[0]?.imageUrl}
        title={expert?.services[0] || "Service"}
      />
      <PopularTitleName name={expert.services[0] || "Unknown Service"} />
      <PopularPriceDisplay
        currency={expert.currency}
        startingPrice={expert.startingPrice}
        priceCaption="Price"
      />
    </Link>
  );
};

export default ExpertCard;
