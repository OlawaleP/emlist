"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ExploreEmilistModal from "./ExploreEmilistModal";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onCancel = () => {
    setIsOpen(false);
  };
  return (
    <header className=" py-8 z-10 w-full fixed bg-white max-lg:shadow-lg">
      <nav className="flex justify-between items-center  padding-x">
        <Link href="/" className=" flex gap-2 flex-center cursor-pointer">
          <Image
            src="/assets/images/Logo.svg"
            alt="logo"
            width={130}
            height={30}
            className="object-contain"
          />
        </Link>
        <ul className=" flex items-center gap-8 max-lg:hidden ">
          <li>
            <Link
              href="/register/expert"
              className="bg-primary-green px-[20px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo"
            >
              Join as an Expert
            </Link>
          </li>
          <li className=" text-[#030a05] text-base font-[500]   ">
            <Link href="/">List New Job</Link>
          </li>
          <li className=" text-[#030a05] text-base font-[500] cursor-pointer ">
            <p className="flex items-center" onClick={() => setIsOpen(true)}>
              Explore Emilist{" "}
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="logo"
                width={20}
                height={20}
                className="object-contain ml-2"
              />
            </p>
            <ExploreEmilistModal isOpen={isOpen} onCancel={onCancel} />
          </li>
          <li className=" text-[#030a05] text-base font-[500]   ">
            <Link href="/login">Log in</Link>
          </li>
          <li className=" text-[#030a05] text-base font-[500]   ">
            <Link href="/sign-up">Sign up</Link>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="object-contain w-[30px] h-[30px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
