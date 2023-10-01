import Link from "next/link";
import Image from "next/image";

const RegistrationNav = () => {
  return (
    <header className=" py-8 z-10 w-full fixed bg-white max-lg:shadow-lg">
      <nav className="flex justify-between items-center  padding-x">
        <Link href="/" className=" flex gap-2 flex-center cursor-pointer">
          <Image
            src="/assets/images/Logo.svg"
            alt="logo"
            width={130}
            height={30}
            className="object-contain"
          />
        </Link>

        <div className="block">
          <h1 className="w-[32px] h-[32px] bg-[#6B7280] text-center text-[14px] leading-[14px] rounded-full flex justify-center items-center font-inter text-white ">
            PJ
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default RegistrationNav;
