import Image from "next/image";
import DashboardCards from "./DashboardCards";
import DashboardToggle from "./DashboardToggle";
import DashboardConsumerContent from "./DashboardConsumerContent";
import DashboardExpertContent from "./DashboardExpertContent";
import DashboardMaterialContent from "./DashboardMaterialContent";
import DashboardLeadContent from "./DashboardLeadContent";

type Props = {
  currentLink: number;
};

const DashboardContent = ({ currentLink }: Props) => {
  return (
    <div className="col-span-8  w-full flex-col gap-4 max-lg:col-span-11">
      <div className="w-full bg-white p-6 rounded-[10px] max-h-[238px] h-[238px] max-sm:px-3">
        <h1 className="capitalize text-[48px] font-[800] leading-[72px] max-sm:text-[30px] max-sm:leading-[50px]">
          Good Morning, <br />
          Vic.
        </h1>
        <div className="flex items-center justify-between mt-4">
          <p className="whitespace-nowrap text-[16px]  max-sm:text-[14px]">
            <span className="mr-2 font-[700]">Unique ID:</span>
            Emilist12345
          </p>
          <button className="w-full flex items-center justify-end">
            <Image
              src="/assets/icons/add.svg"
              alt="logo"
              width={130}
              height={30}
              className="object-contain w-[24px] h-[24px] max-sm:w-[16px] max-sm:h-[16px] mr-1"
            />{" "}
            <p className="text-primary-green text-[16px] font-[500] max-sm:text-[14px]">
              Invite Friends
            </p>
          </button>
        </div>
      </div>
      <div className="lg:hidden max-lg:col-span-10 flex w-full my-4">
        <DashboardCards />
      </div>
      <div className="col-span-7 max-lg:col-span-10 w-full bg-white p-6 mt-4 rounded-[10px] flex flex-col max-sm:px-3">
        <DashboardToggle currentLink={currentLink} />
        {currentLink === 1 && <DashboardConsumerContent />}
        {currentLink === 2 && <DashboardExpertContent />}
        {currentLink === 3 && <DashboardMaterialContent />}
        {currentLink === 4 && <DashboardLeadContent />}
      </div>
    </div>
  );
};

export default DashboardContent;
