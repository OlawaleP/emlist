import dynamic from "next/dynamic";
import Link from "next/link";

const PopularMaterialData = dynamic(
  () => import("../organisms/PopularMaterialData")
);

const PopularMaterials = ({ bgColor }: { bgColor: string }) => {
  return (
    <section className={`${bgColor} padding-y`}>
      <div className=" padding-l-ctn">
        <div className="flex-c-b pr-6">
          <h2 className="text-3xl text-gray-900 font-bold max-md:text-xl ">
            Materials you may need
          </h2>
          <Link
            href="/dashboard/material"
            className="text-primary-green hover:underline transition-all duration-300"
          >
            See more
          </Link>
        </div>
        <PopularMaterialData />
      </div>
    </section>
  );
};

export default PopularMaterials;
