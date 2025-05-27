import ThumbnailImage from "../atoms/ThumbnailImage";

interface ThumbnailGalleryProps {
  images: { imageUrl: string }[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}

const ThumbnailGallery = ({
  images,
  currentIndex,
  onThumbnailClick,
}: ThumbnailGalleryProps) => {
  return (
    <div className="flex gap-4 overflow-x-scroll w-full">
      {images.map((image, index) => (
        <ThumbnailImage
          key={index}
          src={image.imageUrl}
          alt={`thumbnail-${index}`}
          isActive={currentIndex === index}
          onClick={() => onThumbnailClick(index)}
        />
      ))}
    </div>
  );
};

export default ThumbnailGallery;
