import React from "react";
import Image from "next/image";
import { fourColorStar } from "@constants";

const ReviewBar = () => {
  return (
    <section className="pt-28 padding-x">
      <div className="flex items-center">
        <h2 className="text-[30px] font-[700] text-[#030a05] max-sm:text-[18px] max-sm:font-[700]  pr-2">
          51 Reviews
        </h2>
        <div className="flex items-center my-1 gap-2 max-sm:gap-0 pl-2">
          {" "}
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
          <p className="text-[13px] max-sm:text-[10px]">(51)</p>
        </div>
      </div>
      <div className="flex padding-y gap-24 max-lg:flex-col max-sm:gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center ">
            <p className="text-[16px] font-[600] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pr-2">
              5 Stars
            </p>
            <div className="h-[16px] w-[486px] bg-[#D9D9D9]  rounded-[12px] max-sm:w-[275px] max-sm:h-[12px]">
              <div className="h-full w-[70%] bg-[#FF9933] rounded-[12px]"></div>
            </div>
            <p className="text-[16px] font-[600] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pl-2">
              (15)
            </p>
          </div>
          <div className="flex items-center ">
            <p className="text-[16px] font-[600] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pr-2">
              4 Stars
            </p>
            <div className="h-[16px] w-[486px] bg-[#D9D9D9]  rounded-[12px] max-sm:w-[275px] max-sm:h-[12px]">
              <div className="h-full w-[90%] bg-[#FF9933] rounded-[12px]"></div>
            </div>
            <p className="text-[16px] font-[400] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pl-2">
              (25)
            </p>
          </div>
          <div className="flex items-center ">
            <p className="text-[16px] font-[600] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pr-2">
              3 Stars
            </p>
            <div className="h-[16px] w-[486px] bg-[#D9D9D9]  rounded-[12px] max-sm:w-[275px] max-sm:h-[12px]">
              <div className="h-full w-[30%] bg-[#FF9933] rounded-[12px]"></div>
            </div>
            <p className="text-[16px] font-[400] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pl-2">
              (8)
            </p>
          </div>
          <div className="flex items-center ">
            <p className="text-[16px] font-[600] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pr-2">
              2 Stars
            </p>
            <div className="h-[16px] w-[486px] bg-[#D9D9D9]  rounded-[12px] max-sm:w-[275px] max-sm:h-[12px]">
              <div className="h-full w-[30%] bg-[#FF9933] rounded-[12px]"></div>
            </div>
            <p className="text-[16px] font-[400] text-[#054753] max-sm:text-[10px] max-sm:font-[700]  pl-2">
              (3)
            </p>
          </div>
          <div className="flex items-center ">
            <p className="text-[16px] font-[600] text-[#B8B9B8] max-sm:text-[10px] max-sm:font-[700]  pr-2">
              1 Stars
            </p>
            <div className="h-[16px] w-[486px] bg-[#D9D9D9]  rounded-[12px] max-sm:w-[275px] max-sm:h-[12px]">
              <div className="h-full w-[70%]  rounded-[12px]"></div>
            </div>
            <p className="text-[16px] font-[400] text-[#B8B9B8] max-sm:text-[10px] max-sm:font-[700]  pl-2">
              (0)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-sm:gap-4">
          <h4 className="text-[20px] font-[600] text-[#030a05] max-sm:text-[16px]">
            Rating Breakdown
          </h4>
          <div className="flex items-center gap-10">
            <p className="text-[16px] font-[400] text-[#303632] max-sm:text-[14px]">
              Seller communication level
            </p>
            <p className="text-[#FF9933] flex items-center text-[14px] font-[700]  max-sm:text-[12px]">
              <Image
                src="/assets/icons/StarColor.svg"
                alt="rate"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px] mr-2"
              />
              5
            </p>
          </div>
          <div className="flex items-center gap-10">
            <p className="text-[16px] font-[400] text-[#303632] max-sm:text-[14px]">
              Service as described
            </p>
            <p className="text-[#FF9933] flex items-center text-[14px] font-[700]  max-sm:text-[12px]">
              <Image
                src="/assets/icons/StarColor.svg"
                alt="rate"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px] mr-2"
              />
              4.5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewBar;
