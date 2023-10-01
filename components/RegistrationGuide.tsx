import Link from "next/link";

const RegistrationGuide = () => {
  return (
    <div className="pt-24 h-vh bg-[#054753]  w-[500px] max-md:w-full pb-24 ">
      <div className="padding-y pr-8 max-sm:mt-10">
        <h1 className="text-[#fefcfd] font-[700] text-[30px] leading-[36px] padding-l max-sm:text-[18px]">
          Grow your business with Emilist
        </h1>
        <div className="flex flex-col justify-center mt-10 padding-l xl:pr-[5rem] lg:pr-[4rem] sm:pr-[2rem] pr-3 gap-10">
          <div className="flex gap-2">
            <div className="">
              <h2 className="flex w-[42px] h-[42px] bg-[#fcfefd] rounded-full justify-center items-center font-inter font-[600] text-[18px] max-sm:text-[14px] max-sm:max-w-[35px] max-sm:max-h-[35px]">
                1
              </h2>
            </div>
            <div className="">
              <h5 className="font-inter font-[600] text-[18px] text-[#fefcfd] mb-3 max-sm:text-[14px]">
                Build your profile
              </h5>
              <p className="leading-[18px] font-[400] text-[14px] text-[#f6fdf9] max-sm:leading-[16px] max-sm:text-[12px]">
                Add a winning profile with reviews from your previous customers,
                prices, and featured projects.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="">
              <h2 className="flex w-[42px] h-[42px] bg-[#fcfefd] rounded-full justify-center items-center font-inter font-[600] text-[18px] max-sm:text-[14px] max-sm:max-w-[35px] max-sm:max-h-[35px]">
                2
              </h2>
            </div>
            <div className="flex-1">
              <h5 className="font-inter font-[600] text-[18px] text-[#fefcfd] mb-3 max-sm:text-[14px]">
                Create a custom job pipeline.
              </h5>
              <p className="leading-[18px] font-[400] text-[14px] text-[#f6fdf9] max-sm:leading-[16px] max-sm:text-[12px]">
                Tell us the kinds of jobs you want. Customers will reach out
                with jobs matching your exact specifications.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="">
              <h2 className="flex w-[42px] h-[42px] bg-[#fcfefd] rounded-full justify-center items-center font-inter font-[600] text-[18px] max-sm:text-[14px] max-sm:max-w-[35px] max-sm:max-h-[35px]">
                3
              </h2>
            </div>
            <div className="flex-1">
              <h5 className="font-inter font-[600] text-[18px] text-[#fefcfd] mb-3 max-sm:text-[14px]">
                Get quality jobs from new customers.
              </h5>
              <p className="leading-[18px] font-[400] text-[14px] text-[#f6fdf9] max-sm:leading-[16px] max-sm:text-[12px]">
                All iobs on EmiList come with the customer's phone number, and
                we ensure limited competition from other experts.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center  mt-10 max-sm:pt max-md:mt-28">
          <Link
            href="#registrationform1"
            className="bg-primary-green px-[18px] py-[10px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[6px] md:hidden"
          >
            Proceed
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationGuide;
