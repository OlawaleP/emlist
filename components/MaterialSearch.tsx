import Image from "next/image";
import Link from "next/link";

const MaterialSearch = () => {
  return (
    <form className="w-full flex items-center justify-between mb-10 shadow-lg">
      <div className="flex-1 flex items-center px-4 py-3 rounded-l-lg  border-[#b8b9b8] border-[1px] focus-within:border-primary-green max-md:px-2 max-md:py-2">
        <Image
          src="/assets/icons/search-normal.svg"
          alt="menu"
          width={16}
          height={16}
          className="object-contain mr-3 max-sm:mr-1"
        />
        <input
          type="text"
          placeholder="Enter Keyword"
          className="focus:outline-none text-[#737774] font-exo text-base max-md:text-[10px]"
        />
      </div>
      <div className="flex-1 flex items-center">
        <div className="flex items-center px-4 py-3 border-[#b8b9b8] border-y-[1px] focus-within:border-primary-green focus-within:border-[1px] max-md:px-1 max-md:py-2">
          <Image
            src="/assets/icons/location.svg"
            alt="menu"
            width={16}
            height={16}
            className="object-contain mr-3 max-sm:mr-1"
          />
          <input
            type="text"
            placeholder="Enter Keyword"
            className="focus:outline-none text-[#737774] font-exo text-base max-md:text-[10px]"
          />
        </div>
        <Link href="/catalog/material">
          <button className="bg-primary-green  px-5 py-3 border-primary-green border-[1px] rounded-r-lg text-[#fefcfd] text-base max-sm:px-2 max-sm:py-2 max-sm:text-[12px]">
            Search
          </button>
        </Link>
      </div>
    </form>
  );
};

export default MaterialSearch;
