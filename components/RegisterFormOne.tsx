"use client";

import { useState } from "react";
import RegistrationGuide from "./RegistrationGuide";
import { jobOptions } from "@constants";
import Image from "next/image";
import Link from "next/link";

const RegisterFormOne = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <section className="">
      <div className="flex max-md:flex-col">
        <RegistrationGuide />
        <div id="registrationform1" className="pt-28 max-md:pt-10 max-md:pb-15">
          <div className="max-w-[550px] mx-10 mt-20 max-md:mt-10 max-sm:mx-4">
            <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
              Get New jobs near you
            </h1>
            <p className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:[16px] py-5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enimt. amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enimt.
            </p>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#5e625f] text-[16px] font-[500] py-2 max-sm:text-[14px]">
                  Whats your line of work?
                </p>
                <div
                  className={`${
                    open && "border-primary-green border-[1px]"
                  } min-w-full  w-full max-w-full  rounded-[10px] h-[62px] px-4 bg-[#ececec] flex justify-between items-center relative max-sm:h-[46px]`}
                >
                  <div
                    className="flex gap-3 items-center flex-wrap w-[80%] "
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    {" "}
                    {selectedOptions.map((option) => (
                      <p
                        key={option}
                        className="flex gap-1 items-center text-[#737774] max-sm:text-[14px]"
                      >
                        {option}{" "}
                        <Image
                          src="/assets/icons/close-square.svg"
                          alt="arrow-left"
                          width={30}
                          height={30}
                          className="object-contain w-[14px] h-[14px] max-sm:w-[12px] max-sm:h-[12px] "
                          onClick={() => toggleOption(option)}
                        />
                      </p>
                    ))}
                  </div>
                  <div className="">
                    <Image
                      src="/assets/icons/arrow-down.svg"
                      alt="arrow-left"
                      width={30}
                      height={30}
                      className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                      onClick={() => setOpen((prev) => !prev)}
                    />
                  </div>
                  {open && (
                    <ul className="absolute flex flex-col -bottom-20 right-0 w-full max-sm:w-full bg-slate-50 shadow-md justify-center p-2">
                      {jobOptions.map((option) => (
                        <li
                          key={option.id}
                          onClick={() => {
                            toggleOption(option.label);
                            setOpen((prev) => !prev);
                          }}
                          className=" max-sm:text-[14px] text-[#737774]"
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="">
                <p className="text-[#5e625f] text-[16px] font-[500] max-sm:text-[14px] py-2">
                  Location
                </p>
                <input
                  type="text"
                  id="location"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="Lagos, Nigeria "
                />
              </div>
              <div className="flex justify-end mb-28 max-sm:justify-center">
                <Link
                  href="/register/expert/personal-details"
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

export default RegisterFormOne;
