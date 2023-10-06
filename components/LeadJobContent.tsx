import { dashboardServices } from "@constants";
import Image from "next/image";

const LeadJobContent = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {dashboardServices.map((service, index) => (
        <div
          key={index}
          className="w-full col-span-2 max-md:col-span-3  py-4  border-b-[1px] border-[#B8B9B8]"
        >
          <div className="flex justify-between items-center w-full pb-5">
            <h5 className="text-[#000000] text-[20px] leading-[24px] font-[600] max-sm:text-[16px]">
              {service.title}
            </h5>
            <div className="flex justify-end items-center gap-10 max-sm:gap-5 max-sm:hidden">
              {" "}
              <Image
                src="/assets/icons/heart.svg"
                alt="menu"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
              />
              <Image
                src="/assets/icons/flag.png"
                alt="menu"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
              />
            </div>
          </div>
          <h6 className="text-[#737774] text-[14px] leading-[20px] font-[500] max-sm:text-[12px]">
            Budget: $100 Est Time: 2weeks Level 2 & above Date posted: 9hours
            ago
          </h6>

          <p className="text-[#303632] text-[14px] leading-[20px] font-[500] max-sm:text-[12px] py-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sun..
          </p>
          <div className="flex items-center justify-between">
            <p className="flex items-center text-[#737774] text-[16px] leading-[20px] font-[500] max-sm:text-[13px] py-2">
              {" "}
              <Image
                src="/assets/icons/location.png"
                alt="location"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-2"
              />
              {service.location}
            </p>
            <div className="flex justify-end items-center gap-10 max-sm:gap-4 sm:hidden">
              {" "}
              <Image
                src="/assets/icons/heart.svg"
                alt="menu"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
              />
              <Image
                src="/assets/icons/flag.png"
                alt="menu"
                width={20}
                height={20}
                className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadJobContent;
