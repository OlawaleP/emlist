import DashboardNavBar from "@components/DashboardNavBar";
import { dashboardServices } from "@constants";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="relative">
      {" "}
      <DashboardNavBar />
      <section className="padding-x py-28">
        <h1 className=" text-[30px] font-[700] leading-[36px] max-sm:text-[24px] max-sm:leading-[30px] my-4">
          Listed Jobs
        </h1>
        <div className="grid grid-cols-3">
          <div className="col-span-2 max-md:col-span-3 flex flex-col w-full gap-6">
            {dashboardServices.map((service, index) => (
              <Link href="/job/details">
                <div
                  key={index}
                  className="w-full p-4  shadow-md rounded-[20px]"
                >
                  <div className="flex justify-between items-center w-full pb-5">
                    <h5 className="text-[#000000] text-[20px] leading-[24px] font-[600] max-sm:text-[16px]">
                      {service.title}
                    </h5>
                    <div className="flex justify-end items-center gap-10 max-sm:gap-5 ">
                      {" "}
                      <Image
                        src="/assets/icons/menu.png"
                        alt="menu"
                        width={20}
                        height={20}
                        className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                      />
                    </div>
                  </div>
                  <h6 className="text-[#737774] text-[14px] leading-[20px] font-[500] max-sm:text-[12px]">
                    Budget: $100 Est Time: 2weeks Level 2 & above Date posted:
                    9hours ago
                  </h6>

                  <p className="text-[#303632] text-[14px] leading-[20px] font-[500] max-sm:text-[12px] py-2">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.Amet
                    minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sun..
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="flex items-center text-[#737774] text-[16px] leading-[20px] font-[500] max-sm:text-[13px] py-2">
                      {" "}
                      <Image
                        src="/assets/icons/location.png"
                        alt="location"
                        width={20}
                        height={20}
                        className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-2"
                      />
                      {service.location}
                    </p>
                    <div className="flex justify-end items-center gap-2 max-sm:gap-4 ">
                      {" "}
                      <Image
                        src="/assets/icons/face.png"
                        alt="menu"
                        width={20}
                        height={20}
                        className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                      />
                      <p className="text-[#303632] text-[14px] leading-[20px] font-[500] max-sm:text-[12px] ">
                        2 Applicants
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
