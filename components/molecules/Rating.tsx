import { RatingProps } from "@/types";

import StarIcon from "../atoms/StarIcon";

const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
}) => (
  <div className="flex items-center my-1">
    {[...Array(maxRating)].map((_, index) => (
      <StarIcon
        key={index}
        filled={index < rating}
        size={size}
        className="w-5 h-5"
      />
    ))}
  </div>
);

export default Rating;
