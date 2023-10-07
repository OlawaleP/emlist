"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const DashboardNavBar = () => {
  const [openServiceDropdown, setOpenServiceDropdown] = useState(false);
  const [openMaterialDropdown, setOpenMaterialDropdown] = useState(false);
  const [openJobDropdown, setOpenJobDropdown] = useState(false);

  const handleServiceDropDown = () => {
    setOpenJobDropdown(false);
    setOpenMaterialDropdown(false);
    setOpenServiceDropdown((prev) => !prev);
  };

  const handleJobDropDown = () => {
    setOpenServiceDropdown(false);
    setOpenMaterialDropdown(false);
    setOpenJobDropdown((prev) => !prev);
  };

  const handleMaterialDropDown = () => {
    setOpenJobDropdown(false);
    setOpenServiceDropdown(false);
    setOpenMaterialDropdown((prev) => !prev);
  };

  return (
    <>
      {openMaterialDropdown && (
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
      )}
      {openServiceDropdown && (
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
      )}
      {openJobDropdown && (
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.2)]"></div>
      )}
      <header className=" py-8 z-10 w-full fixed bg-white max-lg:shadow-lg">
        <nav className="flex justify-between items-center  padding-x">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/customers" className=" mr-4 cursor-pointer">
              <Image
                src="/assets/images/Logo.svg"
                alt="logo"
                width={130}
                height={30}
                className="object-contain"
              />
            </Link>
            <ul className=" flex items-center gap-6 max-lg:hidden ">
              <div className=" text-[#030a05] text-base font-[500]  relative ">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={handleJobDropDown}
                >
                  Jobs{" "}
                  <Image
                    src="/assets/icons/arrow-down.svg"
                    alt="logo"
                    width={20}
                    height={20}
                    className="object-contain ml-2"
                  />
                </p>
                {openJobDropdown && (
                  <div className="absolute w-[200px] -left-2 bottom-[-14rem] rounded-[10px] bg-white px-4 py-6 border-[1px] z-[1]">
                    <ul className="flex flex-col gap-3 w-full ">
                      <Link href="/job/new" onClick={handleJobDropDown}>
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          my jobs
                        </li>
                      </Link>
                      <Link
                        href="/post-job/bidable"
                        onClick={handleJobDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          List new jobs
                        </li>
                      </Link>
                      <Link href="/all-listed-jobs" onClick={handleJobDropDown}>
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          listed jobs
                        </li>
                      </Link>
                      <Link
                        href="/all-job-applications"
                        onClick={handleJobDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          application
                        </li>
                      </Link>
                      <Link
                        href="/service/not-completed"
                        onClick={handleJobDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          Saved jobs
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              <div className=" text-[#030a05] text-base font-[500]   relative">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={handleServiceDropDown}
                >
                  Services{" "}
                  <Image
                    src="/assets/icons/arrow-down.svg"
                    alt="logo"
                    width={20}
                    height={20}
                    className="object-contain ml-2"
                  />
                </p>

                {openServiceDropdown && (
                  <div className="absolute w-[200px] left-0 bottom-[-14rem] rounded-[10px] bg-white p-4 border-[1px]">
                    <ul className="flex flex-col gap-3 w-full pb-4 border-b-[1px] border-[#b8b9b8]">
                      <Link
                        href="/service/details"
                        onClick={handleServiceDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          Bricklayer
                        </li>
                      </Link>
                      <Link
                        href="/service/not-completed"
                        onClick={handleServiceDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          Painter
                        </li>
                      </Link>
                      <Link
                        href="/service/not-completed"
                        onClick={handleServiceDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          Tyler
                        </li>
                      </Link>
                    </ul>
                    <ul>
                      <Link href="/register/expert">
                        <li className="flex items-center">
                          {" "}
                          <Image
                            src="/assets/icons/add.svg"
                            alt="logo"
                            width={20}
                            height={20}
                            className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-1"
                          />{" "}
                          <p className="text-primary-green py-2 text-[16px] font-[400] max-sm:text-[14px]">
                            Add New
                          </p>
                        </li>
                      </Link>
                      <Link href="/service/set-up-target">
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          {" "}
                          Set target
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              <li className=" text-[#030a05] text-base font-[500]   ">
                <Link href="/project/active">Projects</Link>
              </li>
              <li className=" text-[#030a05] text-base font-[500]   whitespace-nowrap">
                <Link href="/become-expert">Private Experts</Link>
              </li>

              <div className=" text-[#030a05] text-base font-[500] relative">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={handleMaterialDropDown}
                >
                  Materials{" "}
                  <Image
                    src="/assets/icons/arrow-down.svg"
                    alt="logo"
                    width={20}
                    height={20}
                    className="object-contain ml-2"
                  />
                </p>
                {openMaterialDropdown && (
                  <div className="absolute w-[200px] left-0 bottom-[-10rem] rounded-[10px] bg-white px-4 py-6 border-[1px]">
                    <ul className="flex flex-col gap-3 w-full ">
                      <Link
                        href="/service/details"
                        onClick={handleMaterialDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          Listed materials
                        </li>
                      </Link>
                      <Link
                        href="/post-product"
                        onClick={handleMaterialDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          List new materials
                        </li>
                      </Link>
                      <Link
                        href="/materials/saved"
                        onClick={handleMaterialDropDown}
                      >
                        <li className="text-[#303632] text-[16px] font-[400] capitalize hover:text-primary-green">
                          Saved materials
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>

              <li>
                <Link
                  href="/direct-contract"
                  className="bg-primary-green px-[20px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo whitespace-nowrap"
                >
                  Direct Contract
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6 max-lg:hidden">
            <Link href="/">
              <Image
                src="/assets/icons/sms.png"
                alt="menu"
                width={24}
                height={24}
                className="object-contain w-[24px] h-[24px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/icons/notification.png"
                alt="menu"
                width={24}
                height={24}
                className="object-contain w-[24px] h-[24px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/icons/shopping-cart.png"
                alt="menu"
                width={24}
                height={24}
                className="object-contain w-[24px] h-[24px]"
              />
            </Link>
            <div className="block">
              <h1 className="w-[32px] h-[32px] bg-[#6B7280] text-center text-[14px] leading-[14px] rounded-full flex justify-center items-center font-inter text-white uppercase">
                PJ
              </h1>
            </div>
          </div>

          <div className="hidden max-lg:flex items-center gap-3">
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="object-contain w-[30px] h-[30px]"
            />
            <div className="block">
              <h1 className="w-[32px] h-[32px] bg-[#6B7280] text-center text-[14px] leading-[14px] rounded-full flex justify-center items-center font-inter text-white ">
                PJ
              </h1>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DashboardNavBar;
