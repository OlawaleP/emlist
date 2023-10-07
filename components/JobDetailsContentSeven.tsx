import { dashboardServices } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";

const JobDetailsContentSeven = () => {
  return (
    <section className="py-28 padding-x bg-[#F0FDF5]">
      <div className="grid grid-cols-12 py-10 gap-6">
        <div className="col-span-9 max-lg:col-span-12 flelx flex-col w-full bg-white rounded-[10px] py-10 ">
          <div className="w-full border-b-[1px] border-[#B8B9B8] px-10 max-sm:px-5">
            <div className="flex items-center justify-between">
              <h5 className="text-[#000000] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
                Interior painter for a 3 bedroom flat
              </h5>
              <Image
                src="/assets/icons/menu.png"
                alt="menu"
                width={30}
                height={30}
                className="object-contain w-[30px] h-[30px] max-sm:w-[18px] max-sm:h-[18px] max-sm:hidden"
              />
            </div>
            <button className="text-primary-green text-[16px] leading-[24px] font-[500] max-sm:text-[14px] py-2  underline">
              Promote
            </button>
          </div>
          <div className="w-full border-b-[1px] border-[#B8B9B8] px-10 max-sm:px-5 py-6 flex flex-col gap-3">
            <h5 className="text-primary-green text-[20px] leading-[28px] font-[500] max-sm:text-[16px]">
              Construction
            </h5>
            <div className="flex items-center gap-10  max-sm:gap-5">
              <p className="text-[#5E625F] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                Posted 2days ago
              </p>
              <div className="flex items-center gap-1">
                <Image
                  src="/assets/icons/location.png"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <p className="text-[#1A201B] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                  Lagos, Nigeriao
                </p>
              </div>
              <p className="text-[#030A05] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                <span className="text-[#1A201B] font-[600]">Job ID:</span> 12345
              </p>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-[#B8B9B8] px-10 max-sm:px-5 py-6 ">
            <p className="text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] max-sm:leading-[18px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sun..Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sun..Amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sun..Amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sun..Amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sun..Amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sun..
            </p>
          </div>
          <div className="w-full border-b-[1px] border-[#B8B9B8] px-10 max-sm:px-5 py-6 ">
            <div className="grid grid-cols-6 gap-10">
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/empty-wallet.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    #{numberWithCommas(300000)}
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    House
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/layer.png"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    2
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Milestone
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/guru.png"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    Level 2 & above
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Expert level
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/clock.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    3 weeks
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Project duration
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/face.png"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    4
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Applicants
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 max-sm:px-5 py-6 w-full">
            <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px] font-inter">
              Files
            </h6>
            <div className="flex items-center w-full gap-10 pt-4">
              <Image
                src="/assets/icons/pdf.jpg"
                alt="menu"
                width={61}
                height={61}
                className="object-contain w-[61px] h-[61px] max-sm:w-[40px] max-sm:h-[40px] "
              />
              <Image
                src="/assets/icons/mword.jpg"
                alt="menu"
                width={61}
                height={61}
                className="object-contain w-[61px] h-[61px] max-sm:w-[40px] max-sm:h-[40px] "
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 max-lg:hidden max-h-max">
          <div className=" bg-white w-full rounded-[10px] py-10 px-5">
            <h5 className="text-[#000000] text-[20px] leading-[28px] font-[600] max-sm:text-[16px] mb-5">
              About the job posted
            </h5>
            <div className=" flex flex-col  gap-5 ">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/profile-pic.svg"
                  alt="menu"
                  width={37}
                  height={37}
                  className="object-cover w-[37px] h-[37px] max-sm:w-[18px] max-sm:h-[18px] rounded-full "
                />
                <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[500] max-sm:text-[14px]">
                  Victor Falade
                </h6>
              </div>
              <div className="flex items-center gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px] whitespace-nowrap">
                  Location:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  Lagos, Nigeria
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Total Job posted:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  3
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Total Expert Hired:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  3
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Total Amount spent:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  #1,000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 max-lg:col-span-12 flex flex-col w-full bg-white rounded-[10px] py-10 ">
          <h4 className="px-10 max-sm:px-5 mb-2 text-[#000000] text-[20px] leading-[28px] font-[600] max-sm:text-[16px]">
            Milestone
          </h4>
          {dashboardServices.slice(0, 2).map((service) => (
            <div className=" px-10 max-sm:px-5 w-full border-t-[1px] border-[#B8B9B8] ">
              <h6 className=" my-5 text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
                Mile stone 1
              </h6>
              <div className="flex  gap-10 max-sm:gap-5">
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
              <div className="py-5">
                <h6 className=" my-5 text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
                  Milestone details
                </h6>
                <p className=" my-5 text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sun..Amet minim mollit non deserunt ullamco
                  est sit aliqua dolor do amet sint. Velit officia consequat
                  duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.Amet minim mollit non deserunt ullamco est sit
                  aliqua dolor do amet sint. Velit officia consequat duis
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-9 max-lg:col-span-12 flex justify-center  w-full  py-5 ">
          <div className="flex items-center justify-center w-full gap-4">
            <button className="bg-primary-green px-[20px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo whitespace-nowrap flex justify-center items-center  max-sm:py-[8px] max-sm:text-[14px]">
              Accept
            </button>

            <button className="bg-white px-[20px] py-[12px] border-[1px] border-[#030A05] rounded-[10px] cursor-pointer font-bold font-exo whitespace-nowrap flex justify-center items-center  max-sm:py-[8px] max-sm:text-[14px]">
              Amend
            </button>
            <button className="bg-[#FF5D7A] px-[20px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo whitespace-nowrap flex justify-center items-center  max-sm:py-[8px] max-sm:text-[14px]">
              Reject
            </button>
          </div>
        </div>
        <div className="max-lg:col-span-6 max-md:col-span-9 max-sm:col-span-12 lg:hidden max-h-max">
          <div className=" bg-white w-full rounded-[10px] py-10 px-5">
            <h5 className="text-[#000000] text-[20px] leading-[28px] font-[600] max-sm:text-[16px] mb-5">
              About the job posted
            </h5>
            <div className=" flex flex-col  gap-5 ">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/profile-pic.svg"
                  alt="menu"
                  width={37}
                  height={37}
                  className="object-cover w-[37px] h-[37px] max-sm:w-[30px] max-sm:h-[30px] rounded-full "
                />
                <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[500] max-sm:text-[14px]">
                  Victor Falade
                </h6>
              </div>
              <div className="flex items-center gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px] whitespace-nowrap">
                  Location:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  Lagos, Nigeria
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Total Job posted:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  3
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Total Expert Hired:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  3
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="flex-1 text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Total Amount spent:
                </h6>
                <p className="flex-1 text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  #1,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsContentSeven;
