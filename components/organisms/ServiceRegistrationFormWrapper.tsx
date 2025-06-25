"use client";

import { useState } from "react";

import { useToast } from "@/lib/hooks/useToast";
import { useRegisterService } from "@/features/services/hooks/useRegisterService";

import RegisterServiceScreenOne from "../molecules/RegisterServiceScreenOne";
import RegistrationGuide from "../molecules/RegistrationGuide";
import RegisterServiceScreenTwo from "../molecules/RegisterServiceScreenTwo";

const ServiceRegistrationFormWrapper = () => {
  const { showToast } = useToast();

  const [currentScreen, setCurrentScreen] = useState(1);
  const {
    services,
    setServices,
    expertInfo,
    handleChange,
    selectedCountry,
    setSelectedCountry,
    selectedLanguage,
    setSelectedLanguage,
  } = useRegisterService();

  const nextScreen = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => prev - 1);
  };

  return (
    <div className="pt-20 max-md:pt-10 max-md:pb-15 flex">
      <div className="w-[500px] max-md:hidden" />
      <div className="flex-1 w-full overflow-x-hidden">
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
        {currentScreen === 2 && (
          <RegisterServiceScreenTwo
            expertInfo={expertInfo}
            handleChange={handleChange}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            nextScreen={nextScreen}
            prevScreen={prevScreen}
            showToast={showToast}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceRegistrationFormWrapper;
