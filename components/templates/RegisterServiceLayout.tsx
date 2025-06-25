"use client";

import React, { useContext } from "react";

import { AuthContext } from "@/lib/context/AuthState";

import DynamicNav from "../molecules/DynamicNav";
import RegistrationGuide from "../molecules/RegistrationGuide";

const RegisterServiceLayout = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <DynamicNav bg>
        <div className="flex w-8 h-8 bg-slate-600 rounded-full flex-c justify-center text-white uppercase">
          {(currentUser?.fullName ||
            currentUser?.userName)?.[0]?.toUpperCase() || "E"}
        </div>
      </DynamicNav>
      <div className="max-md:hidden">
        <RegistrationGuide />
      </div>
      {children}
    </div>
  );
};

export default RegisterServiceLayout;
