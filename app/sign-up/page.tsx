import Image from "next/image";
import Link from "next/link";

const SingUp = () => {
  return (
    <main className="relative w-full h-screen flex justify-center items-center padding-x ">
      <div className="max-w-[504px] w-[504px] h-screen py-4 flex flex-col items-start max-sm:w-full max-sm:pt-2">
        <h1 className="capitalize text-[20px] font-[700] text-[#030A05] leading-[28px] max-sm:text-[16px] w-full py-6">
          Create a free account
        </h1>
        <form className="w-full flex flex-col gap-3">
          <div className="flex items-start ">
            <input type="checkbox" className="mt-1 mr-2" />
            <p className="text-[#303632] text-[16px] font-[400] max-sm:text-[13px]">
              By signing up with email, Facebook, or Google, you agree to our{" "}
              <Link href="/sign-up" className="text-primary-green">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/sign-up" className="text-primary-green">
                Privacy Policy.
              </Link>
            </p>
          </div>
          <div className="w-full">
            <label className="text-[#5e625f] text-[16px] font-[500] max-sm:text-[14px]">
              Enter Email
            </label>
            <div className="w-full  py-2">
              <input
                type="text"
                className=" min-w-full w-full  max-w-full rounded-[10px] h-[50px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                placeholder="paulshotolu@gmail.com "
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-[#5e625f] text-[16px] font-[500] max-sm:text-[14px]">
              Enter Username
            </label>
            <div className="w-full  py-2">
              <input
                type="text"
                className=" min-w-full w-full  max-w-full rounded-[10px] h-[50px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                placeholder="paulshotolu@gmail.com "
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-[#5e625f] text-[16px] font-[500] max-sm:text-[14px]">
              Enter Password
            </label>
            <div className="w-full py-2 ">
              <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[50px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5] flex justify-between items-center">
                <input
                  type="password"
                  placeholder="************"
                  className="bg-[#ececec] outline-none  min-w-[80%] w-[80%] h-full max-w-[80%] max-sm:text-[14px] "
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[20px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Link href="/login" className="w-full">
            <button className="bg-primary-green px-[18px] h-[50px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold   whitespace-nowrap  text-[16px] max-lg:mt-0 max-sm:text-[13px] max-sm:px-[20px] max-sm:h-[46px] w-full">
              Sign Up with Email
            </button>
          </Link>
        </form>
        <div className="w-full flex items-center justify-between py-5 max-sm:py-3">
          <div className="flex-1 h-[1px] bg-[#8A8D8B]"></div>
          <h6 className=" text-[18px] font-[600] text-[#030A05] leading-[28px] max-sm:text-[16px] mx-2">
            OR
          </h6>
          <div className="flex-1  h-[1px] bg-[#8A8D8B]"></div>
        </div>
        <button className="flex justify-center items-center w-full border-[1px] rounded-[10px] h-[50px] max-sm:min-h-[46px] border-[#1A201B] text-[#737774] text-[18px] font-[600] max-sm:text-[14px] mb-6 max-sm:mb-3">
          Continue with Google{" "}
          <Image
            src="/assets/icons/google.jpg"
            alt="arrow-left"
            width={30}
            height={30}
            className="object-contain w-[30px] h-[30px] max-sm:w-[18px] max-sm:h-[18px] ml-3"
          />
        </button>
        <button className="flex justify-center items-center w-full border-[1px] rounded-[10px] h-[50px] max-sm:min-h-[46px] border-[#1A201B] text-[#737774] text-[18px] font-[600] max-sm:text-[14px]">
          Continue with facebook
          <Image
            src="/assets/icons/facebook.jpg"
            alt="arrow-left"
            width={30}
            height={30}
            className="object-contain w-[30px] h-[30px] max-sm:w-[18px] max-sm:h-[18px] ml-3"
          />
        </button>
        <div className="w-full flex justify-center pt-10 max-sm:pt-5 max-sm:pb-5">
          <p className="text-[#303632] text-[16px] font-[400] max-sm:text-[13px]">
            Don't have an EmiList account??{" "}
            <Link href="/login" className="text-primary-green">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SingUp;
