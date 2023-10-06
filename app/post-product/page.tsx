"use client";

import DashboardNavBar from "@components/DashboardNavBar";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile =
      e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    setFile(selectedFile);
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setImageUrl(objectUrl);
    } else {
      setImageUrl(null);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setImageUrl(null);
  };
  return (
    <main className="relative">
      <DashboardNavBar />
      <section className="pt-28 padding-x pb-20">
        <h1 className=" text-[30px] font-[700] leading-[36px] max-sm:text-[24px] max-sm:leading-[30px]">
          Post a product
        </h1>
        <div className="grid grid-cols-2 w-full gap-10 mt-4  ">
          <div className="col-span-1 flex flex-col gap-4 max-md:col-span-2 mr-4 max-md:mr-0">
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Product name
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="Dangote Cement"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Category
              </p>
              <div className="w-full">
                <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Building Materials</option>
                    <option>Imo</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Sub-Category
              </p>
              <div className="w-full">
                <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Cement</option>
                    <option>Imo</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Brand
              </p>
              <div className="w-full">
                <div className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus-within:border-primary-green focus-within:border-[1px]  max-sm:h-[46px] text-[#c8c5c5]">
                  <select className="bg-[#ececec] outline-none  min-w-full w-full h-full max-w-full max-sm:text-[14px] ">
                    <option>Dangote</option>
                    <option>Imo</option>
                    <option>Ogun</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Description
              </p>
              <div className="w-full">
                <textarea
                  className=" min-w-full w-full  max-w-full rounded-[10px]  px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:text-[14px] text-[#c8c5c5] "
                  rows={8}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4 max-md:col-span-2 ml-4 max-md:ml-0">
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Quantity Available
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="40"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Product image
              </p>
              <div className="w-full h-[210px] bg-[#ECECEC] rounded-[5px] flex p-2 gap-2 ">
                {file ? (
                  <div className="w-[100px] h-[100px] relative">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt="upload"
                        width={30}
                        height={30}
                        className="object-cover w-full h-full "
                      />
                    )}
                    <div className="absolute bottom-0 right-0 bg-primary-green cursor-pointer p-1">
                      <Image
                        src="/assets/icons/close-square.svg"
                        alt="arrow-left"
                        width={30}
                        height={30}
                        className="object-contain w-[12px] h-[12px] "
                        onClick={handleDelete}
                      />
                    </div>
                  </div>
                ) : (
                  <label htmlFor="business-pic" className="w-full h-full">
                    <input
                      id="business-pic"
                      type="file"
                      onChange={handleChange}
                      name="file"
                      className="invisible h-[1px] w-[1px]"
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Price
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder=""
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Supplier/store name
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="ABC STORE"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#5e625f] py-2 text-[16px] font-[500] max-sm:text-[14px]">
                Location
              </p>
              <div className="w-full">
                <input
                  type="text"
                  className=" min-w-full w-full  max-w-full rounded-[10px] h-[62px] px-4 bg-[#ececec] focus:outline-none focus:border-primary-green focus:border-[1px]  max-sm:h-[46px] max-sm:text-[14px]"
                  placeholder="Lagos, Nigeria"
                />
              </div>
            </div>
          </div>
          <div className="flex mb-28 mt-6 justify-center col-span-2 ">
            <button className="bg-primary-green px-[25px] py-[15px] text-[#fcfefd] rounded-[10px] cursor-pointer font-bold  mt-15 whitespace-nowrap  text-[14px] max-lg:mt-0 max-sm:text-[11px] max-sm:px-[20px] max-sm:py-[10px] max-sm:mt-20">
              Post Product
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
