import RegistrationNav from "@components/RegistrationNav";
import Link from "next/link";

const page = () => {
  return (
    <main className="relative">
      <RegistrationNav />
      <div className="w-full h-screen relative pt-28">
        <div className="w-full h-[40vh] bg-congrats-banner bg-cover bg-center bg-no-repeat"></div>

        <div className="w-full flex flex-col gap-4 items-center">
          <h1 className="text-[#030a05] text-[36px] leading-[36px] font-[700] mb-3  max-sm:text-[24px] max-sm:leading-[28px] max-sm:font-[700] ">
            Congratulations!!!
          </h1>
          <p>You have successfully set up a service</p>
          <div className="flex gap-4 pt-10 max-md:flex-col max-md:w-full px-8">
            <button className=" px-[18px] py-[10px] text-[#303632] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px]  border-[1.5px] border-[#303632]">
              Set up another service
            </button>
            <Link
              href="/dashboard"
              className="bg-primary-green text-center px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px]"
            >
              Proceed to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
