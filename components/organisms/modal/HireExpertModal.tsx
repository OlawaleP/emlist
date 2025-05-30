"use client";

import CloseIcon from "@/components/atoms/CloseIcon";
import CustomButton from "@/components/atoms/CustomButton";
import CustomModal from "@/components/atoms/CustomModal";
import { useToast } from "@/lib/hooks/useToast";

import { HiringDetails } from "@/types";
import Image from "next/image";

interface DateTime {
  date: string;
  time: string;
}

interface HireExpertModalProps {
  isOpen: boolean;
  onCancel: () => void;
  handleSubmit: () => void;
  handleFileChange: React.ChangeEventHandler<HTMLInputElement>;
  handleChnage: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  loading: boolean;
  hiringDetails: HiringDetails;
  selectedImage: any;
  handleDelete: () => void;
  handleAddDate: (date: string, time: string) => void;
  handleRemoveDate: (date: string) => void;
  availability: DateTime[];
  handleInputChange: any;
}

const HireExpertModal = ({
  isOpen,
  onCancel,
  handleSubmit,
  handleFileChange,
  handleChnage,
  loading,
  hiringDetails,
  selectedImage,
  handleDelete,
  handleAddDate,
  handleRemoveDate,
  availability,
  handleInputChange,
}: HireExpertModalProps) => {
  const { showToast } = useToast();

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 3); // Add 3 months

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onCancel}>
      <div className="  px-6 max-sm:px-3 py-10">
        <h2 className="sm:text-xl font-bold  mb-4 capitalize">
          Fill the form below
        </h2>
        <div className="grid grid-cols-2 w-full gap-4">
          <div className="w-full col-span-2   ">
            <p className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
              Full name
            </p>
            <input
              style={{ fontSize: "16px" }}
              type="text"
              className="expert-reg-input"
              name="fullName"
              value={hiringDetails.fullName}
              onChange={handleChnage}
            />
          </div>
          <div className="w-full col-span-2   ">
            <p className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
              Phone number
            </p>
            <input
              style={{ fontSize: "16px" }}
              type="text"
              className="expert-reg-input"
              name="phoneNumber"
              value={hiringDetails.phoneNumber}
              onChange={handleChnage}
            />
          </div>
          <div className="w-full col-span-2   ">
            <p className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
              Email address
            </p>
            <input
              style={{ fontSize: "16px" }}
              type="email"
              className="expert-reg-input"
              name="email"
              value={hiringDetails.email}
              onChange={handleChnage}
            />
          </div>
          <div className="w-full  col-span-2">
            <p className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
              Select type of private expert
            </p>
            <div className="w-full">
              <div className=" min-w-full w-full  max-w-full rounded-lg h-14 px-2 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-1  max-sm:h-12">
                <select
                  style={{ fontSize: "16px" }}
                  className="bg-[#ececec] outline-none min-w-full w-full h-full max-w-full max-sm:text-sm "
                  name="privateExpertType"
                  value={hiringDetails?.privateExpertType}
                  onChange={handleChnage}
                >
                  <option defaultValue="">Select private expert type</option>
                  <option value="Investigator">Investigator</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Consultant">Consultant</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full  col-span-2 ">
            <p className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
              Give details if its a new project that you've not added to Emilist
            </p>
            <div className="w-full">
              <textarea
                style={{ fontSize: "16px" }}
                className=" min-w-full w-full  max-w-full rounded-lg  p-2 bg-[rgb(236,236,236)] focus:outline-none focus:border-primary-green focus:border-1 max-sm:text-sm text-[#737774]"
                rows={8}
                name="jobDetails"
                value={hiringDetails?.jobDetails}
                onChange={handleChnage}
              ></textarea>
            </div>
          </div>

          {selectedImage ? (
            <div className="w-[100px] h-[100px] relative">
              {selectedImage && (
                <Image
                  src={URL.createObjectURL(selectedImage)}
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
            <div className="">
              <label htmlFor="file" className=" flex items-center ">
                <Image
                  src="/assets/icons/add.svg"
                  alt="logo"
                  width={130}
                  height={30}
                  className="object-contain w-6 h-6 max-sm:w-5 max-sm:h-6 mr-1"
                />{" "}
                <p className="text-primary-green py-2 font-medium max-sm:text-sm">
                  ADD FILE
                </p>
              </label>
              <input
                style={{ fontSize: "16px" }}
                id="file"
                type="file"
                onChange={handleFileChange}
                name="file"
                className="invisible h-0 w-0"
              />
            </div>
          )}

          <div className="w-full col-span-2   ">
            <p className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
              Location
            </p>
            <div className="w-full">
              <input
                style={{ fontSize: "16px" }}
                type="text"
                className=" expert-reg-input"
                name="location"
                value={hiringDetails?.location}
                onChange={handleChnage}
              />
            </div>
          </div>
          <div className="w-full col-span-2">
            <h2 className="font-semibold mb-4 text-[#5e625f]">
              Select Your Availability
            </h2>

            {availability.map((entry, index) => (
              <div key={index} className="flex-c flex-wrap gap-2 mb-4 py-2">
                <input
                  style={{ fontSize: "16px" }}
                  type="date"
                  value={entry.date}
                  className="border rounded px-3 py-2 bg-gray-500 text-gray-100 focus:outline-none focus:border-primary-green"
                  onChange={(e) => handleInputChange(e, "date", index)}
                  min={formatDate(today)}
                  max={formatDate(maxDate)}
                />
                <input
                  style={{ fontSize: "16px" }}
                  type="time"
                  value={entry.time}
                  className="border rounded px-3 py-2 bg-gray-500 text-gray-100 focus:outline-none focus:border-primary-green"
                  onChange={(e) => handleInputChange(e, "time", index)}
                />
                <button
                  className="bg-[#ff9933] text-white px-2 py-1 rounded"
                  onClick={() => handleRemoveDate(entry.date)}
                >
                  Remove
                </button>
              </div>
            ))}

            {availability.length < 3 && (
              <div className="flex-c gap-4 max-sm:flex-col">
                <div className="flex-1 w-full">
                  <label className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
                    Date:
                  </label>
                  <input
                    style={{ fontSize: "16px" }}
                    type="date"
                    className="expert-dark-reg-input"
                    onChange={(e) => {
                      const date = e.target.value;
                      if (!date) return;
                      const today = new Date();
                      const selectedDate = new Date(date);

                      if (selectedDate < today) {
                        showToast({
                          message: "You cannot select a past date.",
                          type: "error",
                        });
                      } else if (selectedDate > maxDate) {
                        showToast({
                          message:
                            "You can only select dates within the next 3 months.",
                          type: "error",
                        });
                      } else {
                        handleAddDate(date, "");
                      }
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <label className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
                    Time:
                  </label>
                  <input
                    style={{ fontSize: "16px" }}
                    type="time"
                    className="expert-dark-reg-input"
                    onChange={(e) => {
                      const time = e.target.value;
                      if (!time) return;
                      if (availability.length > 0) {
                        const lastDate = availability[availability.length - 1];
                        handleAddDate(lastDate.date, time);
                      }
                    }}
                  />
                </div>
              </div>
            )}

            <div className="mt-4">
              <h3 className="text-[#5e625f] py-2 font-medium max-sm:text-sm">
                Your Availability:
              </h3>
              <ul className="list-disc list-inside">
                {availability.map((entry, index) => (
                  <li key={index}>
                    {entry.date} at {entry.time || "No time selected"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <CustomButton type="button" loading={loading}>
            Send
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default HireExpertModal;
