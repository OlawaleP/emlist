"use client";

import Link from "next/link";
import Image from "next/image";
import { landingPageLinks } from "@constants";
import CustomerSearch from "./CustomerSearch";
import MaterialSearch from "./MaterialSearch";

type Props = {
  currentLink: number;
};

const Header = ({ currentLink }: Props) => {
  return (
    <main className=" padding-x pt-28 relative w-full grid grid-cols-7   gap-10">
      <div className="col-span-4 flex flex-col flex-1 max-xl:mt-10 w-full max-xl:px-20 max-md:px-0 max-xl:col-span-7 ">
        <h1 className="font-exo font-[800] text-[48px] text-[#030a05] mr-14 max-xl:text-center max-xl:mr-0 max-sm:text-[30px]">
          Find the perfect workers for your project
        </h1>
        <p className="font-[400] text-base text-[303632] mr-14 my-6 max-xl:text-center max-xl:mr-0">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enimt.
        </p>

        <div className="max-xl:hidden">
          <ul className="flex items-center w-full gap-8 my-5">
            {landingPageLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={`${
                    currentLink === link.id
                      ? "text-primary-green  border-b-primary-green border-b-2"
                      : "text-[#737774]"
                  }  font-exo text-base font-[600]`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {currentLink === 1 && <CustomerSearch />}
          {currentLink === 2 && (
            <div className="mb-10 ">
              <p className="font-exo text-base text-[#303632] font-[400]">
                Meet new customers, Sign up to start growing your business
              </p>
              <button className="bg-primary-green px-[34px] py-[15px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo mt-5">
                <Link href="/register/expert">Get Started</Link>
              </button>
            </div>
          )}
          {currentLink === 3 && <MaterialSearch />}
        </div>
      </div>
      <div className=" pt-10 max-xl:pt-0 max-xl:px-20 max-md:px-0 col-span-3 max-xl:col-span-7 w-full">
        {currentLink === 2 ? (
          <Image
            src="/assets/images/GroupImg2.svg"
            alt="menu"
            width={773}
            height={67}
            className="object-contain w-full h-full"
          />
        ) : (
          <Image
            src="/assets/images/GroupImg.svg"
            alt="menu"
            width={773}
            height={67}
            className="object-contain w-full h-full"
          />
        )}
      </div>
      <div className="xl:hidden max-xl:col-span-7">
        <ul className="flex items-center justify-start w-full gap-8 my-5 max-sm:gap-4">
          {landingPageLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.link}
                className={`${
                  currentLink === link.id
                    ? "text-primary-green  border-b-primary-green border-b-2"
                    : "text-[#737774]"
                }  font-exo text-base font-[600] max-sm:text-[14px]`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {currentLink === 1 && <CustomerSearch />}
        {currentLink === 2 && (
          <div className="mb-10 max-xl:flex flex-col items-center justify-center  ">
            <p className="font-exo text-base text-[#303632] font-[400] max-sm:text-[14px]">
              Meet new customers, Sign up to start growing your business
            </p>
            <button className="bg-primary-green px-[34px] py-[15px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo mt-5 text-base max-md:px-[20px] max-md:py-[8px] max-sm:text-[14px]">
              <Link href="/">Get Started</Link>
            </button>
          </div>
        )}
        {currentLink === 3 && <MaterialSearch />}
      </div>
    </main>
  );
};

export default Header;
