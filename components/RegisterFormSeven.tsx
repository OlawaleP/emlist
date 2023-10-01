"use client";

import Link from "next/link";
import RegistrationGuide from "./RegistrationGuide";
import Image from "next/image";
import { useState } from "react";

const RegisterFormSeven = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile =
      e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    setFile(selectedFile);
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setImageUrl(objectUrl);
    } else {
      setImageUrl(null);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setImageUrl(null);
  };
  return (
    <section className="max-md:padding-x">
      <div className="flex max-md:flex-col">
        <div className="max-md:hidden">
          <RegistrationGuide />
        </div>

        <div className="pt-28 max-md:pt-24 max-md:pb-15 px-10 w-full max-md:px-5 max-sm:px-3">
          <div className="w-full mt-10 max-md:mt-5">
            <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
              Add your profile photo
            </h1>
            <p className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:leading-[16px] py-5 max-w-[550px] min-w-[320px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enimt. amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enimt.
            </p>
            <div className="grid grid-cols-4 gap-6 w-full ">
              <div className="col-span-2 max-lg:col-span-5 max-md:col-span-3 max-sm:col-span-5 w-full">
                <p className="text-[#030A05] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  Add Certificate
                </p>
                <div className="w-full shadow-lg flex flex-col items-center justify-center  py-5 rounded-[10px]">
                  <div className="w-[216px] h-[210px] bg-[#ECECEC] rounded-[5px] flex  items-center justify-center">
                    {file ? (
                      <div className="w-full h-full relative">
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt="upload"
                            width={30}
                            height={30}
                            className="object-cover w-full h-full "
                          />
                        )}
                        <div className="absolute bottom-0 right-0 bg-primary-green p-2">
                          <Image
                            src="/assets/icons/close-square.svg"
                            alt="arrow-left"
                            width={30}
                            height={30}
                            className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                            onClick={handleDelete}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <input
                          id="profile-pic"
                          type="file"
                          onChange={handleChange}
                          name="file"
                          className="invisible h-[1px] w-[1px]"
                        />
                      </>
                    )}
                  </div>
                  <div className="flex justify-end  max-sm:justify-center col-span-4">
                    <label
                      htmlFor="profile-pic"
                      className="bg-primary-green py-[10px] px-6 my-4 text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  whitespace-nowrap  text-[14px] max-lg:my-3 max-sm:text-[11px]   "
                    >
                      Upload
                    </label>
                  </div>
                </div>
                <div className="flex  mt-6 justify-center max-lg:hidden  ">
                  <Link
                    href="/register/expert/certificate"
                    className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px] max-sm:mt-20"
                  >
                    Request Verification
                  </Link>
                </div>
              </div>
              <div className="col-span-2  max-lg:col-span-4  flex flex-col gap-5">
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Issuing Organisation
                  </p>
                  <div className="w-full">
                    <input
                      type="text"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="Phil "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Verification Number
                  </p>
                  <div className="w-full">
                    <input
                      type="text"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="12345678990"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Issing Date
                  </p>
                  <div className="w-full">
                    <input
                      type="date"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px] text-[#737774]"
                      placeholder="12345678990"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Expiring Date
                  </p>
                  <div className="w-full">
                    <input
                      type="date"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px] text-[#737774]"
                      placeholder="12345678990"
                    />
                  </div>
                  <div className="flex w-full items-center py-2 gap-2">
                    <input
                      type="checkbox"
                      className="checked:bg-primary-green checked:border-primary-green checked:border-[1px]"
                    />
                    <p className="text-[#5e625f] py-2 text-[14px] font-[500] max-sm:text-[12px]">
                      This certificate doest expire
                    </p>
                  </div>
                  <button className="w-full flex items-center justify-end">
                    <Image
                      src="/assets/icons/add.svg"
                      alt="logo"
                      width={130}
                      height={30}
                      className="object-contain w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px] mr-1"
                    />{" "}
                    <p className="text-primary-green py-2 text-[16px] font-[500] max-sm:text-[14px]">
                      ADD MORE
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex   my-6 justify-center lg:hidden   col-span-4">
                <Link
                  href="/register/expert/certificate"
                  className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold   whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px]"
                >
                  Request Verification
                </Link>
              </div>
              <p className="text-[#030A05] text-[16px] font-[500] max-sm:text-[14px] col-span-5">
                Add Membership
              </p>
              <div className="w-full col-span-2   max-lg:col-span-4   ">
                <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  Organisation
                </p>
                <div className="w-full">
                  <input
                    type="text"
                    className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                    placeholder="Phil "
                  />
                </div>
              </div>
              <div className="w-full col-span-2  max-lg:col-span-4  ">
                <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  Position held
                </p>
                <div className="w-full">
                  <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                    <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                      <option>Member</option>
                      <option>President</option>
                      <option>Chairman</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full col-span-2  max-lg:col-span-4">
                <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  State Date
                </p>
                <div className="w-full">
                  <input
                    type="date"
                    className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px] text-[#737774]"
                    placeholder="12345678990"
                  />
                </div>
              </div>
              <div className="w-full col-span-2  max-lg:col-span-4   ">
                <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  End Date
                </p>
                <div className="w-full">
                  <input
                    type="date"
                    className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px] text-[#737774]"
                    placeholder="12345678990"
                  />
                </div>
                <div className="flex w-full items-center py-2 gap-2">
                  <input
                    type="checkbox"
                    className="checked:bg-primary-green checked:border-primary-green checked:border-[1px]"
                  />
                  <p className="text-[#5e625f] py-2 text-[14px] font-[500] max-sm:text-[12px]">
                    No end date
                  </p>
                </div>
                <button className="w-full flex items-center justify-end">
                  <Image
                    src="/assets/icons/add.svg"
                    alt="logo"
                    width={130}
                    height={30}
                    className="object-contain w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px] mr-1"
                  />{" "}
                  <p className="text-primary-green py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    ADD MORE
                  </p>
                </button>
              </div>
              <div className="flex justify-end mb-28 mt-6 max-sm:justify-center col-span-5">
                <Link
                  href="/register/expert/insurance"
                  className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px] max-sm:mt-20"
                >
                  Proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterFormSeven;
