import Image from "next/image";

import ArrowButton from "./ArrowButton";

interface MainImageProps {
  src: string;
  alt: string;
  onPrev: () => void;
  onNext: () => void;
}

const MainImage = ({ src, alt, onPrev, onNext }: MainImageProps) => {
  return (
    <div className="w-[676px] h-[413px] max-sm:w-[320px] max-sm:min-w-full max-sm:h-[226px] relative">
      <Image
        src={src}
        alt={alt}
        width={676}
        height={413}
        className="object-cover w-full h-full rounded-xl"
      />
      <ArrowButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        }
        onClick={onPrev}
        position="left"
      />
      <ArrowButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        }
        onClick={onNext}
        position="right"
      />
    </div>
  );
};

export default MainImage;
