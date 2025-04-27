import { ReactNode } from "react";

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
