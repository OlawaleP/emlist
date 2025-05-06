"use client";

import AuthState from "@/lib/context/AuthState";
import CartState from "@/lib/context/CartState";
import ChatState from "@/lib/context/ChatState";
import CompareState from "@/lib/context/CompareState";
import { SocketContextProvider } from "@/lib/context/SocketContext";
import ToastState from "@/lib/context/ToastState";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastState>
      <CompareState>
        <CartState>
          <AuthState>
            <ChatState>
              <SocketContextProvider>{children}</SocketContextProvider>
            </ChatState>
          </AuthState>
        </CartState>
      </CompareState>
    </ToastState>
  );
};

export default Providers;
