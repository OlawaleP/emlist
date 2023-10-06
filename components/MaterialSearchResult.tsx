"use client";

import {
  fourColorStar,
  oneColorStar,
  reviewMaterials,
  reviewWorkers,
  threeColorStar,
  twoColorStar,
} from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import MaterialsData from "./MaterialsData";

type Props = {
  initialMin: any;
  initialMax: any;
  min: number;
  max: number;
  step: number;
  priceCap: number;
};

const MaterialSearchResult = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
}: Props) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState<any>(initialMin);
  const [maxValue, setMaxValue] = useState<any>(initialMax);

  const handleMin = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.vaule));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };
  return (
    <section className="padding-x pb-20 max-sm:pb-10">
      <div className="flex">
        <div className="w-[314px] border-r-[1px] border-[#d9d9d9] max-xl:hidden">
          <h6 className="text-[#303632] text-[20px] leading-[32px] font-[600] pb-2  max-sm:text-[14px] max-sm:leading-[20px]  border-b-[1px] border-[#d9d9d9] w-full">
            Filter
          </h6>
          <div className="w-full  border-b-[1px] border-[#d9d9d9] py-3">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Price
            </h6>
            <div className="my-8 mr-2">
              <div className="slider relative h-2 rounded-md bg-gray-300">
                <div
                  className="progress absolute h-2 bg-primary-green rounded"
                  ref={progressRef}
                ></div>
              </div>
              <div className="range-input relative">
                <input
                  onChange={handleMin}
                  type="range"
                  value={minValue}
                  min={min}
                  step={step}
                  max={max}
                  className="range-min absolute w-full -top-[0.35rem] h-1 bg-transparent appearance-none pointer-events-none"
                />
                <input
                  onChange={handleMax}
                  type="range"
                  value={maxValue}
                  min={min}
                  step={step}
                  max={max}
                  className="range-max  absolute w-full -top-[0.35rem] h-1 bg-transparent appearance-none pointer-events-none"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex px-2 py-1 border-[1px] border-[#b8b9b8] w-[125px] text-left rounded-[5px] text-[#b8b9b8]  text-[14px]">
                <label className="mr-1">Min</label>
                <input
                  type="number"
                  value={minValue}
                  onChange={(e) => setMinValue(e.target.value)}
                  className="flex-1 outline-none max-w-[80px]"
                />
              </div>{" "}
              <Image
                src="/assets/icons/dash.svg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain mx-3 "
              />{" "}
              <div className="flex px-2 py-1 border-[1px] border-[#b8b9b8] w-[125px] text-left rounded-[5px] text-[#b8b9b8] text-[14px]">
                <label className="mr-1">Max</label>
                <input
                  type="number"
                  value={maxValue}
                  onChange={(e) => setMaxValue(e.target.value)}
                  className="flex-1 outline-none max-w-[80px]"
                />
              </div>
            </div>
            <button className="text-primary-green text-center text-[14px] font-[600] w-[290px] py-4">
              APPLY
            </button>
          </div>

          <div className="w-full  border-b-[1px] border-[#d9d9d9]">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Rating
            </h6>
            <div className="flex flex-col gap-4 my-3">
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                {/* <input type="radio" id="5star" name="rating" value="email" /> */}
                <label
                  htmlFor="5star"
                  className="ml-3 text-base font-[400] text-[#303632] flex items-center"
                >
                  <div className="flex items-center my-1">
                    {fourColorStar.map((star, index) => (
                      <Image
                        key={index}
                        src={star}
                        alt="rate"
                        width={30}
                        height={30}
                        className="object-contain w-[30px] h-[30px]"
                      />
                    ))}
                  </div>
                  <span className="ml-2">& Above</span>
                </label>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                {/* <input type="radio" id="3star" name="rating" value="email" /> */}
                <label
                  htmlFor="3star"
                  className="ml-3 text-base font-[400] text-[#303632] flex items-center"
                >
                  <div className="flex items-center my-1">
                    {threeColorStar.map((star, index) => (
                      <Image
                        key={index}
                        src={star}
                        alt="rate"
                        width={30}
                        height={30}
                        className="object-contain w-[30px] h-[30px]"
                      />
                    ))}
                  </div>
                  <span className="ml-2">& Above</span>
                </label>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                {/* <input type="radio" id="2star" name="rating" value="email" /> */}
                <label
                  htmlFor="2star"
                  className="ml-3 text-base font-[400] text-[#303632] flex items-center"
                >
                  <div className="flex items-center my-1">
                    {twoColorStar.map((star, index) => (
                      <Image
                        key={index}
                        src={star}
                        alt="rate"
                        width={30}
                        height={30}
                        className="object-contain w-[30px] h-[30px]"
                      />
                    ))}
                  </div>
                  <span className="ml-2">& Above</span>
                </label>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                {/* <input type="radio" id="1star" name="rating" value="email" /> */}
                <label
                  htmlFor="1star"
                  className="ml-3 text-base font-[400] text-[#303632] flex items-center"
                >
                  <div className="flex items-center my-1">
                    {oneColorStar.map((star, index) => (
                      <Image
                        key={index}
                        src={star}
                        alt="rate"
                        width={30}
                        height={30}
                        className="object-contain w-[30px] h-[30px]"
                      />
                    ))}
                  </div>
                  <span className="ml-2">& Above</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full  border-b-[1px] border-[#d9d9d9]">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Reviews
            </h6>
            <div className="mr-2">
              <input
                type="text"
                placeholder="Number of Reviews"
                className="border-[1px] border-[#b8b9b8] rounded-[5px] w-full text-[#b8b9b8]  text-[14px] px-2 py-2 mt-4"
              />
              <button className="text-primary-green text-center text-[14px] font-[600] w-[290px] py-6">
                APPLY
              </button>
            </div>
          </div>
          <div className="w-full ">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Select List
            </h6>
            <div className="flex flex-col gap-4 my-3">
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                <label htmlFor="all" className="ml-3 text-base text-[#303632]">
                  All
                </label>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                {/* <input
                  type="radio"
                  id="Emi Preferred"
                  name="contact"
                  value="telephone"
                /> */}
                <label
                  htmlFor="Emi Preferred"
                  className="ml-3 text-base text-[#303632]"
                >
                  Prime members
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-6 max-sm:ml-0">
          <h6 className="text-[#737774] text-[14px] mb-4">51 results found</h6>
          <div className="flex flex-col w-full gap-6">
            <MaterialsData shadow={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialSearchResult;
