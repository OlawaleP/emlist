"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { fourColorStar, reviewCards } from "@constants";

const ReviewSlider = () => {
  const [currentReviewCard, setCurrentReviewCard] = useState<number>(0);
  const prevImg = () => {
    const isFirstSlide = currentReviewCard === 0;
    const newIndex = isFirstSlide
      ? reviewCards.length - 1
      : currentReviewCard - 1;
    setCurrentReviewCard(newIndex);
  };

  const nextImg = () => {
    const isLastSlide = currentReviewCard === reviewCards.length - 1;
    const newIndex = isLastSlide ? 0 : currentReviewCard + 1;
    setCurrentReviewCard(newIndex);
  };
  return (
    <section className="padding-x mb-10">
      <div className="grid grid-cols-5">
        <div className="col-span-3 flex items-center justify-between mr-5 max-sm:col-span-5 max-sm:mr-0">
          <h2 className="text-[24px] leading-[32px] font-[600] text-[#030a05] mb-6  max-sm:text-[15px] max-sm:leading-[24px] max-sm:mb-3">
            What people loved about this seller
          </h2>
          <Link
            href="/experts/review/all"
            className="text-[16px] leading-[24px] font-[500] text-primary-green mb-6  max-sm:text-[10px] max-sm:leading-[14px] max-sm:mb-3"
          >
            See all reviews
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-3 mr-5 max-sm:col-span-5 max-sm:mr-0">
          <div className="w-full border-[1px] border-[#b8b9b8] p-5 flex rounded-[15px] relative">
            {" "}
            <Image
              src={reviewCards[currentReviewCard].profile}
              alt="profile pic"
              width={51}
              height={51}
              className="object-cover w-[51px] h-[51px] max-sm:w-[30px] max-sm:h-[30px] rounded-full"
            />
            <div className="pl-4 max-sm:pl-2">
              <div className="flex items-center gap-4 mb-4 max-sm:mb-2">
                <h6 className="text-[18px] leading-[28px] font-[600] font-inter text-[#030a05]   max-sm:text-[14px] max-sm:leading-[20px]">
                  {reviewCards[currentReviewCard].name}
                </h6>
                <div className="flex items-center my-1 gap-2 max-sm:gap-1">
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
                  <p className="text-[14px] leading-[20px] font-[400] text-[#8A8D8B] max-sm:text-[12px] max-sm:leading-[16px]">
                    4
                  </p>
                </div>
              </div>
              <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enimtest sit aliqua
                dolor do amet sint. Velit off...
              </p>
            </div>
            <button
              className="absolute top-[50%] translate-y-[-50%] -left-5 bg-white shadow-md rounded-full  w-[37px] h-[37px] flex items-center justify-center max-sm:-left-3 max-sm:w-[30px] max-sm:[30px]"
              onClick={prevImg}
            >
              <Image
                src="/assets/icons/arrow-left.svg"
                alt="arrow-left"
                width={30}
                height={30}
                className="object-contain w-[17px] h-[17px] max-sm:w-[16px] max-sm:[16px]"
              />
            </button>
            <button
              className="absolute top-[50%] translate-y-[-50%] -right-5 bg-white shadow-md rounded-full  w-[37px] h-[37px] flex items-center justify-center max-sm:-right-3 max-sm:w-[30px] max-sm:[30px]"
              onClick={nextImg}
            >
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={30}
                height={30}
                className="object-contain w-[17px] h-[17px] max-sm:w-[16px] max-sm:[16px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
