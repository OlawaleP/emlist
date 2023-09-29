import { fourColorStar } from "@constants";
import Image from "next/image";
import Link from "next/link";

const ReviewDescription = () => {
  return (
    <section className="padding-x sm:pt-10 sm:pb-10 pb-6">
      <h5 className="text-[20px] leading-[28px] font-[600] text-[#000000] max-sm:text-[15px] max-sm:leading-[24px] ">
        About The Seller
      </h5>
      <div>
        <div className="flex w-full padding-y">
          <Image
            src="/assets/images/profiletwo.svg"
            alt="menu"
            width={30}
            height={30}
            className="object-cover w-[114px] h-[114px] max-sm:w-[70px] max-sm:h-[70px] rounded-full mr-4 max-sm:mr-1"
          />

          <div className="flex-1 w-full">
            <div className="flex items-center">
              <h6 className="text-[24px] font-[600] text-[#030a05] max-sm:text-[16px] max-sm:font-[700] mr-4">
                Victor Falade
              </h6>
              <div className="w-2 h-2 bg-primary-green rounded-full"></div>
              <p className="ml-2 text-primary-green text-[16px] ">Online</p>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <p className="text-[#5E625F] text-base pr-2 border-r-[1px] border-[##5E625F] max-sm:text-[12px]">
                  LEVEL 4
                </p>
                <div className="flex items-center my-1 gap-2 max-sm:gap-1 pl-2">
                  {" "}
                  {fourColorStar.map((star, index) => (
                    <Image
                      key={index}
                      src={star}
                      alt="rate"
                      width={20}
                      height={20}
                      className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px]"
                    />
                  ))}
                  <p className="text-[13px] max-sm:text-[10px]">(51)</p>
                </div>
              </div>
            </div>
            <Link href="/">
              <button className="border-[1px] boreder-[#303632] px-4 py-3 rounded-[10px] mt-4 text-[#303632]">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-10 max-sm:gap-2">
          <div>
            <h4 className="text-[18px] leading-[28px] font-[600] text-[#030A05] max-sm:text-[12px] max-sm:leading-[24px] font-inter mb-2">
              Member Since
            </h4>
            <h6 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[20px] ">
              18 May, 2022
            </h6>
          </div>
          <div>
            <h4 className="text-[18px] leading-[28px] font-[600] text-[#030A05] max-sm:text-[12px] max-sm:leading-[24px] font-inter mb-2">
              Location
            </h4>
            <h6 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[20px] ">
              Lagos, Nigeria
            </h6>
          </div>
          <div>
            <h4 className="text-[18px] leading-[28px] font-[600] text-[#030A05] max-sm:text-[12px] max-sm:leading-[24px] font-inter mb-2">
              Language
            </h4>
            <h6 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[20px] ">
              English
            </h6>
          </div>
          <div>
            <h4 className="text-[18px] leading-[28px] font-[600] text-[#030A05] max-sm:text-[12px] max-sm:leading-[24px] font-inter mb-2">
              Notice period
            </h4>
            <h6 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[20px] ">
              4days
            </h6>
          </div>
        </div>
        <div className="pt-20 max-sm:pt-10 pb-10 max-sm:pb-6 grid grid-cols-5">
          <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[18px] col-span-3 max-sm:col-span-5">
            My name is Adepetun Opeyemi and I am a freelance writer with 2 years
            experience in writing copy or content for people. Working with me in
            this industry will assure you of 100% timely delivering of orders,
            plagiarism free work, as well as confidentiality in any information
            that you will give me as a writer.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-2">
          <div className="flex items-center  gap-8 max-sm:gap-2">
            <h4 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
              Total Jobs:
            </h4>
            <p className="text-[16px] leading-[24px] font-[700] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] ">
              51
            </p>
          </div>
          <div className="flex items-center  gap-8 max-sm:gap-2">
            <h4 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
              Successful jobs:
            </h4>
            <p className="text-[16px] leading-[24px] font-[700] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] ">
              51
            </p>
          </div>
          <div className="flex items-center  gap-8 max-sm:gap-2">
            <h4 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
              Unsuccessful jobs:
            </h4>
            <p className="text-[16px] leading-[24px] font-[700] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] ">
              0
            </p>
          </div>
          <div className="flex items-center  gap-8 max-sm:gap-2">
            <h4 className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
              Job sucess rate:
            </h4>
            <p className="text-[16px] leading-[24px] font-[700] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] ">
              100%
            </p>
          </div>
        </div>
        <div className="pt-20 max-sm:pt-10">
          <h3 className="pb-10 max-sm:pb-6 text-[20px] leading-[28px] font-[600] text-[#030A05] max-sm:text-[16px] max-sm:leading-[18px] ">
            Insurance
          </h3>
          <div className=" pb-10 max-sm:pb-6 grid grid-cols-5">
            <div className="col-span-3 max-sm:col-span-5 flex flex-col gap-6 max-sm:gap-3">
              <div className="flex items-center">
                <h6 className="text-[16px] leading-[24px] font-[600] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
                  Issuing Org:
                </h6>
                <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] ">
                  Leadway Assurance
                </p>
              </div>
              <div className="flex items-center ">
                <h6 className="text-[16px] leading-[24px] font-[600] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
                  Type of cover:
                </h6>
                <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] ">
                  Property Insurance
                </p>
              </div>
              <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[12px] max-sm:leading-[18px] col-span-3 max-sm:col-span-5">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="pb-6 max-sm:pb-6 text-[20px] leading-[28px] font-[600] text-[#030A05] max-sm:text-[16px] max-sm:leading-[18px] ">
            Certification
          </h3>
          <Link
            href="/"
            className="pb-10 max-sm:pb-6 text-[20px] leading-[28px] font-[600] text-primary-green max-sm:text-[16px] max-sm:leading-[18px] underline"
          >
            See certification
          </Link>
        </div>
        <div className="pt-20 max-sm:pt-10 pb-10 max-sm:pb-5">
          <h3 className="pb-6 max-sm:pb-6 text-[20px] leading-[28px] font-[600] text-[#030A05] max-sm:text-[16px] max-sm:leading-[18px] ">
            Membership
          </h3>
          <div className="shadow-lg px-3 py-6 max-w-[315px] rounded-[10px]">
            <h6 className="text-center text-[18px] leading-[24px] font-[600] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] whitespace-nowrap w-full mb-4">
              Painters association of Nigeria
            </h6>
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <h6 className="text-[16px] leading-[24px] font-[600] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
                  Position held:
                </h6>
                <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] ">
                  Member
                </p>
              </div>
              <div className="flex items-center ">
                <h6 className="text-[16px] leading-[24px] font-[600] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
                  Starting Date:
                </h6>
                <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] ">
                  25/Feb/1998
                </p>
              </div>
              <div className="flex items-center ">
                <h6 className="text-[16px] leading-[24px] font-[600] text-[#030A05] max-sm:text-[14px] max-sm:leading-[18px] w-[137px]">
                  End Date:
                </h6>
                <p className="text-[16px] leading-[24px] font-[400] text-[#303632] max-sm:text-[14px] max-sm:leading-[18px] ">
                  25/Feb/1998
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewDescription;
