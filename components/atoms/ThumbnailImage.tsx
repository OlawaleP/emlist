import Image from "next/image";

interface ThumbnailImageProps {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

const ThumbnailImage = ({
  src,
  alt,
  isActive,
  onClick,
}: ThumbnailImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={122}
      height={122}
      className={`${
        isActive ? "opacity-100" : "opacity-50"
      } object-cover w-[122px] h-[122px] max-sm:w-[67px] max-sm:h-[67px] rounded-[14px] cursor-pointer hover:border-1  hover:border-primary-green transition-all duration-300`}
      onClick={onClick}
    />
  );
};

export default ThumbnailImage;
