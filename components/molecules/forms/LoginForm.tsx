import Link from "next/link";

import { FormEventHandler } from "react";
import { FormInput } from "../FormInput";
import { PasswordInput } from "../PasswordInput";

import CustomButton from "@/components/atoms/CustomButton";
import { ROUTES } from "@/lib/constants/routes";

interface LoginFormProps {
  formData: { email: string; password: string };
  handleChange: (
    field: keyof { email: string; password: string },
    value: string
  ) => void;
  handleLogin: FormEventHandler<HTMLFormElement>;
  loading: boolean;
  inputType: "text" | "password";
  handleInputType: () => void;
  checkAllFieldsFilled: (field: any) => boolean;
}

export const LoginForm = ({
  formData,
  handleChange,
  handleLogin,
  loading,
  inputType,
  handleInputType,
  checkAllFieldsFilled,
}: LoginFormProps) => {
  const isAllInputFilled = checkAllFieldsFilled(formData);

  console.log("isAllInputFilled", isAllInputFilled);

  return (
    <form
      className="w-full flex flex-col gap-3 text-gray-600"
      onSubmit={handleLogin}
    >
      <FormInput
        id="email"
        label="Enter Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="Enter your email"
      />
      <div className="w-full">
        <PasswordInput
          id="password"
          label="Enter Password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          inputType={inputType}
          toggleInputType={handleInputType}
          placeholder="Enter your password"
        />
        <div className="flex items-center justify-end">
          <Link
            href={ROUTES?.FORGOT_PASSWORD}
            className="font-semibold max-sm:text-sm py-2"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <CustomButton
        type="submit"
        loading={loading}
        isAllInputFilled={isAllInputFilled}
        className="w-full"
      >
        Login
      </CustomButton>
    </form>
  );
};
