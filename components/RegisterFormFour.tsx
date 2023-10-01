import Link from "next/link";
import RegistrationGuide from "./RegistrationGuide";
import Image from "next/image";

const RegistrationFormFour = () => {
  return (
    <section className="max-md:padding-x">
      <div className="flex max-md:flex-col">
        <div className="max-md:hidden">
          <RegistrationGuide />
        </div>

        <div className="pt-28 max-md:pt-24 max-md:pb-15 px-10 w-full max-md:px-5 max-sm:px-3">
          <div className="w-full mt-10 max-md:mt-5">
            <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px]">
              Add your profile photo
            </h1>
            <p className="text-[16px] font-[400] leading-[24px] max-sm:text-[12px] max-sm:leading-[16px] py-5 max-w-[550px] min-w-[320px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequ
            </p>
            <div className="grid grid-cols-5 gap-6 w-full mt-6 ">
              <div className="col-span-3 max-lg:col-span-5 max-md:col-span-3 max-sm:col-span-5 w-full flex flex-col gap-3">
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
                    Bricklayer
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
                    Tyler
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
                    Painter
                  </label>
                </div>
              </div>

              <div className="flex mb-28 mt-6 justify-center col-span-3 max-lg:col-span-5 max-md:col-span-3 max-sm:col-span-5">
                <Link
                  href="/register/expert/about-business"
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

export default RegistrationFormFour;
