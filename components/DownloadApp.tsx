import Image from "next/image";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <section className=" padding-x padding-y xl:mt-[8rem] mt-0 max-sm:px-2 ">
      <div className="  bg-[#054753] py-8 rounded-xl flex items-center max-xl:flex-col sm:pb-20 pb-10">
        <div className="flex-1 flex flex-col max-xl:items-center  pl-10 max-xl:w-full max-xl:px-2 max-xl:max-w-[770px]">
          <h5 className="text-[#fcfefd] text-[30px] leading-[36px] font-[700] mr-10 max-xl:text-center max-sm:text-[18px] max-sm:leading-[28px]">
            Manage your projects from your mobile
          </h5>
          <p className="text-[#fcfefd] text-[18px] leading-[30px] font-[400] my-6 max-xl:text-center  max-sm:text-[14px] max-sm:leading-[20px]">
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procastinating. Stay on track and
            complete on time!
          </p>

          <div className="xl:hidden flex justify-center">
            <Image
              src="/assets/images/phone.svg"
              alt="logo"
              width={354}
              height={372}
              className="object-cover   w-[350px] rounded-lg h-[372px]"
            />
          </div>
          <h6 className="text-[#fff] text-[18px] leading-[24px] font-[600] mb-3  max-sm:text-[14px] max-sm:leading-[20px] max-sm:font-[500]">
            GET THE APP
          </h6>
          <div className="flex">
            <Link href="/">
              {" "}
              <Image
                src="/assets/icons/Group3.svg"
                alt="logo"
                width={169}
                height={49}
                className="object-cover w-[169px] max-md:w-[130px] rounded-lg h-[49px] max-md:h-[40px] mr-4 max-sm:mr-2"
              />
            </Link>

            <Link href="/">
              <Image
                src="/assets/icons/Group4.svg"
                alt="logo"
                width={169}
                height={49}
                className="object-cover  w-[169px] max-md:w-[130px] rounded-lg h-[49px] max-md:h-[40px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex-1 relative max-xl:hidden">
          <Image
            src="/assets/images/phone.svg"
            alt="logo"
            width={700}
            height={500}
            className="absolute object-cover -bottom-[320px]  w-full rounded-lg h-[600px] max-md:h-[400px]   "
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
