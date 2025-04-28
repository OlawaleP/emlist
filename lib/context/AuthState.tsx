"use client";

import { createContext, useCallback, useEffect, useState } from "react";

import { readAuthCookie, clearCookie } from "../helpers/cookieHelper";
import { getCurrentUser } from "@/features/auth/api/getCurrentUser";
import { useToast } from "../hooks/useToast";

import GeneralSpinner from "@/components/atoms/GeneralSpinner";

export const AuthContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

const AuthState = ({ children }: Props) => {
  const token = readAuthCookie("sessionId");
  const { showToast } = useToast();

  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);

  const fetchUser = useCallback(async () => {
    try {
      setUserLoading(true);
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (error: any) {
      showToast({
        message:
          error instanceof Error ? error.message : "Authentication failed",
        type: "error",
        duration: 5000,
        autoClose: true,
      });
      clearCookie("sessionId");
      setCurrentUser(null);
    } finally {
      setUserLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUserLoading(false);
    }
  }, [fetchUser]);

  const refreshUser = useCallback(async () => {
    if (token) {
      await fetchUser();
    }
  }, [fetchUser]);

  const value = {
    currentUser,
    setCurrentUser,
    userLoading,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {userLoading ? <GeneralSpinner /> : children}
    </AuthContext.Provider>
  );
};

export default AuthState;
