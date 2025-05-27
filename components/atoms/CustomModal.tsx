import React, { ReactNode, useEffect } from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: "sm" | "md" | "lg" | "xl";
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
  width = "md",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const widthClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`relative mx-4 w-full rounded-lg bg-white p-3 shadow-xl sm:mx-auto sm:p-4 ${widthClasses[width]}`}
      >
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full bg-gray-100"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
