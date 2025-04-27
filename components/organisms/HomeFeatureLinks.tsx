"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { fadeIn } from "@/anim";
import { mainCategoriesLinks } from "@/lib/constants";

const HomeFeatureLinks = () => {
  return (
    <section className="py-8 padding-ctn">
      <div className="flex-c justify-center">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          {mainCategoriesLinks?.map((data, index) => (
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              initial="hidden"
              animate="show"
              key={data?.id}
              className="max-w-48 w-48 min-w-48 border-1 border-gray-300 rounded-lg p-4  justify-center gap-4 hover:bg-gray-100 transition-all duration-300"
            >
              <Link href={`/${data?.link}`} className="flex-c flex-col">
                <div className="">
                  <Image
                    src={data?.icon}
                    width={20}
                    height={20}
                    alt={data?.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <p className="text-center font-semibold text-lg">
                  {data?.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureLinks;
