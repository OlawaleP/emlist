import Link from "next/link";
import RegistrationGuide from "./RegistrationGuide";
import Image from "next/image";
import { coverageStates } from "@constants";

const RegisterFormNine = () => {
  return (
    <section className="max-md:padding-x">
      <div className="flex max-md:flex-col">
        <div className="max-md:hidden">
          <RegistrationGuide />
        </div>

        <div className="pt-28 max-md:pt-24 max-md:pb-15 px-10 w-full max-md:px-5 max-sm:px-3">
          <div className="w-full  max-md:mt-5">
            <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
              Service coverage area
            </h1>
            <p className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:leading-[16px] py-5 max-w-[550px] min-w-[320px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enimt.
            </p>
            <div className="grid grid-cols-4  w-full min-w-[300px] gap-6 ">
              <div className="col-span-4">
                {" "}
                <div className="w-full">
                  <Image
                    src="/assets/images/map.svg"
                    alt="upload"
                    width={30}
                    height={30}
                    className="object-cover w-full h-full min-h-[180px]"
                  />
                </div>
                <div className="flex mt-6 max-md:justify-center">
                  <p className="bg-[#DDFBE9] px-10 py-3 rounded-[20px] cursor-pointer text-[#303632] font-[500] max-sm:text-[12px] max-sm:leading-[16px">
                    Select distance | 50 miles
                  </p>
                </div>
              </div>
              <div className="col-span-4 border-t-[1px] border-[#B8B9B8] w-full pt-4">
                <p className="text-[#030A05] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  Select manually
                </p>
                <div className="grid grid-cols-2 w-full pt-4 gap-4">
                  {coverageStates.map((state) => (
                    <div className="col-span-1 max-lg:col-span-2 max-md:col-span-1 max-sm:col-span-2 flex justify-between items-center shadow-md  px-4 py-4 rounded-[10px]">
                      <p>{state.state}s</p>
                      <div className="flex items-center">
                        <Image
                          src="/assets/icons/checkbox.svg"
                          alt="arrow-left"
                          width={30}
                          height={30}
                          className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-4"
                        />
                        <Image
                          src="/assets/icons/arrow-down.svg"
                          alt="arrow-left"
                          width={30}
                          height={30}
                          className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mb-28 mt-6 max-sm:justify-center col-span-4">
                <Link
                  href="/register/expert/congrats"
                  className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px] max-sm:mt-20"
                >
                  Proceed
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterFormNine;
