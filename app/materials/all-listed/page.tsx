import DashboardNavBar from "@components/DashboardNavBar";
import { fourColorStar, reviewMaterials } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const shadow = true;
  return (
    <main className="relative">
      <DashboardNavBar />
      <section className="padding-x py-28">
        <div className="w-full flex justify-end">
          <button className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-10 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[10px] max-sm:py-[6px] mb-2 max-md:hidden">
            List a New Material
          </button>
        </div>
        <h1 className="font-inter text-[24px] font-[700] leading-[32px] max-sm:text-[18px] max-sm:leading-[26px] my-4">
          Listed Materials
        </h1>
        <div className="grid grid-cols-3">
          <div className="col-span-2 max-md:col-span-3 flex flex-col w-full gap-6">
            {reviewMaterials.map((reviews, index) => (
              <Link href="/materials/details">
                <div
                  key={index}
                  className={`${
                    shadow && "shadow-md"
                  } w-full p-4 rounded-[20px] flex max-md:flex-col max-sm:px-2"`}
                >
                  <div className="flex w-full">
                    <div className="">
                      <Image
                        src={reviews.imgURL}
                        alt="menu"
                        width={204}
                        height={183}
                        className="object-cover w-[204px] h-[183px] rounded-lg max-sm:w-[90px] max-sm:h-[85px]"
                      />{" "}
                    </div>
                    <div className="flex-1 flex flex-col pl-4 max-sm:pl-2">
                      <div className="flex  w-ful lg:justify-between max-lg:flex-col ">
                        <div className="flex flex-col gap-3 mr-6 max-lg:mr-0 max-md:gap-[4px]">
                          <h3 className="text-[20px] font-[700] text-[#030a05] max-sm:text-[14px]">
                            {reviews.service}
                          </h3>
                          <p className=" text-[14px] max-sm:text-[12px]">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia cons.
                          </p>
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center my-1 gap-2 max-sm:gap-0">
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
                              <p className="text-[13px] max-sm:text-[10px]">
                                ({reviews.noReviews})
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex lg:flex-col items-end max-lg:justify-between max-lg:items-center">
                          <div className="">
                            <h3 className="text-[20px] font-[700] text-primary-green max-sm:text-[14px]">
                              {" "}
                              ₦ {numberWithCommas(reviews.price)}
                            </h3>
                          </div>

                          <button className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-10 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[10px] max-sm:py-[6px] mb-2">
                            view Insight
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
