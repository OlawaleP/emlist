import { RegisterExpertInfoType, ShowToastFunction } from "@/types";

import NavigationButtons from "./NavigationButtons";
import RegisterServiceTitle from "../atoms/RegisterServiceTitle";
import RegisterServiceDescription from "../atoms/RegisterServiceDescription";
import BusinessFormGuid from "./BusinessFormGuid";
import BusinessFormWrapper from "./BusinessFormWrapper";

interface RegisterServiceScreenFour {
  expertInfo: RegisterExpertInfoType;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  businessCountry: string;
  setBusinessCountry: (country: string) => void;
  nextScreen: () => void;
  prevScreen: () => void;
  showToast: ShowToastFunction;
}

const RegisterServiceScreenFour = ({
  expertInfo,
  handleChange,
  businessCountry,
  setBusinessCountry,
  nextScreen,
  prevScreen,
  showToast,
}: RegisterServiceScreenFour) => {
  const handleProceed = () => {
    // if (
    //   !expertInfo.businessName ||
    //   !expertInfo.yearFounded ||
    //   !businessCountry ||
    //   !expertInfo.employees ||
    //   !expertInfo.statee ||
    //   !expertInfo.startPrice ||
    //   !expertInfo.noticePeriod
    // ) {
    //   showToast({
    //     message: "Please fill all business info.",
    //     type: "error",
    //     duration: 8000,
    //   });
    //   return;
    // }
    nextScreen();
  };

  return (
    <div
      id="business-profile"
      className="w-full pt-24 pb-14 space-y-4 sm:px-10 px-4 max-w-4xl h-fit"
    >
      <RegisterServiceTitle title="Tell us more about your business" />
      <RegisterServiceDescription>
        Additional business and service profile information below
      </RegisterServiceDescription>
      <div className="grid grid-cols-5 gap-6 w-full">
        <BusinessFormWrapper
          expertInfo={expertInfo}
          handleChange={handleChange}
          businessCountry={businessCountry}
          setBusinessCountry={setBusinessCountry}
        />
        <BusinessFormGuid />
      </div>

      <NavigationButtons
        prevHref="#expert-profile-pic"
        nextHref="#"
        onNext={handleProceed}
        onPrev={prevScreen}
      />
    </div>
  );
};

export default RegisterServiceScreenFour;
