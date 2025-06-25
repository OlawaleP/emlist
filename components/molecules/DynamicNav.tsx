"use client";

import { useNavbarScroll } from "@/lib/hooks/useNavbarScroll";

import Logo from "../atoms/Logo";

const DynamicNav = ({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg?: boolean;
}) => {
  const { visible, isHeightGreaterThanScreen } = useNavbarScroll();
  return (
    <header>
      <div
        className={`fixed w-full transition-transform duration-700 z-10 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${isHeightGreaterThanScreen && "shadow"} ${
          bg ? "bg-white" : "backdrop-blur-xl"
        }`}
      >
        <div className="padding-ctn py-6 flex-c-b relative">
          <Logo />
          {children}
        </div>
      </div>
    </header>
  );
};

export default DynamicNav;
