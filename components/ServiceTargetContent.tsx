import Image from "next/image";

const ServiceTargetContent = () => {
  return (
    <section className="py-28 padding-x">
      <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px] py-4">
        Your monthly target
      </h1>
      <div className="flex justify-end">
        <button className="flex items-center">
          <Image
            src="/assets/icons/edit.jpg"
            alt="logo"
            width={20}
            height={20}
            className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-2"
          />
          <p className="text-primary-green text-[16px] max-sm:text-[14px]">
            Edit
          </p>
        </button>{" "}
      </div>
      <div className="flex items-center overflow-x-scroll w-full py-4 gap-6">
        <div className=" w-[294px] p-4 flex flex-col gap-3 rounded-[10px] shadow-md">
          <h6 className="text-[18px] text-[#030A05] font-[500] leading-[24px] max-sm:text-[14px]">
            Jobs
          </h6>
          <p className="text-[16px] text-[#303632] font-[400] leading-[24px] max-sm:text-[13px]">
            Amet minim mollit non deserunt ullamco est sit .{" "}
          </p>
          <div className="flex flex-col items-end gap-1">
            <p className="text-[20px] text-[#737774] font-[600] leading-[24px] max-sm:text-[14px]">
              12/20
            </p>
            <div className="w-full h-[8px] rounded-[10px] bg-[#D0CFCF]">
              <div className="h-full w-[57%] bg-[#054753] rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className=" w-[294px] p-4 flex flex-col gap-3 rounded-[10px] shadow-md">
          <h6 className="text-[18px] text-[#030A05] font-[500] leading-[24px] max-sm:text-[14px]">
            Amount
          </h6>
          <p className="text-[16px] text-[#303632] font-[400] leading-[24px] max-sm:text-[13px]">
            Amet minim mollit non deserunt ullamco est sit .{" "}
          </p>
          <div className="flex flex-col items-end gap-1">
            <p className="text-[20px] text-[#737774] font-[600] leading-[24px] max-sm:text-[14px]">
              #200,000/#300,000
            </p>
            <div className="w-full h-[8px] rounded-[10px] bg-[#D0CFCF]">
              <div className="h-full w-[60%] bg-[#25C269] rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className=" w-[294px] p-4 flex flex-col gap-3 rounded-[10px] shadow-md">
          <h6 className="text-[18px] text-[#030A05] font-[500] leading-[24px] max-sm:text-[14px]">
            Customer Referral
          </h6>
          <p className="text-[16px] text-[#303632] font-[400] leading-[24px] max-sm:text-[13px]">
            Amet minim mollit non deserunt ullamco est sit .{" "}
          </p>
          <div className="flex flex-col items-end gap-1">
            <p className="text-[20px] text-[#737774] font-[600] leading-[24px] max-sm:text-[14px]">
              20/35
            </p>
            <div className="w-full h-[8px] rounded-[10px] bg-[#D0CFCF]">
              <div className="h-full w-[80%] bg-[#FF9933] rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className=" w-[294px] p-4 flex flex-col gap-3 rounded-[10px] shadow-md">
          <h6 className="text-[18px] text-[#030A05] font-[500] leading-[24px] max-sm:text-[14px]">
            Friends Invited
          </h6>
          <p className="text-[16px] text-[#303632] font-[400] leading-[24px] max-sm:text-[13px]">
            Amet minim mollit non deserunt ullamco est sit .{" "}
          </p>
          <div className="flex flex-col items-end gap-1">
            <p className="text-[20px] text-[#737774] font-[600] leading-[24px] max-sm:text-[14px]">
              35/35
            </p>
            <div className="w-full h-[8px] rounded-[10px] bg-[#D0CFCF]">
              <div className="h-full w-[100%] bg-[#FF5D7A] rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-10 flex-col">
        <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px] py-4">
          Total Target Percentage
        </h1>
        <div className="w-[280px] h-[280px] rounded-full border-[1.5rem] border-[#D9D9D9] flex items-center justify-center border-b-[#6667FF] border-l-[#6667FF]">
          <h1 className="text-[30px] font-bold leading-[36px] max-sm:text-[20px] py-4">
            57%
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceTargetContent;
