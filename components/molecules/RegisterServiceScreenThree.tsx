import { ShowToastFunction } from "@/types";

import RegisterServiceDescription from "../atoms/RegisterServiceDescription";
import RegisterServiceTitle from "../atoms/RegisterServiceTitle";
import CustomButton from "../atoms/CustomButton";
import ProfileImageGuide from "./ProfileImageGuide";
import RegisterServiceProfileImageInput from "./RegisterServiceProfileImageInput";

interface RegisterServiceScreenThreeProps {
  profileImage: File | null;
  setProfileImage: (image: File | null) => void;
  nextScreen: () => void;
  prevScreen: () => void;
  showToast: ShowToastFunction;
}

const RegisterServiceScreenThree = ({
  profileImage,
  setProfileImage,
  nextScreen,
  prevScreen,
  showToast,
}: RegisterServiceScreenThreeProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
      const maxSizeInMB = 2 * 1024 * 1024; //2MB

      // Check file size
      if (file.size > maxSizeInMB) {
        showToast({
          message: "File exceeds the 3MB size limit.",
          type: "error",
          duration: 8000,
        });
        return;
      }

      if (!validExtensions.includes(file.type)) {
        showToast({
          message:
            "Unsupported file type. Only jpg, jpeg, and png are allowed.",
          type: "error",
          duration: 8000,
        });
        return;
      }

      setProfileImage(file);
    }
  };

  const handleDelete = () => {
    setProfileImage(null);
  };

  const handleProceed = () => {
    if (!profileImage) {
      showToast({
        message: "Please provide a profile image",
        type: "error",
        duration: 8000,
      });
      return;
    }
    nextScreen();
  };

  return (
    <div
      id="expert-profile-pic"
      className="w-full pt-24 pb-14 space-y-4 sm:px-10 px-4 max-w-4xl h-fit"
    >
      <RegisterServiceTitle title="Add your profile photo" />
      <RegisterServiceDescription>
        Upload the best business pictures here.
      </RegisterServiceDescription>
      <div className="grid grid-cols-5 gap-6 w-full">
        <RegisterServiceProfileImageInput
          profileImage={profileImage}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
        <ProfileImageGuide />
      </div>
      <div className="flex gap-2 justify-end pt-6 max-sm:justify-center">
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

export default RegisterServiceScreenThree;
