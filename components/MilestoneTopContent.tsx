import { fourColorStar } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";
import Link from "next/link";

const MilestoneTopContent = () => {
  return (
    <div className="col-span-9 max-lg:col-span-12 flelx flex-col w-full bg-white rounded-[10px] py-10 ">
      <div className="w-full  px-10 max-sm:px-5 pb-4">
        <div className="flex items-center justify-between">
          <h5 className="text-[#000000] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
            Interior painter for a 3 bedroom flat
          </h5>
        </div>
        <p className="text-[#030A05] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] py-2">
          <span className="text-[#1A201B] font-[600]">Job ID:</span> 12345
        </p>
      </div>
      <div className="w-full px-10 max-sm:px-5 py-6 ">
        <div className="flex justify-between items-center gap-10 flex-wrap">
          <div className="flex gap-2">
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
                #{numberWithCommas(300000)}
              </h6>
              <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                Budget
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/dollar-circle.jpg"
              alt="menu"
              width={20}
              height={20}
              className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
            />
            <div className="flex flex-col  gap-1">
              <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                #{numberWithCommas(320000)}
              </h6>
              <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                Actual Amount
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="bg-primary-green px-[40px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo whitespace-nowrap flex justify-center items-center max-lg:hidden"
          >
            <Image
              src="/assets/icons/messages.svg"
              alt="menu"
              width={20}
              height={20}
              className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-1"
            />
            Chats
          </Link>
        </div>
      </div>
      <div className="w-full px-10 max-sm:px-5 py-6 flex justify-between">
        <div className="flex ">
          <Image
            src="/assets/images/profile-pic.svg"
            alt="menu"
            width={44}
            height={44}
            className="object-cover w-[44px] h-[44px] max-sm:w-[25px] max-sm:h-[25px] rounded-full mr-2"
          />
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[500] max-sm:text-[14px]">
                Victor Falade
              </h6>
            </div>

            <p className="flex items-center text-[#5E625F] text-[14px] leading-[24px] font-[400] max-sm:text-[12px] gap-1">
              Level 4 |{" "}
              {fourColorStar.map((star) => (
                <Image
                  src={star}
                  alt="menu"
                  width={14}
                  height={14}
                  className="object-contain w-[14px] h-[14px] max-sm:w-[14px] max-sm:h-[14px]"
                />
              ))}
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="bg-primary-green px-[40px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo whitespace-nowrap flex justify-center items-center lg:hidden max-md:px-[20px] max-md:py-[6px]"
        >
          <Image
            src="/assets/icons/messages.svg"
            alt="menu"
            width={20}
            height={20}
            className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-1"
          />
          Chats
        </Link>
      </div>
      <div className="w-full px-10 max-sm:px-5 py-6">
        <div className="w-full flex items-center justify-between">
          <h6 className=" my-5 text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
            Project details
          </h6>
          <div className="flex gap-1 items-center">
            <p className="text-[#5E625F]  text-[14px] font-[500] leading-[16px] max-sm:text-[12px] whitespace-nowrap">
              Due date
            </p>
            <div className=" flex items-center justify-center bg-[#F0FDF5] w-[74px] h-[30px] max-sm:h-[25px] max-sm:w-[55px] rounded-[20px]">
              <p className="text-[#25C269]  text-[14px] font-[500] leading-[16px] max-sm:text-[12px] whitespace-nowrap">
                6 days
              </p>
            </div>
          </div>
        </div>
        <p className=" text-[#030A05] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sun..Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. Velit officia consequat duis{" "}
          <button className="text-[#25C269]  text-[14px] font-[500] leading-[16px] max-sm:text-[12px] whitespace-nowrap">
            see more
          </button>
        </p>
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
  );
};

export default MilestoneTopContent;
