import Image from "next/image";
import React from "react";
import Rating from "../molecules/Rating";
import PriceRangeSelectorWrapper from "./PriceRangeSelectorWrapper";

import { FilterMaterialWrapperProps } from "@/types";
import { serviceRating } from "@/lib/constants";

const FilterMaterialWrapper = ({
  minValue,
  maxValue,
  handleMinChange,
  handleMaxChange,
  rating,
  setRating,
  noOfReviews,
  setNoOfReviews,
  getAllMaterials,
}: FilterMaterialWrapperProps) => {
  return (
    <>
      <PriceRangeSelectorWrapper />
      <div className="w-full border-b-1 py-6">
        <h6 className="text-lg font-semibold max-sm:text-sm">Rating</h6>
        <div className="flex flex-col gap-4 my-3">
          {serviceRating.map((ratingg) => (
            <div
              className="flex items-center gap-4 cursor-pointer"
              key={ratingg.count}
              onClick={() => {
                setRating(ratingg.value);
                getAllMaterials();
              }}
            >
              <Image
                src={
                  rating === ratingg.value
                    ? "/icons/circle-color.svg"
                    : "/icons/circle.svg"
                }
                alt="menu"
                width={25}
                height={25}
                className="object-contain w-6 h-6"
              />
              <Rating rating={ratingg.count} />
              <span>& Above</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-xs border-b-1 py-6 pr-6">
        <h6 className="text-lg font-semibold max-sm:text-sm">Reviews</h6>
        <div>
          <input
            type="number"
            value={noOfReviews}
            onChange={(e) => setNoOfReviews(e.target.value)}
            placeholder="Number of Reviews"
            className="border-1 rounded w-full text-sm p-2 mt-4 bg-white outline-none focus:border-primary-green border-gray-300"
          />
          <button
            type="button"
            onClick={getAllMaterials}
            className="text-primary-green text-center text-sm font-semibold w-full py-4"
          >
            APPLY
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterMaterialWrapper;
