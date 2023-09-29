import Link from "next/link";
import Image from "next/image";

const ExpertOptions = () => {
  return (
    <section className="padding-x padding-y">
      <div className="flex gap-6 pb-20 max-md:flex-col max-md:items-center">
        <h4 className="text-[30px] font-[700] text-[#000] max-sm:text-[18px] md:hidden">
          Investigator
        </h4>
        <div className="flex-1">
          <Image
            src="/assets/images/Frame2.svg"
            alt="logo"
            width={20}
            height={20}
            className="object-cover w-[610px] h-[340px] rounded-[20px] max-sm:w-full max-sm:h-[220px] max-sm:rounded-[10px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h4 className="text-[30px] font-[700] text-[#000] max-sm:text-[18px] max-md:hidden">
            Investigator
          </h4>
          <p className=" text-[#030a05] text-base font-[500]  max-sm:text-[14px]  max-md:text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
          <div className="w-full flex max-md:justify-center">
            <Link href="/register">
              <button className="bg-primary-green px-[24px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold max-sm:text-[14px]">
                {" "}
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-6 pb-20 max-md:flex-col max-md:items-center">
        <h4 className="text-[30px] font-[700] text-[#000] max-sm:text-[18px] md:hidden">
          Supervisor
        </h4>
        <div className="flex-1">
          <Image
            src="/assets/images/Frame6.svg"
            alt="logo"
            width={20}
            height={20}
            className="object-cover w-[610px] h-[340px] rounded-[20px] max-sm:w-full max-sm:h-[220px] max-sm:rounded-[10px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h4 className="text-[30px] font-[700] text-[#000] max-sm:text-[18px] max-md:hidden">
            Supervisor
          </h4>
          <p className=" text-[#030a05] text-base font-[500]  max-sm:text-[14px]  max-md:text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
          <div className="w-full flex max-md:justify-center">
            <Link href="/register">
              <button className="bg-primary-green px-[24px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold max-sm:text-[14px]">
                {" "}
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  gap-6 pb-20 max-md:flex-col max-md:items-center">
        <h4 className="text-[30px] font-[700] text-[#000] max-sm:text-[18px] md:hidden">
          Project Manager
        </h4>
        <div className="flex-1">
          <Image
            src="/assets/images/Frame3.svg"
            alt="logo"
            width={20}
            height={20}
            className="object-cover w-[610px] h-[340px] rounded-[20px] max-sm:w-full max-sm:h-[220px] max-sm:rounded-[10px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h4 className="text-[30px] font-[700] text-[#000] max-sm:text-[18px] max-md:hidden">
            Project Manager
          </h4>
          <p className=" text-[#030a05] text-base font-[500]  max-sm:text-[14px]  max-md:text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
          <div className="w-full flex max-md:justify-center">
            <Link href="/register">
              <button className="bg-primary-green px-[24px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold max-sm:text-[14px]">
                {" "}
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertOptions;
