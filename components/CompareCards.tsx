import { reviewWorkers } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";
import Link from "next/link";

const CompareCards = () => {
  return (
    <section className="padding-x pt-28">
      <h2 className="text-[30px] text-[#030a05] font-exo font-bold max-md:text-[18px]">
        Compare
      </h2>
      <div className="flex border-b-[1px] border-[#B8B9B8] pb-5">
        <div className="min-w-[222px] flex-1 max-md:hidden"></div>

        <div className="flex overflow-x-scroll  gap-5">
          {reviewWorkers.map((experts, index) => (
            <div className="flex flex-col w-[240px]" key={index}>
              <h6 className="whitespace-nowrap py-3 font-[700]  text-[18px] text-black max-md:py-1 max-sm:text-[14px]">
                {experts.name}
              </h6>
              <Image
                src={experts.imgURL}
                alt="logo"
                width={380}
                height={276}
                className="object-cover min-w-[240px]  h-[177px] "
              />
              <div className="flex justify-between">
                <div>
                  <p className="whitespace-nowrap py-2  text-[14px]  max-sm:text-[12px]">
                    Starting price
                  </p>
                  <h3 className="text-[16px] font-[700] text-primary-green max-sm:text-[13px]">
                    {" "}
                    ₦ {numberWithCommas(experts.price)}
                  </h3>
                </div>

                <Link href="/" className=" py-2 ">
                  <button className="px-3 border-[1px] border-[#303632] text-[14px] max-sm:text-[12px] py-1 rounded-[10px]">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareCards;
