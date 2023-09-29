import Image from "next/image";
import { moreServices } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import SeeButton from "./SeeButton";

const ExploreServices = () => {
  return (
    <section className=" padding-l padding-y">
      <h2 className="text-[30px] text-[#030a05] font-exo font-bold max-md:text-[18px] ">
        Explore more services
      </h2>
      <div className="flex items-center gap-4 my-4 ">
        <label
          htmlFor="filter"
          className="flex items-center text-base font-[400] text-[#474c48] max-md:text-[12px]"
        >
          <Image
            src="/assets/icons/filter.svg"
            alt="menu"
            width={20}
            height={20}
            className="object-contain mr-1"
          />{" "}
          Filter
        </label>

        <div className="border-[#b8b9b8] border-[1px] rounded-lg px-[20px] py-2  max-md:px-[10px] max-md:py-1 shadow-md">
          <select
            name=""
            id="filter"
            className="w-full outline-none box-border text-base text-[#303632] font-[400] max-md:text-[12px]"
          >
            <option value="contruction"> Construction</option>
            <option value="Software"> Software</option>
          </select>
        </div>
      </div>
      <div className="flex items-center w-full overflow-x-scroll gap-4">
        {moreServices.map((service, index) => (
          <div className="min-w-[380px] mt-8 max-md:min-w-[280px]" key={index}>
            <Image
              src={service.imgURL}
              alt="logo"
              width={380}
              height={276}
              className="object-cover w-full rounded-lg h-[276px] max-md:h-[200px]"
            />
            <h4 className="w-full font-exo font-[500] text-[24px] text-[#030a05] my-2 max-md:text-[16px]">
              {service.service}
            </h4>
            <p className="w-full flex items-center text-center font-exo font-[400] text-[#5e625f] text-[14px] max-md:text-[12px]">
              <Image
                src="/assets/icons/dollar-circle.svg"
                alt="menu"
                width={24}
                height={25}
                className="object-contain mr-1 rounded-lg"
              />{" "}
              Price range:{" "}
              <span className="ml-2 font-[600] text-[#1a201b] ">
                ₦ {numberWithCommas(service.minPrice)} - ₦
                {numberWithCommas(service.maxPrice)}{" "}
              </span>
            </p>
            <SeeButton seeLink="/" buttonTitle="See experts near you" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreServices;
