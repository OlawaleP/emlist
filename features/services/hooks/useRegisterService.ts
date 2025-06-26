import { useState } from "react";

import { RegisterExpertInfoType } from "@/types";

export const useRegisterService = () => {
  const [services, setServices] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [expertInfo, setExpertInfo] = useState<RegisterExpertInfoType>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    address: "",
    bio: "",
    state: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExpertInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    services,
    setServices,
    expertInfo,
    handleChange,
    selectedCountry,
    setSelectedCountry,
    selectedLanguage,
    setSelectedLanguage,
    profileImage,
    setProfileImage,
  };
};
