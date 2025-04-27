import Link from "next/link";

import PopularImage from "@/components/atoms/PopularImage";
import PopularPriceDisplay from "@/components/atoms/PopularPriceDisplay";
import PopularTitleName from "@/components/atoms/PopularTitleName";

import { MaterialCardProps } from "@/types";
import { ROUTES } from "@/lib/constants/routes";

const MaterialCard = ({ material, onClick }: MaterialCardProps) => {
  return (
    <Link
      href={ROUTES?.GENERAL_MATERIAL_DETAILS(material?._id)}
      className="flex flex-col gap-2 group"
      onClick={onClick}
    >
      <PopularImage
        imageUrl={material?.images?.[0]?.imageUrl}
        title={material?.name || "material"}
      />
      <PopularTitleName name={material.name || "Unknown material"} />
      <PopularPriceDisplay
        currency={material.currency}
        startingPrice={material.price}
        priceCaption="Price"
        isDiscounted={material?.isDiscounted}
        discountedPrice={material?.discountedPrice}
      />
    </Link>
  );
};

export default MaterialCard;
