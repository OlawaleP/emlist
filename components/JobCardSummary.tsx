import Image from "next/image";

const JobCardSummary = () => {
  return (
    <div className="flex overflow-x-scroll gap-4 mt-5">
      <div className="w-[193px] max-w-[193px] min-w-[193px] border-[1px] border-[#B8B9B8] rounded-[10px] p-4 max-sm:max-w-[192px] max-sm:min-w-[192px] max-sm:w-[192px]">
        <Image
          src="/assets/icons/icon1.jpg"
          alt="menu"
          width={28}
          height={28}
          className="object-contain w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px] "
        />
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex flex-col">
            <h5 className="text-[#000000] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
              Lead
            </h5>
            <p className="text-[#737774] text-[12px] leading-[12x] font-[400] max-sm:text-[10px]">
              This month
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[#030A05] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
              3
            </h2>
            <div className="flex items-center">
              <Image
                src="/assets/icons/arrow-up.jpg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain w-[16px] h-[16px] max-sm:w-[12px] max-sm:h-[12px] "
              />
              <p className="text-[#054753] text-[14px] leading-[20px] font-[400] max-sm:text-[12px]">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[193px] max-w-[193px] min-w-[193px] border-[1px] border-[#B8B9B8] rounded-[10px] p-4 max-sm:max-w-[192px] max-sm:min-w-[192px] max-sm:w-[192px]">
        <Image
          src="/assets/icons/icon1.jpg"
          alt="menu"
          width={28}
          height={28}
          className="object-contain w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px] "
        />
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex flex-col">
            <h5 className="text-[#000000] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
              New
            </h5>
            <p className="text-[#737774] text-[12px] leading-[12x] font-[400] max-sm:text-[10px]">
              This month
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[#030A05] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
              3
            </h2>
            <div className="flex items-center">
              <Image
                src="/assets/icons/arrow-up.jpg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain w-[16px] h-[16px] max-sm:w-[12px] max-sm:h-[12px] "
              />
              <p className="text-[#054753] text-[14px] leading-[20px] font-[400] max-sm:text-[12px]">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[193px] max-w-[193px] min-w-[193px] border-[1px] border-[#B8B9B8] rounded-[10px] p-4 max-sm:max-w-[192px] max-sm:min-w-[192px] max-sm:w-[192px]">
        <Image
          src="/assets/icons/icon2.jpg"
          alt="menu"
          width={28}
          height={28}
          className="object-contain w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px] "
        />
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex flex-col">
            <h5 className="text-[#000000] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
              Active
            </h5>
            <p className="text-[#737774] text-[12px] leading-[12x] font-[400] max-sm:text-[10px]">
              This month
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[#030A05] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
              3
            </h2>
            <div className="flex items-center">
              <Image
                src="/assets/icons/arrow-down.jpg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain w-[16px] h-[16px] max-sm:w-[12px] max-sm:h-[12px] "
              />
              <p className="text-[#054753] text-[14px] leading-[20px] font-[400] max-sm:text-[12px]">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[193px] max-w-[193px] min-w-[193px] border-[1px] border-[#B8B9B8] rounded-[10px] p-4 max-sm:max-w-[192px] max-sm:min-w-[192px] max-sm:w-[192px]">
        <Image
          src="/assets/icons/icon5.jpg"
          alt="menu"
          width={28}
          height={28}
          className="object-contain w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px] "
        />
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex flex-col">
            <h5 className="text-[#000000] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
              Overdue
            </h5>
            <p className="text-[#737774] text-[12px] leading-[12x] font-[400] max-sm:text-[10px]">
              This month
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[#030A05] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
              2
            </h2>
            <div className="flex items-center">
              <Image
                src="/assets/icons/arrow-up.jpg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain w-[16px] h-[16px] max-sm:w-[12px] max-sm:h-[12px] "
              />
              <p className="text-[#054753] text-[14px] leading-[20px] font-[400] max-sm:text-[12px]">
                1
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[193px] max-w-[193px] min-w-[193px] border-[1px] border-[#B8B9B8] rounded-[10px] p-4 max-sm:max-w-[192px] max-sm:min-w-[192px] max-sm:w-[192px]">
        <Image
          src="/assets/icons/icon4.jpg"
          alt="menu"
          width={28}
          height={28}
          className="object-contain w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px] "
        />
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex flex-col">
            <h5 className="text-[#000000] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
              Paused
            </h5>
            <p className="text-[#737774] text-[12px] leading-[12x] font-[400] max-sm:text-[10px]">
              This month
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[#030A05] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
              3
            </h2>
            <div className="flex items-center">
              <Image
                src="/assets/icons/arrow-up.jpg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain w-[16px] h-[16px] max-sm:w-[12px] max-sm:h-[12px] "
              />
              <p className="text-[#054753] text-[14px] leading-[20px] font-[400] max-sm:text-[12px]">
                2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[193px] max-w-[193px] min-w-[193px] border-[1px] border-[#B8B9B8] rounded-[10px] p-4 max-sm:max-w-[192px] max-sm:min-w-[192px] max-sm:w-[192px]">
        <Image
          src="/assets/icons/icon3.jpg"
          alt="menu"
          width={28}
          height={28}
          className="object-contain w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px] "
        />
        <div className="flex justify-between items-center w-full mt-3">
          <div className="flex flex-col">
            <h5 className="text-[#000000] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
              Completed
            </h5>
            <p className="text-[#737774] text-[12px] leading-[12x] font-[400] max-sm:text-[10px]">
              This month
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[#030A05] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
              3
            </h2>
            <div className="flex items-center">
              <Image
                src="/assets/icons/neutral.jpg"
                alt="menu"
                width={16}
                height={16}
                className="object-contain w-[14px] h-[14px] max-sm:w-[12px] max-sm:h-[12px] "
              />
              <p className="text-[#054753] text-[14px] leading-[20px] font-[400] max-sm:text-[12px]">
                0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardSummary;
