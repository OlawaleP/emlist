import { reviewWorkers } from "@constants";
import Link from "next/link";

const CompareViewButton = () => {
  return (
    <section className="padding-x pt-10 pb-20">
      <div className="flex pb-5">
        <div className="min-w-[222px] flex-1 max-md:hidden"></div>
        <div className="flex overflow-x-scroll  gap-5">
          {reviewWorkers.map((experts, index) => (
            <div className="flex flex-col min-w-[240px]" key={index}>
              <div className="flex justify-center">
                <Link href="/experts/details" className=" py-2 ">
                  <button className="px-3 border-[1px] border-[#303632] text-[14px] max-sm:text-[12px] py-1 rounded-[10px]">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareViewButton;
