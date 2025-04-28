"use client";

import { useContext } from "react";

import { ToastContext } from "../context/ToastState";

export interface ToastState {
  message: string;
  type: "success" | "error";
  duration?: number;
  autoClose?: boolean;
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
