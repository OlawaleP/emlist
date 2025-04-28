import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => (
  <input
    className={`min-w-full w-full max-w-full rounded-lg px-2 appearance-none bg-[#ececec] outline-none h-10 focus:outline-none focus:border-primary-green focus:border-1 ${className}`}
    style={{ fontSize: "16px" }}
    {...props}
  />
);

export default Input;
