"use client";

import ArrowDownIcon from "../atoms/ArrowDownIcon";

import { NavItemProps } from "@/types";

const NavItem = ({ label, onClick, isOpen }: NavItemProps) => {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className="flex items-center space-x-1 font-medium"
        aria-expanded={isOpen}
        aria-controls="mega-menu"
      >
        <span>{label}</span>
        <ArrowDownIcon
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full" />
    </div>
  );
};

export default NavItem;
