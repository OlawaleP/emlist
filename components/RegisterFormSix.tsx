"use client";

import Link from "next/link";
import RegistrationGuide from "./RegistrationGuide";
import { useState } from "react";
import Image from "next/image";

const RegisterFormSix = () => {
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
          <div className="w-full  max-md:mt-5">
            <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
              Write a brief business description
            </h1>
            <p className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:leading-[16px] py-5 max-w-[550px] min-w-[320px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enimt.
            </p>
            <div className="grid grid-cols-5 gap-6 w-full ">
              <div className="col-span-3 max-lg:col-span-5 max-md:col-span-3 max-sm:col-span-5 w-full">
                {" "}
                <div className="w-full">
                  <div className="w-full">
                    <textarea
                      className=" min-w-full w-full  max-w-full rounded-[10px]  px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:text-[14px] text-[#c8c5c5] "
                      rows={10}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="col-span-2   max-md:col-span-2 max-sm:col-span-5 max-lg:hidden  max-md:flex   max-sm:hidden ">
                <div className="w-full shadow-lg flex flex-col  justify-center  py-5 rounded-[10px] border-l-8 border-primary-green px-4">
                  <h3 className="text-[18px] font-[500] leading-[24px] max-sm:text-[14px] max-sm:[16px] text-[#030a05]">
                    You can mention
                  </h3>
                  <ul className="py-3 px-4 list-disc flex flex-col gap-2">
                    <li className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:[16px] text-[#303632]">
                      Years in business
                    </li>
                    <li className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:[16px] text-[#303632]">
                      What you are passionate about
                    </li>
                    <li className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:[16px] text-[#303632]">
                      Special skill or equipment
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-5 ">
                <p className="text-[#030A05] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  Add images
                </p>
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
                    <label htmlFor="business-pic" className="w-full h-full">
                      <input
                        id="business-pic"
                        type="file"
                        onChange={handleChange}
                        name="file"
                        className="invisible h-[1px] w-[1px]"
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="flex justify-end mb-28 mt-6 max-sm:justify-center col-span-3 max-lg:col-span-5">
                <Link
                  href="/register/expert/certificate"
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

export default RegisterFormSix;
