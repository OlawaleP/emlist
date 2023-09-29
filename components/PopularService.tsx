import Image from "next/image";
import { popularServices } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import SeeButton from "./SeeButton";

const PopularService = () => {
  return (
    <section className="padding-l  padding-y">
      <h2 className="text-[30px] text-[#030a05] font-exo font-bold max-md:text-[18px] ">
        Popular services around you
      </h2>
      <div className="flex items-center w-full overflow-x-scroll gap-4">
        {popularServices.map((service, index) => (
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
                ₦{numberWithCommas(service.minPrice)} - ₦
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

export default PopularService;
