"use client";

import AuthState from "@/lib/context/AuthState";
import CartState from "@/lib/context/CartState";
import ToastState from "@/lib/context/ToastState";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastState>
      <CartState>
        <AuthState>{children}</AuthState>
      </CartState>
    </ToastState>
  );
};

export default Providers;
