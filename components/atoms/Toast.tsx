// components/atoms/Toast.tsx
"use client";

import { useEffect } from "react";

import { useToast } from "@/lib/hooks/useToast";

interface ToastProps {
  id: string;
}

export const Toast: React.FC<ToastProps> = ({ id }) => {
  const { toast, dismissToast } = useToast(id);

  if (!toast) return null;

  const { message, type, duration, autoClose = true } = toast;

  // Ensure progress bar animation matches duration
  useEffect(() => {
    if (autoClose && duration) {
      const timer = setTimeout(dismissToast, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, dismissToast]);

  return (
    <div
      className="fixed bg-white bottom-4 right-4 flex items-center p-4 rounded-lg shadow-lg max-w-sm w-full"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center space-x-2">
        {type === "success" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span>{message}</span>
      </div>
      <button
        onClick={dismissToast}
        className="ml-4 btn btn-ghost btn-sm"
        aria-label="Close toast"
      >
        <svg
          className="w-4 h-4"
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
      {autoClose && duration && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-base-300">
          <div
            className={`h-full transition-all ${
              type === "success" ? "bg-primary-green" : "bg-primary-orange"
            }`}
            style={{
              width: "100%",
              animation: `shrink ${duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
};
