import Link from "next/link";
import Image from "next/image";

const EmilistExperts = () => {
  return (
    <section className="">
      <div className=" padding-x relative w-full  flex justify-center items-center max-xl:flex-col  gap-10">
        <h2 className="text-[30px] text-[#030a05] font-exo font-bold max-md:text-[18px] xl:hidden max-xl:max-w-[770px]">
          EmiList Private expert
        </h2>
        <div className="flex-1 relative  mx-4 w-full max-xl:max-w-[770px]">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/images/GroupImg3.svg"
              alt="menu"
              width={408}
              height={460}
              className="object-contain max-lg:w-[80%]"
            />{" "}
          </div>
          <div className="absolute -bottom-[80px] flex items-center  bg-[#fcfefd] w-full px-10 py-5 z-[1] shadow-md rounded-xl max-xl:mb-20px max-sm:px-3 max-sm:py-3">
            <div className="mr-4">
              <Image
                src="/assets/images/profile-pic.svg"
                alt="menu"
                width={60}
                height={60}
                className="object-cover h-[60px] w-[60px] rounded-full"
              />
            </div>
            <div className="flex-1 ">
              <h6 className="text-[17px] font-[700] text-[#030a05] max-sm:text-[9.84px] max-sm:leading-[14.3px]">
                Mike Kane
              </h6>
              <div className="flex items-center my-1">
                <Image
                  src="/assets/icons/StarColor.svg"
                  alt="rate"
                  width={16}
                  height={16}
                  className="object-contain w-[16px] h-[16px]"
                />
                <Image
                  src="/assets/icons/StarColor.svg"
                  alt="rate"
                  width={16}
                  height={16}
                  className="object-contain w-[16px] h-[16px]"
                />
                <Image
                  src="/assets/icons/StarColor.svg"
                  alt="rate"
                  width={16}
                  height={16}
                  className="object-contain w-[16px] h-[16px]"
                />
                <Image
                  src="/assets/icons/StarColor.svg"
                  alt="rate"
                  width={16}
                  height={16}
                  className="object-contain w-[16px] h-[16px]"
                />
                <Image
                  src="/assets/icons/Star.svg"
                  alt="rate"
                  width={16}
                  height={16}
                  className="object-contain w-[16px] h-[16px]"
                />
              </div>
              <p className="text-[15px] font-[400] text-[#303632] leading-[22px] max-sm:text-[8.67px] max-sm:leading-[12.3px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.do
                amet sint. Velit officia consequat duis enim velit mollit
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:my-20 my-10 max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:max-w-[770px]">
          <h2 className="text-[30px] text-[#030a05] font-exo font-bold max-md:text-[18px] max-xl:hidden">
            EmiList Private expert
          </h2>
          <p className="mt-4 text-base font-[400] text-[#303632] leading-[28px] max-xl:text-center max-sm:text-[14px] max-sm:leading-[20px]">
            Hire private investigators, supervisor, project managers and many
            more veniam consequat sunt nostrud amet. sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="w-full flex max-xl:justify-center">
            <Link href="/">
              <button className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo mt-5 w-[138px] ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmilistExperts;
