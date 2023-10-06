"use client";

import { dashboardMsgProfiles } from "@constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DashboardCards = () => {
  const currentDate = new Date();

  const getLastNDays = (date: Date, n: number) => {
    const dates = [];
    for (let i = 1; i <= n; i++) {
      const previousDate = new Date(date);
      previousDate.setDate(date.getDate() - i);
      dates.push(previousDate);
    }
    return dates.reverse();
  };

  const getNextNDays = (date: Date, n: number) => {
    const dates = [];
    for (let i = 1; i <= n; i++) {
      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + i);
      dates.push(nextDate);
    }
    return dates;
  };

  const [last3Days, setLast3Days] = useState(getLastNDays(currentDate, 2));
  const [next3Days, setNext3Days] = useState(getNextNDays(currentDate, 4));
  return (
    <div className="flex flex-col gap-4 w-full max-lg:overflow-x-scroll max-lg:flex-row">
      <div className="bg-white w-full p-6 flex flex-col gap-6 rounded-[10px] max-sm:px-3">
        <h4 className="capitalize text-[20px] font-[600] text-[#030A05] leading-[24px] max-sm:text-[16px]">
          {currentDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </h4>
        <div className="flex w-full gap-3 overflow-x-scroll">
          {last3Days.map((date, index) => (
            <div className="rounded-[34px]" key={index}>
              <div className=" shadow-lg max-w-[30px] min-w-[30px] w-[30px] rounded-[34px]  ">
                <div className="p-2 m-1 flex flex-col items-center gap-[0.2rem]">
                  <h6 className="capitalize text-[12px] font-[400] text-[#B8B9B8] leading-[20px] max-sm:text-[10px]">
                    {date
                      .toLocaleDateString("en-US", { weekday: "short" })
                      .charAt(0)}
                  </h6>
                  <p className="capitalize text-[12px] font-[600] text-[#737774] leading-[20px] max-sm:text-[10px]">
                    {date.toLocaleDateString("en-US", { day: "numeric" })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="rounded-[34px]">
            <div className=" shadow-lg max-w-[30px] min-w-[30px] w-[30px] rounded-[34px]  ">
              <div className="p-2 m-1 flex flex-col items-center gap-[0.2rem] bg-primary-green  rounded-[34px]">
                <h6 className="capitalize text-[12px] font-[400] text-white leading-[20px] max-sm:text-[10px]">
                  {currentDate
                    .toLocaleDateString("en-US", { weekday: "short" })
                    .charAt(0)}
                </h6>
                <p className="capitalize text-[12px] font-[600] text-white leading-[20px] max-sm:text-[10px]">
                  {currentDate.toLocaleDateString("en-US", { day: "numeric" })}
                </p>
              </div>
            </div>
          </div>

          {next3Days.map((date, index) => (
            <div className="rounded-[34px]" key={index}>
              <div className=" shadow-lg max-w-[30px] min-w-[30px] w-[30px] rounded-[34px]  ">
                <div className="p-2 m-1 flex flex-col items-center gap-[0.2rem]">
                  <h6 className="capitalize text-[12px] font-[400] text-[#B8B9B8] leading-[20px] max-sm:text-[10px]">
                    {date
                      .toLocaleDateString("en-US", { weekday: "short" })
                      .charAt(0)}
                  </h6>
                  <p className="capitalize text-[12px] font-[600] text-[#737774] leading-[20px] max-sm:text-[10px]">
                    {date.toLocaleDateString("en-US", { day: "numeric" })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white w-full rounded-[10px] p-6 max-sm:px-3 max-sm:min-w-min">
        <h4 className="text-[18px] font-[500] text-[#030A05] leading-[24px] max-sm:text-[14px]">
          Your Target for this month
        </h4>
        <div className="flex flex-col gap-4 my-5 ">
          <div className="flex flex-col gap-4 max-lg:flex-row max-lg:items-center w-full">
            <div className="text-[14px] font-[500] text-[#303632] leading-[20px] max-sm:text-[12px]">
              <h6 className="">Jobs</h6>
              <div className="flex items-center w-full gap-4">
                <div className="w-[223px] h-[8px] rounded-[10px] bg-[#D0CFCF]">
                  <div className="h-full w-[57%] bg-[#054753] rounded-[10px]"></div>
                </div>
                <p>57%</p>
              </div>
            </div>
            <div className="text-[14px] font-[500] text-[#303632] leading-[20px] max-sm:text-[12px]">
              <h6 className="">Jobs</h6>
              <div className="flex items-center w-full gap-4">
                <div className="w-[223px] h-[8px] rounded-[10px] bg-[#D0CFCF]">
                  <div className="h-full w-[40%] bg-[#FF9933] rounded-[10px]"></div>
                </div>
                <p>40%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-lg:flex-row max-lg:items-center w-full">
            <div className="text-[14px] font-[500] text-[#303632] leading-[20px] max-sm:text-[12px]">
              <h6 className="">Jobs</h6>
              <div className="flex items-center w-full gap-4">
                <div className="w-[223px] h-[8px] rounded-[10px] bg-[#D0CFCF]">
                  <div className="h-full w-[40%] bg-[#25C269] rounded-[10px]"></div>
                </div>
                <p>40%</p>
              </div>
            </div>
            <div className="text-[14px] font-[500] text-[#303632] leading-[20px] max-sm:text-[12px]">
              <h6 className="">Friends invited</h6>
              <div className="flex items-center w-full gap-4">
                <div className="w-[223px] h-[8px] rounded-[10px] bg-[#D0CFCF]">
                  <div className="h-full w-[100%] bg-[#FF5D7A] rounded-[10px]"></div>
                </div>
                <p>100%</p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center max-sm:justify-start">
            <Link
              href="/"
              className="text-[14px] font-[600] text-primary-green leading-[24px] max-sm:text-[12px]"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white w-full rounded-[10px] p-6 max-sm:px-3">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <p className="text-[16px] font-[500] text-[#000000] leading-[24px] max-sm:text-[12px]">
              Messages
            </p>
            <p className="text-[#FCFEFD] text-[14px] bg-[#054753] px-[8px] py-[2px] rounded-[20px]">
              5
            </p>
          </div>

          <Link
            href="/"
            className="text-[14px] font-[600] text-primary-green leading-[24px] max-sm:text-[12px]"
          >
            View all
          </Link>
        </div>
        <div className="flex flex-col mt-10 gap-4 max-lg:flex-row overflow-x-scroll max-lg:gap-8">
          {dashboardMsgProfiles.slice(0, 3).map((profile, index) => (
            <div className="flex w-full gap-3" key={index}>
              <div className="w-[40px] h-[40px] rounded-full bg-[#6B7280] flex items-center justify-center relative">
                {profile.profile ? (
                  <Image
                    src={profile.profile}
                    alt="logo"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full min-w-full max-w-full max-h-full min-h-full"
                  />
                ) : (
                  <p className="font-inter text-[14px] uppercase text-white">
                    {profile.firstName.slice(0, 1)}
                    {profile.lastName.slice(0, 1)}
                  </p>
                )}
                <div className="w-[9px] h-[9px] bg-primary-green rounded-full absolute bottom-0 right-0"></div>
              </div>
              <div className="flex-1 flex flex-col gap-2 border-[#B8B9B8] border-b-[1px] pb-4">
                <div className="flex items-center justify-between">
                  <p className="capitalize text-[16px] font-[400] text-[#030A05] leading-[24px] max-sm:text-[14px] whitespace-nowrap mr-2">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="text-[14px] font-[400] text-[#737774] leading-[20px] max-sm:text-[12px]">
                    10M
                  </p>
                </div>
                <p className="text-[14px] font-[400] text-[#303632] leading-[20px] max-sm:text-[12px]">
                  Amet minim mollit non deseru ullamco.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
