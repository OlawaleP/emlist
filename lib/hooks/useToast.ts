"use client";

import { useState, useCallback } from "react";

export interface ToastState {
  message: string;
  type: "success" | "error";
  duration?: number;
  autoClose?: boolean;
}

export function useToast(id: string) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback(
    ({ message, type, duration = 3000, autoClose = true }: ToastState) => {
      setToast({ message, type, duration, autoClose });
      if (autoClose && duration) {
        setTimeout(() => setToast(null), duration);
      }
    },
    []
  );

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  return { toast, showToast, dismissToast };
}
