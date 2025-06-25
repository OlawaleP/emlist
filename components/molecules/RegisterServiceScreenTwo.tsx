import { Dispatch, SetStateAction } from "react";

import { RegisterExpertInfoType, ShowToastFunction } from "@/types";

import CustomButton from "../atoms/CustomButton";
import RegisterServiceTitle from "../atoms/RegisterServiceTitle";
import RegisterServiceDescription from "../atoms/RegisterServiceDescription";

interface RegisterServiceScreenTwoProps {
  expertInfo: RegisterExpertInfoType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCountry: string | null;
  setSelectedCountry: (country: string) => void;
  selectedLanguage: string[];
  setSelectedLanguage: Dispatch<SetStateAction<string[]>>;
  nextScreen: () => void;
  prevScreen: () => void;
  showToast: ShowToastFunction;
}

const RegisterServiceScreenTwo = ({
  expertInfo,
  handleChange,
  selectedCountry,
  setSelectedCountry,
  selectedLanguage,
  setSelectedLanguage,
  nextScreen,
  prevScreen,
  showToast,
}: RegisterServiceScreenTwoProps) => {
  const handleProceed = () => {
    if (
      !expertInfo.firstName ||
      !expertInfo.lastName ||
      !selectedLanguage ||
      !selectedCountry ||
      !expertInfo.phoneNumber ||
      !expertInfo.city ||
      !expertInfo.state ||
      !expertInfo.address ||
      !expertInfo.bio
    ) {
      showToast({
        message: "Please fill all fields.",
        type: "error",
        duration: 8000,
      });
      return;
    }
    nextScreen();
  };

  return (
    <div className="w-full mt-10 max-md:mt-5 space-y-4 sm:px-10 px-4">
      <RegisterServiceTitle title="Lets get to know you" />
      <RegisterServiceDescription>
        Fill out the business or service profile information below
      </RegisterServiceDescription>
      <div className="flex gap-2 justify-end  max-sm:justify-center">
        <CustomButton onClick={prevScreen}>Back</CustomButton>
        <CustomButton onClick={handleProceed}>Next</CustomButton>
      </div>
    </div>
  );
};

export default RegisterServiceScreenTwo;
