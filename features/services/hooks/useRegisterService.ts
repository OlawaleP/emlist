import { useState } from "react";

import { RegisterExpertInfoType } from "@/types";
import { formatInputTextNumberWithCommas } from "@/lib/helpers/formatInputTextNumberWithCommas";
import { formatInputTextNumber } from "@/lib/helpers/formatNumbers";

export const useRegisterService = () => {
  const [services, setServices] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [businessCountry, setBusinessCountry] = useState<string>("");
  const [expertInfo, setExpertInfo] = useState<RegisterExpertInfoType>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    address: "",
    bio: "",
    state: "",
    businessName: "",
    yearFounded: "",
    employees: "",
    businessAddress: "",
    statee: "",
    startPrice: "",
    noticePeriod: "",
    currency: "NGN",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setExpertInfo((prev) => ({
      ...prev,
      [name]:
        name === "startPrice"
          ? formatInputTextNumberWithCommas(value)
          : name === "employees" ||
            "noticePeriod" ||
            "yearFounded" ||
            "phoneNumber"
          ? formatInputTextNumber(value)
          : value,
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
    businessCountry,
    setBusinessCountry,
  };
};
