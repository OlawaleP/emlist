import Image from "next/image";
import Link from "next/link";

const ServiceSetUpTarget = () => {
  return (
    <section className="py-28 padding-x">
      {" "}
      <div className="  w-full ">
        <div className="w-full mt-10 max-md:mt-5">
          <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
            Set up your monthly/ yearly targets
          </h1>

          <div className="grid grid-cols-4 gap-10 w-full py-6 mt-6">
            <div className="col-span-2  max-sm:col-span-4 flex flex-col gap-2">
              <p className="text-[#030A05] text-[20px] font-[600] max-sm:text-[16px]">
                Set up target for monthly or yearly
              </p>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                {/* <input
                  type="radio"
                  id="Emi Preferred"
                  name="contact"
                  value="telephone"
                /> */}
                <label
                  htmlFor="Emi Preferred"
                  className="ml-3 text-base text-[#303632]"
                >
                  Monthly
                </label>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/circle.svg"
                  alt="menu"
                  width={25}
                  height={25}
                  className="object-contain w-[25px] h-[25px]"
                />{" "}
                {/* <input
                  type="radio"
                  id="Emi Preferred"
                  name="contact"
                  value="telephone"
                /> */}
                <label
                  htmlFor="Emi Preferred"
                  className="ml-3 text-base text-[#303632]"
                >
                  Yearly
                </label>
              </div>
            </div>
            <div className="col-span-2  max-sm:col-span-4">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Number of times you want to be referred
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="50 "
                />
              </div>
            </div>
            <div className="col-span-2 max-sm:col-span-4">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Job
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="10"
                />
              </div>
            </div>
            <div className="col-span-2  max-sm:col-span-4">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Number of friends you want to invite
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="50 "
                />
              </div>
            </div>

            <div className="col-span-2  max-sm:col-span-4">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Amount
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="#500,000"
                />
              </div>
            </div>

            <div className="flex  my-20 justify-center col-span-4">
              <Link
                href="/service/target"
                className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px] max-sm:mt-20"
              >
                Set Target
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSetUpTarget;
