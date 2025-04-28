"use client";

import { motion } from "framer-motion";

import Logo from "../atoms/Logo";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="w-full relative">
      <div className="min-h-screen h-full w-full bg-primary-gradient">
        <div className="h-full w-full flex-1">
          <div className="sm:py-8 py-4 flex flex-col h-full gap-10 padding-ctn">
            <Logo />
            <div className="w-full flex-c justify-center flex-1 min-h-[86vh] h-full pb-14 pt-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-2xl p-8 pt-4 max-sm:px-4"
              >
                <h1 className="sm:text-lg font-bold sm:pt-6 capitalize mb-4">
                  {title}
                </h1>
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
