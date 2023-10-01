import Link from "next/link";
import RegistrationGuide from "./RegistrationGuide";

const RegisterFormFive = () => {
  return (
    <section className="max-md:padding-x">
      <div className="flex max-md:flex-col">
        <div className="max-md:hidden">
          <RegistrationGuide />
        </div>

        <div className="pt-28 max-md:pt-24 max-md:pb-15 px-10 w-full max-md:px-5 max-sm:px-3">
          <div className="w-full mt-10 max-md:mt-5">
            <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
              Tell us more about your business
            </h1>
            <p className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:[16px] py-5 max-w-[550px] min-w-[320px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enimt.
            </p>
            <div className="grid grid-cols-5 gap-6 w-full ">
              <div className="flex flex-col gap-6 col-span-3 max-lg:col-span-5 max-md:col-span-3 max-sm:col-span-5">
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Business Name
                  </p>
                  <div className="w-full">
                    <input
                      type="text"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="Phil "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Business Name
                  </p>
                  <div className="w-full">
                    <input
                      type="text"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="Ada foundation "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Year Founded
                  </p>
                  <div className="w-full">
                    <input
                      type="text"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="2003 "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Number of employees
                  </p>
                  <div className="w-full">
                    <input
                      type="number"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="15 "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Business Address (Optional)
                  </p>
                  <div className="w-full">
                    <input
                      type="text"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="Phil "
                    />
                  </div>
                </div>

                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    State
                  </p>
                  <div className="w-full">
                    <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                      <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                        <option>Lagos</option>
                        <option>Imo</option>
                        <option>Ogun</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Country
                  </p>
                  <div className="w-full">
                    <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                      <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        <option>Togo</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Your Start Price
                  </p>
                  <div className="w-full">
                    <input
                      type="text"
                      className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                      placeholder="5000 "
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                    Notice Period
                  </p>
                  <div className="w-full">
                    <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                      <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                        <option>3 days</option>
                        <option>5 days</option>
                        <option>7 days</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 max-lg:hidden  max-md:flex   max-sm:hidden col-span-2  max-md:col-span-2 max-sm:col-span-5">
                <div className="w-full shadow-lg flex flex-col  justify-center  py-5 rounded-[10px] border-l-8 border-primary-green px-4">
                  <h3 className="text-[18px] font-[500] leading-[24px] max-sm:text-[14px] max-sm:[16px] text-[#030a05]">
                    Dont have a business name?
                  </h3>

                  <p className="py-3 text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:[16px] text-[#303632]">
                    No worries - just use your own name
                  </p>
                </div>
              </div>

              <div className="flex justify-end mb-28 max-sm:justify-center col-span-3 max-lg:col-span-5 max-md:col-span-3 max-sm:col-span-5">
                <Link
                  href="/register/expert/about-business-description"
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

export default RegisterFormFive;
