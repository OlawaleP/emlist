import dynamic from "next/dynamic";
import Link from "next/link";

const PopularExpertData = dynamic(
  () => import("../organisms/PopularExpertData")
);

const PopularExperts = () => {
  return (
    <section className="padding-y no-scroll">
      <div className="padding-l-ctn">
        <div className="flex-c-b pr-6">
          <h2 className="text-3xl font-bold max-md:text-xl ">
            Services around you
          </h2>
          <Link
            href="/dashboard/expert"
            className="text-primary-green hover:underline transition-all duration-300"
          >
            See more
          </Link>
        </div>
        <PopularExpertData />
      </div>
    </section>
  );
};

export default PopularExperts;
