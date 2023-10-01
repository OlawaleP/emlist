import Link from "next/link";
import RegistrationGuide from "./RegistrationGuide";
import Image from "next/image";

const RegisterFormEight = () => {
  return (
    <section className="max-md:padding-x">
      <div className="flex max-md:flex-col">
        <div className="max-md:hidden">
          <RegistrationGuide />
        </div>

        <div className="pt-28 max-md:pt-24 max-md:pb-15 px-10 w-full max-md:px-5 max-sm:px-3">
          <div className="w-full mt-10 max-md:mt-5">
            <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
              Add Insurance
            </h1>
            <p className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:[16px] py-5 max-w-[550px] min-w-[320px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enimt.
            </p>
            <div className="grid grid-cols-4 gap-6 w-full ">
              <div className=" col-span-2 max-lg:col-span-4 max-md:col-span-2 max-sm:col-span-4">
                <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  Insuring organisation
                </p>
                <div className="w-full">
                  <input
                    type="text"
                    className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                    placeholder="Builders association"
                  />
                </div>
              </div>
              <div className=" col-span-2 max-lg:col-span-4 max-md:col-span-2 max-sm:col-span-4">
                <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                  Type of cover
                </p>
                <div className="w-full">
                  <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                    <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                      <option>Property Insurance</option>
                      <option>Property Insurance</option>
                      <option>Property Insurance</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" col-span-4 ">
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Short description of what is covered
                  </p>
                  <div className="w-full">
                    <textarea
                      className=" min-w-full w-full  max-w-full rounded-[10px]  px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:text-[14px] text-[#c8c5c5] "
                      rows={10}
                    ></textarea>
                  </div>
                  <button className="w-full flex items-center justify-end">
                    <Image
                      src="/assets/icons/add.svg"
                      alt="logo"
                      width={130}
                      height={30}
                      className="object-contain w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px] mr-1"
                    />{" "}
                    <p className="text-primary-green py-2 text-[16px] font-[500] max-sm:text-[14px]">
                      ADD MORE
                    </p>
                  </button>
                </div>
              </div>

              <div className="flex justify-end mb-28 max-sm:justify-center col-span-4  ">
                <Link
                  href="/register/expert/coverage"
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

export default RegisterFormEight;
