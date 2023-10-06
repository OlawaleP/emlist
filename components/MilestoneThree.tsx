"use client";

import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";

import { useState } from "react";
import MilestoneTopContent from "./MilestoneTopContent";

const MilestoneThree = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <section className="py-28 padding-x bg-[#F0FDF5]">
      <div className="grid grid-cols-12 py-10 gap-6">
        <MilestoneTopContent />
        <div className="col-span-3 max-lg:hidden max-h-max">
          <div className=" bg-white w-full rounded-[10px] py-10 px-5">
            <h5 className="text-[#000000] text-[18px] leading-[24px] font-[600] max-sm:text-[14px] mb-2">
              Invoice
            </h5>
            <div className=" flex flex-col  gap-4 ">
              <button className="w-full flex items-center justify-between bg-[#054753] rounded-[10px] h-[48px] px-4 text-[#FCFEFD] text-[14px] font-[500]">
                Milestone 1 invoice
                <Image
                  src="/assets/icons/arrow-right-2.svg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-9 max-lg:col-span-12 flelx flex-col w-full bg-white rounded-[10px] py-10 ">
          <ul className="flex items-center gap-4    px-10 max-sm:px-5">
            <li
              className={`${
                !open
                  ? "text-primary-green  border-b-primary-green border-b-2"
                  : "text-[#737774]"
              }  font-exo text-base font-[600] capitalize cursor-pointer max-sm:text-[14px]`}
              onClick={() => setOpen(false)}
            >
              Milestone 1
            </li>
            <li
              className={`${
                open
                  ? "text-primary-green  border-b-primary-green border-b-2"
                  : "text-[#737774]"
              }  font-exo text-base font-[600] capitalize cursor-pointer max-sm:text-[14px]`}
              onClick={() => setOpen(true)}
            >
              Milestone 2
            </li>
          </ul>
          <div className="w-full px-10 max-sm:px-5 py-6">
            <div className="w-full flex items-center justify-between">
              <h6 className=" my-5 text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
                Details
              </h6>
              <div className="flex gap-1 items-center">
                <p className="text-[#5E625F]  text-[14px] font-[500] leading-[16px] max-sm:text-[12px] whitespace-nowrap">
                  Due date
                </p>
                <div className=" flex items-center justify-center bg-[#F0FDF5] w-[74px] h-[30px] max-sm:h-[25px] max-sm:w-[55px] rounded-[20px]">
                  <p className="text-[#25C269]  text-[14px] font-[500] leading-[16px] max-sm:text-[12px] whitespace-nowrap">
                    3 days
                  </p>
                </div>
              </div>
            </div>
            <p className=" text-[#030A05] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sun..Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis{" "}
              <button className="text-[#25C269]  text-[14px] font-[500] leading-[16px] max-sm:text-[12px] whitespace-nowrap">
                see more
              </button>
            </p>
          </div>
          <div className=" px-10 max-sm:px-5 w-full  ">
            <div className="flex  gap-10 max-sm:gap-5 border-b-[1px] border-[#B8B9B8] py-6">
              <div className=" flex gap-2">
                <Image
                  src="/assets/icons/clock.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    1 weeks
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Milestone duration
                  </p>
                </div>
              </div>
              <div className=" flex gap-2">
                <Image
                  src="/assets/icons/empty-wallet.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    #{numberWithCommas(50000)}
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Amount
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  px-10 max-sm:px-5 w-full py-6">
            <div className="flex items-center gap-2">
              <p className=" text-[#303632] text-[16px] leading-[24px] font-[500] max-sm:text-[12px]">
                Milestone completed
              </p>
              <Image
                src="/assets/icons/checkbox.jpg"
                alt="menu"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 max-lg:col-span-5 max-md:col-span-8 max-sm:col-span-12 lg:hidden max-h-max">
          <div className=" bg-white w-full rounded-[10px] py-10 px-5">
            <h5 className="text-[#000000] text-[18px] leading-[24px] font-[600] max-sm:text-[14px] mb-2">
              Invoice
            </h5>
            <div className=" flex flex-col  gap-4 ">
              <button className="w-full flex items-center justify-between bg-[#054753] rounded-[10px] h-[48px] px-4 text-[#FCFEFD] text-[14px] font-[500]">
                Milestone 2 invoice
                <Image
                  src="/assets/icons/arrow-right-2.svg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestoneThree;
