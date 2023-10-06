import DashboardNavBar from "@components/DashboardNavBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <section className="pt-28 padding-x pb-20">
        <h1 className=" text-[30px] font-[700] leading-[36px] max-sm:text-[24px] max-sm:leading-[30px]">
          Post a Job
        </h1>
        <div className="grid grid-cols-2 w-full gap-10 mt-4  ">
          <div className="col-span-1 flex flex-col gap-4 max-md:col-span-2 mr-4 max-md:mr-0">
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Invite Expert
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="Expert Unique ID or Email or User ID"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Select work category
              </p>
              <div className="w-full">
                <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Lagos</option>
                    <option>Imo</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Narrow down to a service
              </p>
              <div className="w-full">
                <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Bricklayer</option>
                    <option>Imo</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Enter a title for your project
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Describe your project as detailed as you can
              </p>
              <div className="w-full">
                <textarea
                  className=" min-w-full w-full  max-w-full rounded-[10px]  px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:text-[14px] text-[#c8c5c5] "
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <label
                className=" flex items-center text-primary-green py-2 text-[16px] font-[500] max-sm:text-[14px]"
                htmlFor="attach-file"
              >
                <Image
                  src="/assets/icons/add.svg"
                  alt="logo"
                  width={130}
                  height={30}
                  className="object-contain w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px] mr-1"
                />
                Attach a file
              </label>
              <input
                type="file"
                id="attach-file"
                className="h-[1px] w-[1px] invisible"
              />
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Project duration
              </p>
              <div className="w-full grid grid-cols-3 gap-4">
                <input
                  type="text"
                  className="col-span-2 min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="3"
                />
                <div className="col-span-1 min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Week</option>
                    <option>Day</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Budget
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Location
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="Lagos, Nigeria"
                />
              </div>
            </div>
            <div className="w-full my-3">
              <h2 className="text-[20px] font-[600] leading-[32px] max-sm:text-[16px] max-sm:leading-[20px] py-5 ">
                Expert Level
              </h2>
              <div className=" w-full flex flex-col gap-3">
                <div className="flex items-center">
                  <Image
                    src="/assets/icons/circle.svg"
                    alt="menu"
                    width={25}
                    height={25}
                    className="object-contain w-[25px] h-[25px]"
                  />{" "}
                  {/* <input
              type="radio"
              id="Emi Preferred"
              name="contact"
              value="telephone"
            /> */}
                  <label
                    htmlFor="Emi Preferred"
                    className="ml-3 text-base text-[#303632]"
                  >
                    Level 4 & Above
                  </label>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/icons/circle.svg"
                    alt="menu"
                    width={25}
                    height={25}
                    className="object-contain w-[25px] h-[25px]"
                  />{" "}
                  {/* <input
              type="radio"
              id="Emi Preferred"
              name="contact"
              value="telephone"
            /> */}
                  <label
                    htmlFor="Emi Preferred"
                    className="ml-3 text-base text-[#303632]"
                  >
                    Level 3 & Above
                  </label>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/icons/circle.svg"
                    alt="menu"
                    width={25}
                    height={25}
                    className="object-contain w-[25px] h-[25px]"
                  />{" "}
                  {/* <input
              type="radio"
              id="Emi Preferred"
              name="contact"
              value="telephone"
            /> */}
                  <label
                    htmlFor="Emi Preferred"
                    className="ml-3 text-base text-[#303632]"
                  >
                    Level 2 & Above
                  </label>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/icons/circle.svg"
                    alt="menu"
                    width={25}
                    height={25}
                    className="object-contain w-[25px] h-[25px]"
                  />{" "}
                  {/* <input
              type="radio"
              id="Emi Preferred"
              name="contact"
              value="telephone"
            /> */}
                  <label
                    htmlFor="Emi Preferred"
                    className="ml-3 text-base text-[#303632]"
                  >
                    Level 1 & Above
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4 max-md:col-span-2 ml-4 max-md:ml-0">
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Milestone
              </p>
              <div className="w-full">
                <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-[20px] font-[600] leading-[32px] max-sm:text-[16px] max-sm:leading-[20px] py-5 ">
                Milestone 1
              </h2>
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Milestone duration
              </p>
              <div className="w-full grid grid-cols-3 gap-4">
                <input
                  type="text"
                  className="col-span-2 min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="1"
                />
                <div className="col-span-1 min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Week</option>
                    <option>Day</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Details of whats to be achieved
              </p>
              <div className="w-full">
                <textarea
                  className=" min-w-full w-full  max-w-full rounded-[10px]  px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:text-[14px] text-[#c8c5c5] "
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Amount
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder=""
                />
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-[20px] font-[600] leading-[32px] max-sm:text-[16px] max-sm:leading-[20px] py-5 ">
                Milestone 2
              </h2>
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Milestone duration
              </p>
              <div className="w-full grid grid-cols-3 gap-4">
                <input
                  type="text"
                  className="col-span-2 min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="1"
                />
                <div className="col-span-1 min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Week</option>
                    <option>Day</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Details of whats to be achieved
              </p>
              <div className="w-full">
                <textarea
                  className=" min-w-full w-full  max-w-full rounded-[10px]  px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:text-[14px] text-[#c8c5c5] "
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Amount
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="flex mb-28 mt-6 justify-center col-span-2 ">
            <button className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px] max-sm:mt-20">
              Proceed
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
