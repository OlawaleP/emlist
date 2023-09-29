import Image from "next/image";

type Props = {
  title: string;
};

const CatalogSearch = ({ title }: Props) => {
  return (
    <section className="pt-28 padding-x">
      <div className="flex justify-between items-center">
        <h4 className="text-[#030a05] text-[30px] leading-[36px] font-[600] mb-3  max-sm:text-[18px] max-sm:leading-[28px] max-sm:font-[700]">
          {title}
        </h4>
        <form className="md:hidden">
          {" "}
          <Image
            src="/assets/icons/search-normal.svg"
            alt="menu"
            width={20}
            height={20}
            className="object-contain"
          />
        </form>
      </div>

      <div className="flex items-center max-md:flex-col max-lg:items-start max-lg:max-w-[770px] w-full gap-10 max-lg:gap-2">
        <div className="flex-1">
          <p className="text-[#303632] text-[16px] leading-[24px] font-[400] mb-3  max-sm:text-[14px] max-sm:leading-[20px] ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enimt.
          </p>
        </div>
        <form className=" flex-1 w-full flex items-center justify-between mb-10 max-md:hidden">
          <div className="flex-1 flex items-center px-4 py-3 rounded-lg  border-[#737774] border-[1px] focus-within:border-primary-green max-sm:px-1 max-sm:py-1">
            <Image
              src="/assets/icons/search-normal.svg"
              alt="menu"
              width={16}
              height={16}
              className="object-contain mr-3 max-sm:mr-1"
            />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none text-[#737774] font-exo text-base max-md:text-[10px] w-full"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CatalogSearch;
