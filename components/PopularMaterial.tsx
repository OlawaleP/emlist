import Image from "next/image";
import { popularServices } from "@constants";
import SeeButton from "./SeeButton";
import Link from "next/link";

type Props = {
  bgColor: string;
};

const PopularMaterial = ({ bgColor }: Props) => {
  return (
    <section className={`${bgColor} padding-y`}>
      <div className=" padding-l">
        <h2 className="text-[30px] text-[#030a05] font-bold max-md:text-[18px] ">
          Materials you may need
        </h2>
        <div className="flex items-center w-full overflow-x-scroll gap-4">
          {popularServices.map((service, index) => (
            <Link href="/catalog/material">
              <div
                className="min-w-[380px] mt-8 max-md:min-w-[280px]"
                key={index}
              >
                <Image
                  src={service.imgURL}
                  alt="logo"
                  width={380}
                  height={276}
                  className="object-cover w-full rounded-lg h-[276px] max-md:h-[200px]"
                />
                <h4 className="w-full font-exo font-[500] text-[24px] text-[#030a05] my-2 max-md:text-[16px]">
                  {service.service}
                </h4>

                <SeeButton seeLink="/" buttonTitle="See suppliers near you" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMaterial;
