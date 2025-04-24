import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { fadeIn, subheadingVariants } from "@/anim";
import { category, serviceList } from "@/lib/constants";
import { ROUTES } from "@/lib/constants/routes";

const ExploreEmilistMegaMenuContent = () => {
  const router = useRouter();

  const handleSearch = (service: string, type: string) => {
    // Build the query string dynamically
    const query = new URLSearchParams({
      ...(service && { q: service.trim() }),
    }).toString();
    if (type === "service") {
      router.push(`${ROUTES?.SEARCH_SERVICE}?${query}`);
    } else {
      router.push(`${ROUTES?.FIND_JOB}?${query}`);
    }
  };

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <div className="flex flex-col gap-4 py-4">
          <h2 className="font-semibold text-lg w-full pb-2">Industry</h2>
          <ul className="flex items-center flex-wrap">
            {category?.map((category, index) => (
              <li key={index} className="xl:w-1/4 lg:w-1/3 w-1/2 py-2">
                <p
                  onClick={() => handleSearch(category, "job")}
                  className="hover:text-primary-green transition-all duration-300 capitalize cursor-pointer"
                >
                  {category}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <h2 className="font-semibold text-lg w-full pb-2">Services</h2>
          <ul className="flex items-center flex-wrap">
            {serviceList?.map((service, index) => (
              <li key={index} className="xl:w-1/4 lg:w-1/3 w-1/2 py-2">
                <p
                  onClick={() => handleSearch(service, "service")}
                  className="hover:text-primary-green transition-all duration-300 capitalize cursor-pointer"
                >
                  {service}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <h2 className="font-semibold text-lg w-full pb-2">Private Expert</h2>
          <ul className="flex flex-col gap-4">
            <li className="">
              <Link
                href="/expert/private-expert"
                className="hover:text-primary-green transition-all duration-300 capitalize"
              >
                Private expert
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        variants={subheadingVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-2 items-center "
      >
        <div className="">
          <Image
            src="/images/phone.png"
            alt="logo"
            width={354}
            height={372}
            className="object-contain w-auto h-auto"
          />
        </div>
        <h6 className="sm:text-lg font-semibold text-center">GET THE APP</h6>
        <div className="flex justify-center gap-4">
          <Link href="/">
            {" "}
            <Image
              src="/images/playstore.png"
              alt="logo"
              width={169}
              height={49}
              className="object-contain w-auto h-10"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/googleplay.png"
              alt="logo"
              width={200}
              height={55}
              className="object-contain w-auto h-10"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreEmilistMegaMenuContent;
