import Link from "next/link";

import { ButtonProps } from "@/types";

const CustomButton: React.FC<ButtonProps> = ({
  children,
  className,
  type = "button",
  onClick,
  href,
  loading,
  isAllInputFilled,
}) => {
  const isDisabled =
    isAllInputFilled !== undefined &&
    !isAllInputFilled &&
    loading !== undefined;

  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || loading}
      className={`custom-btn ${className} ${
        isDisabled || loading
          ? "cursor-not-allowed opacity-65"
          : "hover:bg-green-500"
      }`}
    >
      {loading ? <span className="btn-loader" /> : children}
    </button>
  );

  return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
};

export default CustomButton;
