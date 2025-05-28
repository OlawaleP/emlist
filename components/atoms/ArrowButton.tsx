import { ReactNode } from "react";

interface ArrowButtonProps {
  onClick: () => void;
  icon: ReactNode;
  position: "left" | "right";
  extraStyle: string;
}

const ArrowButton = ({
  onClick,
  icon,
  position,
  extraStyle,
}: ArrowButtonProps) => {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 ${
        position === "left"
          ? "left-0 -translate-x-1/2"
          : "right-0 translate-x-1/2"
      } bg-white shadow-md rounded-full hover:bg-gray-100 flex items-center justify-center ${extraStyle}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default ArrowButton;
