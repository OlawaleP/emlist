const NewsLetter = () => {
  return (
    <section className=" padding-x">
      <h4 className="text-[#030a05] text-[30px] leading-[36px] font-[600] mb-3  max-sm:text-[18px] max-sm:leading-[28px] max-sm:font-[700]">
        Subscribe to Our Newsletter
      </h4>
      <div className="flex items-center max-lg:flex-col max-lg:items-start max-lg:max-w-[770px] w-full gap-7 max-lg:gap-2">
        <div className="flex-1">
          <p className="text-[#303632] text-[16px] leading-[24px] font-[400] mb-3  max-sm:text-[14px] max-sm:leading-[20px] ">
            Be the first to get latest updates from us and get more information
            about our products
          </p>
        </div>
        <form className=" flex-1 w-full flex items-center justify-between mb-10 shadow-lg">
          <div className="flex-1 flex items-center px-4 py-3 rounded-l-lg  border-[#b8b9b8] border-[1px] focus-within:border-primary-green max-sm:px-3 max-sm:py-2">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="focus:outline-none text-[#737774] font-exo text-base max-md:text-[10px] w-full"
            />
          </div>
          <button className="bg-primary-green  px-6 py-3 border-primary-green border-[1px] rounded-r-lg text-[#fefcfd] text-base max-sm:px-2 max-sm:py-2 max-sm:text-[12px]">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
