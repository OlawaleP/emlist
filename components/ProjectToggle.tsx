"use client";

import { ProjectLinks } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  currentLink: number;
};

const ProjectToggle = ({ currentLink }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full mt-10">
      {" "}
      <ul className="flex items-center gap-4 max-sm:hidden mt-[4rem]">
        {ProjectLinks.map((link) => (
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
            {ProjectLinks[currentLink - 1].name}
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
          <ul className="absolute flex flex-col -bottom-28 right-0 w-full max-sm:w-full bg-slate-50 shadow-md justify-center p-2 rounded-md">
            {ProjectLinks.map((link, index) => (
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
    </div>
  );
};

export default ProjectToggle;
