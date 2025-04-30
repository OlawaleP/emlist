import Link from "next/link";

import { Capitalize } from "@/lib/helpers";
import { MaterialInfoProps } from "@/types";

import ReadMore from "./ReadMore";
import Rating from "./Rating";
import DisplayCardPrice from "../atoms/DisplayCardPrice";

const MaterialCardInfo: React.FC<MaterialInfoProps> = ({ material }) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Link
        href={`/material/info/${material._id}`}
        className="sm:text-2xl font-bold hover:text-primary-green duration-300"
      >
        {Capitalize(material.name)}
      </Link>
      <div className="sm:hidden">
        <DisplayCardPrice currency={material.currency} price={material.price} />
      </div>
      <ReadMore
        text={material.description}
        maxLength={100}
        style="max-sm:text-sm"
      />
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-1 max-sm:text-sm">
          <Rating rating={4} />
          <span className="sm:text-sm text-xs">(51)</span>
        </div>
      </div>
    </div>
  );
};

export default MaterialCardInfo;
