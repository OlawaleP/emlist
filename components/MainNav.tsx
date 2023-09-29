import Link from "next/link";
import Image from "next/image";

const MainNav = () => {
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
        <ul className=" flex items-center gap-8 max-lg:hidden ">
          <li>
            <Link
              href="/register/expert"
              className="bg-primary-green px-[20px] py-[12px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold font-exo"
            >
              Join as an Expert
            </Link>
          </li>
          <li className=" text-[#030a05] text-base font-[500]   ">
            <Link href="/">List New Job</Link>
          </li>
          <li className=" text-[#030a05] text-base font-[500]   ">
            <p className="flex items-center">
              Explore Emilist{" "}
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="logo"
                width={20}
                height={20}
                className="object-contain ml-2"
              />
            </p>
          </li>
          <li className=" text-[#030a05] text-base font-[500]   ">
            <Link href="/">Log in</Link>
          </li>
          <li className=" text-[#030a05] text-base font-[500]   ">
            <Link href="/">Sign up</Link>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="object-contain w-[30px] h-[30px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
