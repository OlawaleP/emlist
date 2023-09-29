import { expertise } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";

import Link from "next/link";
import ImageSlider from "./ImageSlider";

const ReviewImageCtn = () => {
  return (
    <section className="padding-x padding-y">
      <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-4">
        <ImageSlider material={false} />
        <div className="col-span-2 max-lg:col-span-2 max-md:col-span-4">
          <div className="rounded-[15px] border-[1px] border-[#b8b9b8] py-6 px-8 max-sm:px-3">
            <h4 className="text-[24px] leading-[32px] font-[700] text-[#030a05] mb-6 w-[85%] max-sm:text-[16px] max-sm:leading-[24px]">
              ABOUT MY SERVICE
            </h4>
            <p className="text-[16px] leading-[24px] font-[400] text-[#303632] mb-6  max-sm:text-[14px] max-sm:leading-[20px]">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
              exercitation incididunt aliquip deserunt reprehenderit elit
              laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla
              duis ullamco cillum dolor. Voluptate exercitation incididunt
              aliquip deserunt reprehenderit elit laborum.
            </p>
            <h6 className="text-[20px] leading-[28px] font-[600] text-[#000] mb-6 w-[85%] max-sm:text-[16px] max-sm:leading-[24px]">
              MY AREA OF EXPERTIES
            </h6>

            <ul className="max-w-[360px] max-sm:max-w-[240px] px-3 mb-6">
              {expertise.map((expertise, index) => (
                <li
                  key={index}
                  className="text-[16px] leading-[24px] font-[400] text-[#000] w-[85%] max-sm:text-[14px] max-sm:leading-[20px] list-disc"
                >
                  {expertise}
                </li>
              ))}
            </ul>
            <div className="">
              <h3 className="text-[20px] font-[700] text-primary-green max-sm:text-[14px] mb-6">
                {" "}
                ₦ {numberWithCommas(75000)}
              </h3>
              <p className="whitespace-nowrap mb-6  text-[14px] max-md:py-1 max-sm:text-[12px]">
                Starting price
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <Link href="/review/details" className="">
                <button className="bg-primary-green py-[10px] text-[#fcfefd] rounded-[10px]  font-[700]  whitespace-nowrap  text-[14px]  max-sm:text-[12px]  max-sm:py-[8px] w-[295px]">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewImageCtn;
