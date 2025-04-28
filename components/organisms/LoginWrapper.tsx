"use client";

import Link from "next/link";

import { ROUTES } from "@/lib/constants/routes";
import { LoginForm } from "../molecules/forms/LoginForm";
import { useLogin } from "@/features/auth/hooks/useLogin";

import SocialLoginSection from "@/features/auth/components/SocialLoginSection";

const LoginWrapper = () => {
  const {
    handleLogin,
    formData,
    loading,
    inputType,
    handleChange,
    handleInputType,
    checkAllFieldsFilled,
  } = useLogin();
  return (
    <div className="">
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleLogin={handleLogin}
        loading={loading}
        inputType={inputType}
        handleInputType={handleInputType}
        checkAllFieldsFilled={checkAllFieldsFilled}
      />
      <SocialLoginSection />
      <div className="w-full flex justify-center sm:pt-5">
        <p className="max-sm:text-sm">
          Don't have an EmiList account{" "}
          <Link href={ROUTES?.SIGN_UP} className="text-primary-green">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginWrapper;
