import { MouseEvent, ReactNode } from "react";

export interface LayoutType {
  children: React.ReactNode;
}

export interface NavItemProps {
  label: string;
  onClick: () => void;
  isOpen: boolean;
}

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export interface ExpertCardProps {
  expert: {
    _id: string;
    businessImages?: { imageUrl: string }[];
    services: string[];
    currency: string;
    startingPrice?: number;
  };
  onClick: () => void;
}

export interface MaterialCardProps {
  material: {
    _id: string;
    images?: { imageUrl: string }[];
    name: string;
    currency: string;
    price?: number;
    isDiscounted: boolean;
    discountedPrice: number;
  };
  onClick: () => void;
}

export interface JobCardProps {
  job: any;
  userId?: string;
  addClicks: (type: string, id: string, userId?: string) => void;
}

export interface StarIconProps {
  filled: boolean;
  size?: number;
  className?: string;
}

export interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  loading?: boolean;
  isAllInputFilled?: boolean;
}

export interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export interface ProfileImageData {
  src: string;
  alt: string;
}

export interface ProfileCardProps {
  name: string;
  rating: number;
  description: string;
  profileImage: ProfileImageData;
}
