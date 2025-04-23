"use client";

import { useState } from "react";

import { useNavbarScroll } from "@/lib/hooks/useNavbarScroll";

import Logo from "../atoms/Logo";

const Navbar = () => {
  const [isSidebarActive, setIsSideBarActive] = useState(false);
  const { visible, isHeightGreaterThanScreen } = useNavbarScroll();

  const handleActivateSidebar = () => {
    setIsSideBarActive((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div
        className={`fixed w-full padding-ctn h-[10vh] flex-c-b backdrop-blur-xl transition-transform duration-700 z-50 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${isHeightGreaterThanScreen && "shadow"} ${
          isSidebarActive && "bg-gray-100"
        }`}
      >
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
