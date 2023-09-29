"use client";

import Image from "next/image";
import { useState } from "react";
import { reviewWorkers } from "@constants";

type Props = {
  material: boolean;
};

const ImageSlider = ({ material }: Props) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const prevImg = () => {
    const isFirstSlide = currentImage === 0;
    const newIndex = isFirstSlide ? reviewWorkers.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  const nextImg = () => {
    const isLastSlide = currentImage === reviewWorkers.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };
  return (
    <div className="col-span-3 max-lg:col-span-2 max-md:col-span-4 ">
      {!material && (
        <h4 className="text-[30px] leading-[36px] font-[700] text-[#030a05] mb-8 w-[85%] max-sm:text-[18px] max-sm:leading-[28px] max-sm:w-full">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia cons.
        </h4>
      )}
      <div className="flex flex-col w-full gap-4 relative">
        <div className="w-full relative flex">
          <Image
            src={reviewWorkers[currentImage].imgURL}
            alt="logo"
            width={130}
            height={30}
            className="object-cover w-[676px] h-[413px] max-sm:w-full max-sm:min-w-[320px] max-sm:h-auto min-sm:h-[226px] rounded-[15px]"
          />

          <button
            className="absolute top-[50%] translate-y-[-50%] -left-8 bg-white shadow-md rounded-full w-[68px] h-[68px] max-sm:w-[37px] max-sm:h-[37px] flex items-center justify-center max-sm:-left-2"
            onClick={prevImg}
          >
            <Image
              src="/assets/icons/arrow-left.svg"
              alt="arrow-left"
              width={30}
              height={30}
              className="object-contain w-[32px] h-[32px] max-sm:w-[17px] max-sm:h-[17px] "
            />
          </button>
          <button
            className="absolute top-[50%] translate-y-[-50%] -right-2 max-xl:-right-8 bg-white shadow-md rounded-full w-[68px] h-[68px] max-sm:w-[37px] max-sm:h-[37px] flex items-center justify-center max-sm:-right-2"
            onClick={nextImg}
          >
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width={30}
              height={30}
              className="object-contain w-[32px] h-[32px] max-sm:w-[17px] max-sm:h-[17px]"
            />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-scroll w-full">
          {reviewWorkers.map((image, index) => (
            <Image
              key={index}
              src={image.imgURL}
              alt="logo"
              width={130}
              height={30}
              className={`${
                currentImage === index ? "opacity-100" : "opacity-50"
              } object-contain w-[122px] h-[122px] max-sm:w-[67px] max-sm:h-[67px] rounded-[14px]`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
