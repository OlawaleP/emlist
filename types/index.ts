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
