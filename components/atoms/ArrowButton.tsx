import { ReactNode } from "react";

interface ArrowButtonProps {
  onClick: () => void;
  icon: ReactNode;
  position: "left" | "right";
}

const ArrowButton = ({ onClick, icon, position }: ArrowButtonProps) => {
  return (
    <button
      className={`absolute top-1/2 translate-y-[-50%] ${
        position === "left"
          ? "-left-8 max-sm:-left-4"
          : "-right-8 max-sm:-right-4"
      } bg-white shadow-md rounded-full w-[68px] h-[68px] max-sm:w-[37px] max-sm:h-[37px] flex items-center justify-center text-2xl`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default ArrowButton;
