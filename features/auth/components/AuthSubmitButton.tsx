import React from "react";

interface AuthSubmitButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  isAllInputFilled?: boolean;
  type: "submit" | "button";
}

const AuthSubmitButton = ({
  children,
  loading,
  type = "submit",
  isAllInputFilled,
}: AuthSubmitButtonProps) => {
  const isDisabled =
    (loading === false && typeof loading !== "undefined") ||
    (typeof isAllInputFilled !== "undefined" && !isAllInputFilled);

  return (
    <button
      type={type}
      disabled={isDisabled || loading}
      className={`w-40 bg-primary-green text-white hover:bg-green-600 whitespace-nowrap transition-all duration-300 rounded-lg h-12 ${
        isDisabled || loading ? "cursor-not-allowed opacity-65" : ""
      }`}
    >
      {" "}
      {loading ? <span className="btn-loader" /> : children}
    </button>
  );
};

export default AuthSubmitButton;
