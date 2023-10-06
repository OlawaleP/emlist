import DashboardNavBar from "@components/DashboardNavBar";
import Link from "next/link";

const page = () => {
  return (
    <main className="relative">
      <DashboardNavBar />
      <section className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[16px] font-[500] max-sm:text-[14px]">
            You've not set up your device
          </p>
          <Link
            href="/service/set-up-target"
            className="bg-primary-green rounded-[10px] w-[128px] h-[52px] text-[#FCFEFD] font-[700] max-sm:w-[100px] max-sm:h-[38px] max-sm:text-[14px] flex items-center justify-center"
          >
            Set up now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
