import Image from "next/image";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import { fourColorStar } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";

const MaterialImageCtn = () => {
  return (
    <section className="padding-x padding-y">
      <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-4">
        <ImageSlider material={true} />
        <div className="col-span-2 max-lg:col-span-2 max-md:col-span-4">
          <h4 className="text-[25px] leading-[30px] font-[700] text-[#030a05] mb-6  max-sm:text-[18px] max-sm:leading-[24px]">
            Dangote Cement
          </h4>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between max-sm:flex-col max-sm:gap-2">
              <div className="flex items-center gap-2">
                <h6 className="text-[14px] leading-[32px] font-[500] text-[#030a05]  max-sm:text-[14px] max-sm:leading-[18px] font-inter">
                  Brand:
                </h6>
                <p className="text-[14px] leading-[32px] font-[400] text-[#303632]  max-sm:text-[14px] max-sm:leading-[18px] font-inter">
                  Dangote
                </p>
              </div>
              <div className="flex items-center gap-2">
                <h6 className="text-[14px] leading-[32px] font-[500] text-[#030a05]  max-sm:text-[14px] max-sm:leading-[18px] font-inter">
                  Supplier:
                </h6>
                <Link
                  href="/experts/details"
                  className="text-[14px] leading-[32px] font-[400] text-primary-green underline  max-sm:text-[14px] max-sm:leading-[18px] font-inter"
                >
                  James Habib
                </Link>
              </div>
            </div>
            <div className="flex justify-between gap-2 max-sm:flex-col ">
              <div className="flex items-center gap-2">
                <h6 className="text-[14px] leading-[32px] font-[500] text-[#030a05]  max-sm:text-[14px] max-sm:leading-[18px] font-inter">
                  Category:
                </h6>
                <p className="text-[16px] leading-[32px] font-[400] text-[#303632]  max-sm:text-[14px] max-sm:leading-[18px] font-inter">
                  Building Materials
                </p>
              </div>
              <div className="flex items-center gap-2">
                <h6 className="text-[14px] leading-[32px] font-[500] text-[#030a05]  max-sm:text-[14px] max-sm:leading-[18px]font-inter">
                  Location:
                </h6>
                <p className="text-[14px] leading-[32px] font-[400] text-[#303632]  max-sm:text-[14px] max-sm:leading-[18px] font-inter">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h6 className="text-[14px] leading-[32px] font-[500] text-[#030a05]  max-sm:text-[14px] max-sm:leading-[18px] font-inter">
                Rating
              </h6>
              <p className="flex items-center text-[#8A8D8B] text-[14px] max:sm-[12px]">
                {fourColorStar.map((star, index) => (
                  <Image
                    key={index}
                    src={star}
                    alt="rate"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px] mr-1"
                  />
                ))}
                4.0
              </p>
            </div>
          </div>
          <h3 className="text-[20px] font-[700] text-primary-green max-sm:text-[14px] mt-5">
            {" "}
            ₦ {numberWithCommas(100000)}
          </h3>
          <p className="text-[16px] font-[500] text-[#303632] max-sm:text-[12px] mt-2 ">
            Price
          </p>
          <button className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-10 whitespace-nowrap  text-[14px] max-lg:mt-5 max-sm:text-[11px] max-sm:px-[10px] max-sm:py-[8px] w-full">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default MaterialImageCtn;
