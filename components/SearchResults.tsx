"use client";

import {
  fourColorStar,
  oneColorStar,
  reviewWorkers,
  threeColorStar,
  twoColorStar,
} from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Props = {
  initialMin: any;
  initialMax: any;
  min: number;
  max: number;
  step: number;
  priceCap: number;
};

const SearchResults = ({
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

  // useEffect(() => {
  //   if (progressRef?.current) {
  //     if (progressRef.current.style) {
  //       progressRef.current.style.left = (minValue / max) * step + "%";
  //       progressRef.current.style.right = (maxValue / max) * step + "%";
  //     }
  //   }
  // }, [maxValue, minValue]);

  return (
    <section className="padding-x pb-20 max-sm:pb-10">
      <div className="flex">
        <div className="w-[314px] border-r-[1px] border-[#d9d9d9] max-xl:hidden">
          <h6 className="text-[#303632] text-[20px] leading-[32px] font-[600] pb-2  max-sm:text-[14px] max-sm:leading-[20px]  border-b-[1px] border-[#d9d9d9] w-full">
            Filter
          </h6>
          <div className="w-full  border-b-[1px] border-[#d9d9d9] py-3">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Starting Price
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
                  Emi Preferred
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
                  id="Verified experts"
                  name="contact"
                  value="courrier"
                /> */}
                <label
                  htmlFor="Verified experts"
                  className="ml-3 text-base text-[#303632]"
                >
                  Verified experts
                </label>
              </div>
            </div>
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
              <button className="text-primary-green text-center text-[14px] font-[600] w-[290px] py-4">
                APPLY
              </button>
            </div>
          </div>
          <div className="w-full  border-b-[1px] border-[#d9d9d9]">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Location
            </h6>
            <div className="mr-2">
              <input
                type="text"
                placeholder="Location"
                className="border-[1px] border-[#b8b9b8] rounded-[5px] w-full text-[#b8b9b8]  text-[14px] px-2 py-2 mt-4"
              />
              <button className="text-primary-green text-center text-[14px] font-[600] w-[290px] py-4">
                APPLY
              </button>
            </div>
          </div>
          <div className="w-full  border-b-[1px] border-[#d9d9d9]">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Notice Period
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
                {/* <input type="radio" id="hours" name="time" value="email" /> */}
                <label
                  htmlFor="hours"
                  className="ml-3 text-base text-[#303632]"
                >
                  24 Hours
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
                {/* <input type="radio" id="3days" name="time" value="telephone" /> */}
                <label
                  htmlFor="3days"
                  className="ml-3 text-base text-[#303632]"
                >
                  3 Days
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
                {/* <input type="radio" id="7days" name="time" value="courrier" /> */}
                <label
                  htmlFor="7days"
                  className="ml-3 text-base text-[#303632]"
                >
                  7 days
                </label>
              </div>
            </div>
          </div>
          <div className="w-full  border-b-[1px] border-[#d9d9d9]">
            <h6 className="text-[#303632] text-[18px] leading-[30px] font-[600] pt-4  max-sm:text-[14px] max-sm:leading-[20px]">
              Expert Level
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
                {/* <input type="radio" id="4above" name="level" value="email" /> */}
                <label
                  htmlFor="4above"
                  className="ml-3 text-base text-[#303632]"
                >
                  Level 4 & Above
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
                  id="3above"
                  name="level"
                  value="telephone"
                /> */}
                <label
                  htmlFor="3above"
                  className="ml-3 text-base text-[#303632]"
                >
                  Level 3 & Above
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
                  id="2above"
                  name="level"
                  value="courrier"
                /> */}
                <label
                  htmlFor="2above"
                  className="ml-3 text-base text-[#303632]"
                >
                  Level 2 & Above
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
                  id="1above"
                  name="level"
                  value="courrier"
                /> */}
                <label
                  htmlFor="1above"
                  className="ml-3 text-base text-[#303632]"
                >
                  Level 1 & Above
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-6 max-sm:ml-0">
          <h6 className="text-[#737774] text-[14px] mb-4">51 results found</h6>
          <div className="flex flex-col w-full gap-6">
            {reviewWorkers.map((reviews, index) => (
              <div
                key={index}
                className="shadow-md w-full p-4 rounded-[20px] flex max-md:flex-col max-sm:px-2"
              >
                <div className="flex w-full">
                  <div className="">
                    <Image
                      src={reviews.imgURL}
                      alt="menu"
                      width={204}
                      height={183}
                      className="object-cover w-[204px] h-[183px] rounded-lg max-sm:w-[90px] max-sm:h-[85px]"
                    />{" "}
                  </div>
                  <div className="flex-1 flex flex-col pl-4 max-sm:pl-2">
                    <div className="flex  w-ful lg:justify-between max-lg:flex-col ">
                      <div className="flex flex-col gap-3 mr-6 max-lg:mr-0 max-md:gap-[4px]">
                        <h3 className="text-[20px] font-[700] text-[#030a05] max-sm:text-[14px]">
                          {reviews.service}
                        </h3>
                        <p className=" text-[14px] max-sm:text-[12px]">
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia cons.
                        </p>
                        <div className="flex items-center justify-between ">
                          <div className="flex items-center my-1 gap-2 max-sm:gap-0">
                            {fourColorStar.map((star, index) => (
                              <Image
                                key={index}
                                src={star}
                                alt="rate"
                                width={20}
                                height={20}
                                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px]"
                              />
                            ))}
                            <p className="text-[13px] max-sm:text-[10px]">
                              ({reviews.noReviews})
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Image
                              src={reviews.jobIcon}
                              alt="rate"
                              width={20}
                              height={20}
                              className="object-contain w-[20px] h-[20px] max-sm:w-[12px] max-sm:h-[12px]"
                            />
                            <p className=" text-[14px] max-sm:text-[10px]">
                              {reviews.jobCompleted} Jobs Completed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4 max-sm:mb-2">
                          <div className="flex items-center ">
                            <Image
                              src={reviews.profile}
                              alt="menu"
                              width={28}
                              height={28}
                              className="object-cover w-[28px] h-[28px] max-sm:w-[25px] max-sm:h-[25px] rounded-full mr-4 max-sm:mr-1"
                            />
                            <p className="text-[#303632]  text-[14px] max-sm:text-[12mpx]">
                              {reviews.name}
                            </p>
                          </div>
                          <p className="text-[#303632] font-[500] text-[14px] max-sm:text-[10px]">
                            LEVEL 4
                          </p>
                        </div>
                      </div>
                      <div className="flex lg:flex-col items-end max-lg:justify-between max-lg:items-center">
                        <div className="">
                          <h3 className="text-[20px] font-[700] text-primary-green max-sm:text-[14px]">
                            {" "}
                            ₦ {numberWithCommas(reviews.price)}
                          </h3>
                          <p className="whitespace-nowrap py-3  text-[14px] max-md:py-1 max-sm:text-[12px]">
                            Starting price
                          </p>
                        </div>

                        <Link href="/experts/details">
                          <button className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-10 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[10px] max-sm:py-[6px]">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-8  border-t-[1px] border-[#d9d9d9] w-full pt-4 max-md:hidden">
                      <button className="flex items-center">
                        <Image
                          src={reviews.loveIcon}
                          alt="menu"
                          width={24}
                          height={24}
                          className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] mr-2"
                        />
                        <p className="text-[14px] text-[#303632]">Favourite</p>
                      </button>

                      <Link href="/compare" className="flex items-center">
                        <Image
                          src={reviews.paperIcon}
                          alt="menu"
                          width={24}
                          height={24}
                          className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] mr-2"
                        />
                        <p className="text-[14px] text-[#303632] ">Compare</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-8  border-t-[1px] border-[#d9d9d9] w-full pt-2 md:hidden">
                  <button className="flex items-center">
                    <Image
                      src={reviews.loveIcon}
                      alt="menu"
                      width={24}
                      height={24}
                      className="object-contain w-[16px] h-[16px] mr-2"
                    />
                    <p className="text-[14px] text-[#303632] max-sm:text-[12px]">
                      Favourite
                    </p>
                  </button>
                  <button className="flex items-center">
                    <Image
                      src={reviews.paperIcon}
                      alt="menu"
                      width={24}
                      height={24}
                      className="object-contain w-[16px] h-[16px] mr-2"
                    />
                    <p className="text-[14px] text-[#303632] max-sm:text-[12px]">
                      Compare
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
