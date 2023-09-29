"use client";

import MainNav from "@components/MainNav";
import RegisterFormOne from "@components/RegisterFormOne";
import { useState } from "react";

const RegisterExpert = () => {
  const [currentForm, setCurrentForm] = useState<number>(1);
  return (
    <main className="relative">
      <MainNav />
      <RegisterFormOne />
    </main>
  );
};

export default RegisterExpert;
