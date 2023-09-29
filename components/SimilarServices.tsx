import { fourColorStar, reviewWorkers } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";
import Link from "next/link";

const SimilarServices = () => {
  return (
    <section className=" padding-l  pb-20 max-sm:pb-10">
      <div className=" w-full ">
        <h2 className="text-[28px] font-[600] text-[#030a05] max-sm:text-[18px] max-sm:font-[700]">
          Similar services
        </h2>
      </div>
      <div className="flex gap-6 overflow-x-scroll ">
        {reviewWorkers.reverse().map((reviews, index) => (
          <div className="min-w-[880px] max-lg:min-w-[600px]  max-sm:min-w-full my-4">
            <div
              key={index}
              className="shadow-md w-full p-4 rounded-[20px] flex max-md:flex-col max-sm:px-2"
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
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia cons.
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
                        <div className="flex items-center gap-1">
                          <Image
                            src={reviews.jobIcon}
                            alt="rate"
                            width={20}
                            height={20}
                            className="object-contain w-[20px] h-[20px] max-sm:w-[12px] max-sm:h-[12px]"
                          />
                          <p className=" text-[14px] max-sm:text-[10px]">
                            {reviews.jobCompleted} Jobs Completed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4 max-sm:mb-2">
                        <div className="flex items-center ">
                          <Image
                            src={reviews.profile}
                            alt="menu"
                            width={28}
                            height={28}
                            className="object-cover w-[28px] h-[28px] max-sm:w-[25px] max-sm:h-[25px] rounded-full mr-4 max-sm:mr-1"
                          />
                          <p className="text-[#303632]  text-[14px] max-sm:text-[12mpx]">
                            {reviews.name}
                          </p>
                        </div>
                        <p className="text-[#303632] font-[500] text-[14px] max-sm:text-[10px]">
                          LEVEL 4
                        </p>
                      </div>
                    </div>
                    <div className="flex lg:flex-col items-end max-lg:justify-between max-lg:items-center">
                      <div className="">
                        <h3 className="text-[20px] font-[700] text-primary-green max-sm:text-[14px]">
                          {" "}
                          ₦ {numberWithCommas(reviews.price)}
                        </h3>
                        <p className="whitespace-nowrap py-3  text-[14px] max-md:py-1 max-sm:text-[12px]">
                          Starting price
                        </p>
                      </div>

                      <Link href="/experts/details">
                        <button className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-10 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[10px] max-sm:py-[6px]">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-8  border-t-[1px] border-[#d9d9d9] w-full pt-4 max-md:hidden">
                    <button className="flex items-center">
                      <Image
                        src={reviews.loveIcon}
                        alt="menu"
                        width={24}
                        height={24}
                        className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] mr-2"
                      />
                      <p className="text-[14px] text-[#303632]">Favourite</p>
                    </button>
                    <button className="flex items-center">
                      <Image
                        src={reviews.paperIcon}
                        alt="menu"
                        width={24}
                        height={24}
                        className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] mr-2"
                      />
                      <p className="text-[14px] text-[#303632] ">Compare</p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-8  border-t-[1px] border-[#d9d9d9] w-full pt-2 md:hidden">
                <button className="flex items-center">
                  <Image
                    src={reviews.loveIcon}
                    alt="menu"
                    width={24}
                    height={24}
                    className="object-contain w-[16px] h-[16px] mr-2"
                  />
                  <p className="text-[14px] text-[#303632] max-sm:text-[12px]">
                    Favourite
                  </p>
                </button>
                <button className="flex items-center">
                  <Image
                    src={reviews.paperIcon}
                    alt="menu"
                    width={24}
                    height={24}
                    className="object-contain w-[16px] h-[16px] mr-2"
                  />
                  <p className="text-[14px] text-[#303632] max-sm:text-[12px]">
                    Compare
                  </p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarServices;
