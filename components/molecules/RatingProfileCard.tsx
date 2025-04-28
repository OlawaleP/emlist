import { ProfileCardProps } from "@/types";

import ProfileImage from "../atoms/ProfileImage";
import Rating from "./Rating";

const RatingProfileCard: React.FC<ProfileCardProps> = ({
  name,
  rating,
  description,
  profileImage,
}) => (
  <div className="flex items-center w-full px-10 py-5 shadow-md rounded-xl max-xl:mb-6 max-sm:px-3 max-sm:py-3">
    <div className="mr-4">
      <ProfileImage
        src={profileImage.src}
        alt={profileImage.alt}
        size={60}
        className="h-14 w-14"
      />
    </div>
    <div className="flex-1">
      <h6 className="sm:text-lg font-bold">{name}</h6>
      <Rating rating={rating} />
      <p className=" max-sm:text-sm">{description}</p>
    </div>
  </div>
);
export default RatingProfileCard;
