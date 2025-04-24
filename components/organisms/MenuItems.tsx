import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { category, serviceList } from "@/lib/constants";
import { ROUTES } from "@/lib/constants/routes";

const MenuItems = () => {
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
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      exit={{ y: 20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-6 left-0 right-0 w-full h-[85vh] overflow-y-auto bg-part-transparent  padding-ctn backdrop-blur text-nuetral-light"
    >
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-bold text-lg">Industry</h2>
        <ul className="flex flex-col gap-4">
          {category?.map((category, index) => (
            <li key={index} className="">
              <span className="" onClick={() => handleSearch(category, "job")}>
                {category}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-bold text-lg">Services</h2>
        <ul className="flex flex-col gap-4">
          {serviceList?.map((service, index) => (
            <li key={index} className="">
              <span
                className=""
                onClick={() => handleSearch(service, "service")}
              >
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 py-4">
        <h2 className="font-bold text-lg">Private Expert</h2>
        <ul className="flex flex-col gap-4">
          <li className="">
            <Link href="/expert/private-expert" className="">
              Private expert
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MenuItems;
