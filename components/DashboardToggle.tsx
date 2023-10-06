"use client";

import { dashboardLinks } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  currentLink: number;
};
const DashboardToggle = ({ currentLink }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="capitalize text-[24px] font-[500] leading-[20px] max-sm:text-[18px] max-sm:leading-[28px]">
          Explore Emilist
        </h2>
        <p className="capitalize text-[14px] font-[400] leading-[20px]  text-[#5E625F]  flex items-center md:hidden">
          <Image
            src="/assets/icons/search-normal.svg"
            alt="logo"
            width={130}
            height={30}
            className="object-contain w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px] mr-2"
          />{" "}
          Search
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 border-b-[1px] border-[#B8B9B8]">
        <div className="flex justify-between items-center w-full mt-6 gap-2">
          <ul className="flex items-center gap-4 max-sm:hidden">
            {dashboardLinks.map((link) => (
              <Link
                href={link.link}
                className={`${
                  currentLink === link.id
                    ? "text-primary-green  border-b-primary-green border-b-2"
                    : "text-[#737774]"
                }  font-exo text-base font-[600] capitalize`}
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <div
            className={`sm:hidden flex-1 max-w-[190px]  rounded-[10px]  px-4  flex justify-between items-center relative max-sm:h-[46px] border-[1px] border-[#D9D9D9]`}
          >
            <div
              className="flex gap-3 items-center flex-wrap w-[80%] "
              onClick={() => setOpen((prev) => !prev)}
            >
              <p className="flex gap-1 items-center text-[#737774] max-sm:text-[14px] capitalize">
                {dashboardLinks[currentLink - 1].name}
              </p>
            </div>
            <div className="">
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="arrow-down"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            {open && (
              <ul className="absolute flex flex-col -bottom-24 right-0 w-full max-sm:w-full bg-slate-50 shadow-md justify-center p-2 rounded-md">
                {dashboardLinks.map((link, index) => (
                  <Link
                    href={link.link}
                    key={index}
                    className="w-full hover:bg-white"
                  >
                    <li
                      onClick={() => {
                        setOpen((prev) => !prev);
                      }}
                      className=" max-sm:text-[14px] text-[#737774] capitalize"
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          {currentLink === 1 && (
            <button className="bg-primary-green px-[25px]  h-[50px] items-center relative max-sm:h-[46px] justify-center  text-[#fcfefd] rounded-[10px] cursor-pointer font-bold max-sm:text-[12px] max-sm:font-[500]">
              <Link href="/post-job/regular">Post a Job</Link>
            </button>
          )}

          {currentLink === 2 && (
            <button className="bg-primary-green px-[25px]  h-[50px] items-center relative max-sm:h-[46px] justify-center  text-[#fcfefd] rounded-[10px] cursor-pointer font-bold max-sm:text-[12px] max-sm:font-[500]">
              <Link href="/register/expert">Join as an expert</Link>
            </button>
          )}
          {currentLink === 3 && (
            <button className="bg-primary-green px-[25px]  h-[50px] items-center relative max-sm:h-[46px] justify-center  text-[#fcfefd] rounded-[10px] cursor-pointer font-bold max-sm:text-[12px] max-sm:font-[500]">
              <Link href="/post-product">Post a Product</Link>
            </button>
          )}
          {currentLink === 4 && (
            <p className="capitalize text-base max-sm:text-[14px]">
              7 jobs recommended
            </p>
          )}
        </div>
        <div className="flex justify-between w-full gap-10">
          <div className="flex-1">
            <p className="text-[#303632] text-[16px] leading-[24px] font-[400] mb-3  max-sm:text-[14px] max-sm:leading-[20px] ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <form className=" flex-1 w-full flex items-center justify-between mb-10 max-md:hidden">
            <div className="flex-1 flex items-center px-4 py-3 rounded-lg  border-[#737774] border-[1px] focus-within:border-primary-green max-sm:px-1 max-sm:py-1 shadow-md">
              <Image
                src="/assets/icons/search-normal.svg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain mr-3 max-sm:mr-1"
              />
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none text-[#737774] font-exo text-base max-md:text-[10px] w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardToggle;
