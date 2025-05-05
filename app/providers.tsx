"use client";

import AuthState from "@/lib/context/AuthState";
import CartState from "@/lib/context/CartState";
import CompareState from "@/lib/context/CompareState";
import ToastState from "@/lib/context/ToastState";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastState>
      <CompareState>
        <CartState>
          <AuthState>{children}</AuthState>
        </CartState>
      </CompareState>
    </ToastState>
  );
};

export default Providers;
