"use client";

import { useState } from "react";

import MainImage from "@/components/atoms/MainImage";
import ThumbnailGallery from "../ThumbnailGallery";

interface ImageSliderProps {
  serviceInfo: {
    businessImages: { imageUrl: string }[];
  };
}

const ImageSlider = ({ serviceInfo }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const prevImg = () => {
    const isFirstSlide = currentImage === 0;
    const newIndex = isFirstSlide
      ? serviceInfo?.businessImages.length - 1
      : currentImage - 1;
    setCurrentImage(newIndex);
  };

  const nextImg = () => {
    const isLastSlide = currentImage === serviceInfo?.businessImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="col-span-3 max-lg:col-span-2 max-md:col-span-4">
      <div className="flex flex-col w-full gap-4 relative">
        {" "}
        {serviceInfo?.businessImages?.length > 0 && (
          <>
            <MainImage
              src={serviceInfo.businessImages[currentImage].imageUrl}
              alt="service image"
              onPrev={prevImg}
              onNext={nextImg}
            />
            <ThumbnailGallery
              images={serviceInfo.businessImages}
              currentIndex={currentImage}
              onThumbnailClick={handleThumbnailClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
