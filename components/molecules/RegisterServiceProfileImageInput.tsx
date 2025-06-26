import Image from "next/image";
import CloseIcon from "../atoms/CloseIcon";
import CustomButton from "../atoms/CustomButton";

interface Props {
  profileImage: File | null;
  handleDelete: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterServiceProfileImageInput = ({
  profileImage,
  handleChange,
  handleDelete,
}: Props) => {
  return (
    <div className="col-span-3 max-lg:col-span-5 max-md:col-span-3 max-sm:col-span-5 w-full">
      <div className="w-full shadow-lg flex-c flex-col justify-center  py-5 rounded-lg">
        <div className="w-[216px] h-[210px] bg-[#ECECEC] rounded flex-c justify-center">
          {profileImage ? (
            <div className="w-full h-full relative">
              {profileImage && (
                <Image
                  src={URL.createObjectURL(profileImage)}
                  alt="upload"
                  width={30}
                  height={30}
                  className="object-cover w-full h-full"
                />
              )}
              <CloseIcon
                onClick={handleDelete}
                extraStyle="absolute bottom-0 right-0"
              />
            </div>
          ) : (
            <label
              htmlFor="profile-pic"
              className="w-full h-full cursor-pointer"
            >
              <input
                id="profile-pic"
                type="file"
                onChange={handleChange}
                name="file"
                className="invisible h-[1px] w-[1px]"
                style={{ fontSize: "16px" }}
              />
            </label>
          )}
        </div>

        <div className="flex justify-end max-sm:justify-center col-span-4 mt-4 cursor-pointer">
          <CustomButton>
            <label htmlFor="profile-pic" className="w-full h-full">
              Upload
            </label>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default RegisterServiceProfileImageInput;
