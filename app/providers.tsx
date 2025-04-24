"use client";

import AuthState from "@/lib/context/AuthState";
import CartState from "@/lib/context/CartState";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartState>
      <AuthState>{children}</AuthState>
    </CartState>
  );
};

export default Providers;
