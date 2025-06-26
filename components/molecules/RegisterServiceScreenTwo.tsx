import { Dispatch, SetStateAction } from "react";

import { countries, languages } from "@/lib/constants";
import { RegisterExpertInfoType, ShowToastFunction } from "@/types";

import CustomButton from "../atoms/CustomButton";
import RegisterServiceTitle from "../atoms/RegisterServiceTitle";
import RegisterServiceDescription from "../atoms/RegisterServiceDescription";
import { FormInput } from "./FormInput";
import MultiSelectDropdown from "./MultiSelectDropdown";
import Label from "../atoms/Label";
import FormTextarea from "./FormTextarea";
import SearchableDropdown from "./SearchableDropdown";

interface RegisterServiceScreenTwoProps {
  expertInfo: RegisterExpertInfoType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  selectedCountry: string;
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
    <div
      id="expert-profile"
      className="w-full pt-24 pb-14 space-y-4 sm:px-10 px-4 max-w-4xl h-fit"
    >
      <RegisterServiceTitle title="Lets get to know you" />
      <RegisterServiceDescription>
        Fill out the business or service profile information below
      </RegisterServiceDescription>
      <div className="grid grid-cols-4 gap-6 w-full">
        <div className="input__container ">
          <FormInput
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            value={expertInfo?.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input__container ">
          <FormInput
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            value={expertInfo?.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input__container ">
          <FormInput
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            type="number"
            value={expertInfo?.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input__container space-y-1">
          <Label htmlFor="language">Language</Label>
          <MultiSelectDropdown
            selectedOptions={selectedLanguage}
            setSelectedOptions={setSelectedLanguage}
            options={languages}
            placeholder="Select a language"
            customPlaceholder="Specify"
          />
        </div>
        <div className="input__container space-y-1">
          <Label htmlFor="country">Country</Label>
          <SearchableDropdown
            selectedOption={selectedCountry}
            setSelectedOption={setSelectedCountry}
            options={countries}
          />
        </div>
        <div className="input__container ">
          <FormInput
            id="state"
            name="state"
            label="State"
            type="text"
            value={expertInfo?.state}
            onChange={handleChange}
          />
        </div>
        <div className="input__container ">
          <FormInput
            id="city"
            name="city"
            label="City"
            type="text"
            value={expertInfo?.city}
            onChange={handleChange}
          />
        </div>
        <div className="input__container ">
          <FormInput
            id="address"
            name="address"
            label="Address"
            type="text"
            value={expertInfo?.address}
            onChange={handleChange}
          />
        </div>
        <div className="w-full col-span-4">
          <FormTextarea
            id="bio"
            name="bio"
            label="Bio"
            rows={4}
            value={expertInfo?.bio}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-2 justify-end  max-sm:justify-center">
        <CustomButton href="#new-expert" onClick={prevScreen}>
          Back
        </CustomButton>
        <CustomButton href="#expert-profile-pic" onClick={handleProceed}>
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default RegisterServiceScreenTwo;
