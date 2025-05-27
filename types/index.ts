import { MouseEvent, ReactNode } from "react";

export interface LayoutType {
  children: React.ReactNode;
}

export interface ToastState {
  message: string;
  type: "success" | "error";
  duration?: number;
  autoClose?: boolean;
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

export interface FavoriteButtonProps {
  liked: boolean;
  onSave: () => void;
  onUnsave: () => void;
  show?: boolean;
}

export interface ReadMoreProps {
  text: string;
  maxLength: number;
  style?: string;
}

export interface PriceDisplayProps {
  currency: string;
  price: number;
}

export interface Material {
  _id: string;
  name: string;
  description: string;
  images: { imageUrl: string }[];
  currency: string;
  price: number;
  liked: boolean;
  userId: any;
}

export interface MaterialInfoProps {
  material: Material;
}

export interface User {
  _id: string;
  fullName?: string;
  userName: string;
  profileImage?: string;
}

export interface UserProfileLinkProps {
  user: User;
}

export interface MaterialListProps {
  allMaterials: Material[];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  refetchAllMaterials: () => Promise<void>;
}

export interface BusinessListProps {
  totalBusinesses: number;
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  reFetchAllBusinesses: () => Promise<void>;
  businesses: any;
}

export interface FilterMaterialWrapperProps {
  minValue: number;
  maxValue: number;
  handleMinChange: (value: number) => void;
  handleMaxChange: (value: number) => void;
  rating: string;
  setRating: (rating: string) => void;
  noOfReviews: string | undefined;
  setNoOfReviews: (reviews: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  getAllMaterials: () => Promise<void>;
}

export interface FilterServiceWrapperProps {
  minValue: number;
  maxValue: number;
  expertType: string;
  setExpertType: (expert: string) => void;
  handleMinChange: any;
  handleMaxChange: any;
  rating: string;
  setRating: (rating: string) => void;
  noOfReviews: string | undefined;
  setNoOfReviews: (reviews: string) => void;
  location: string;
  setLocation: (location: string) => void;
  noticePeriod: number | undefined;
  setNoticePeriod: (period: number) => void;
  fetchBusinesses: () => Promise<void>;
  currency: string;
  setCurrency: (currency: string) => void;
}

export interface FetchDataType {
  fetchData: () => Promise<void>;
}

export interface ProfileInitialProps {
  initial: string;
  className: string;
}
