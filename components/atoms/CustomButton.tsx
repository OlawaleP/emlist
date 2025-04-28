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
    (loading === false && typeof loading !== "undefined") ||
    (typeof isAllInputFilled !== "undefined" && !isAllInputFilled);

  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || loading}
      className={`custom-btn ${className} ${
        isDisabled || loading ? "cursor-not-allowed opacity-65" : ""
      } ${loading ? "w-40" : ""}`}
    >
      {loading ? <span className="btn-loader" /> : children}
    </button>
  );

  return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
};

export default CustomButton;
