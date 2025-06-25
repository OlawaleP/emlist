"use client";

import { useState } from "react";

import { useToast } from "@/lib/hooks/useToast";
import { useRegisterService } from "@/features/services/hooks/useRegisterService";

import RegisterServiceScreenOne from "../molecules/RegisterServiceScreenOne";
import RegistrationGuide from "../molecules/RegistrationGuide";

const ServiceRegistrationFormWrapper = () => {
  const { showToast } = useToast();

  const [currentScreen, setCurrentScreen] = useState(1);
  const { services, setServices } = useRegisterService();

  const nextScreen = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => prev - 1);
  };

  return (
    <div className="pt-20 max-md:pt-10 max-md:pb-15 md:pl-[500px]">
      {currentScreen === 1 && (
        <>
          <div className="w-full md:hidden h-full">
            <RegistrationGuide />
          </div>
          <RegisterServiceScreenOne
            services={services}
            setServices={setServices}
            nextScreen={nextScreen}
            showToast={showToast}
          />
        </>
      )}
    </div>
  );
};

export default ServiceRegistrationFormWrapper;
