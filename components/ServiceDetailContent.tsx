import { certificatesDetails, reviewWorkers } from "@constants";
import { numberWithCommas } from "@helpers/helperFunctions";
import Image from "next/image";

const ServiceDetailContent = () => {
  return (
    <section className="py-28 padding-x bg-[#F0FDF5]">
      <div className="grid grid-cols-12 py-10 gap-6">
        <div className="col-span-9 max-lg:col-span-12 flelx flex-col w-full bg-white rounded-[10px] py-10 ">
          <div className="w-full border-b-[1px] border-[#B8B9B8] px-10 max-sm:px-5 py-4">
            <div className="flex items-center justify-between">
              <h5 className="text-[#000000] text-[30px] leading-[36px] font-[600] max-sm:text-[20px]">
                Bricklayer
              </h5>
              <Image
                src="/assets/icons/menu.png"
                alt="menu"
                width={30}
                height={30}
                className="object-contain w-[30px] h-[30px] max-sm:w-[18px] max-sm:h-[18px] max-sm:hidden"
              />
            </div>
            <div className="flex items-center gap-12">
              <button className="text-primary-green text-[16px] leading-[24px] font-[500] max-sm:text-[14px] py-2  underline">
                Promote
              </button>
              <p className="text-primary-green text-[16px] leading-[24px] font-[500] max-sm:text-[14px] py-2 ml-[10rem] max-md:ml-0">
                Jules constructions
              </p>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-[#B8B9B8] px-10 max-sm:px-5 py-6 ">
            <div className="grid grid-cols-6 gap-10">
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/calendar-2.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    1998
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Year founded
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/dollar-circle.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    #{numberWithCommas(15000)}
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Starting price
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/calendar-2.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    7days
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Notice period
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/location.png"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    Lagos, Nigeria
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    Year founded
                  </p>
                </div>
              </div>
              <div className="col-span-2 max-sm:col-span-3 flex gap-2">
                <Image
                  src="/assets/icons/face.png"
                  alt="menu"
                  width={20}
                  height={20}
                  className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] "
                />
                <div className="flex flex-col  gap-1">
                  <h6 className="text-[#030A05] text-[18px] leading-[24px] font-[600] max-sm:text-[14px]">
                    1
                  </h6>
                  <p className="text-[#474C48] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                    No of employee
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-10 max-sm:px-5">
            <div className="py-5">
              <h6 className=" my-5 text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
                About my service
              </h6>
              <p className=" my-5 text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sun..Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud
                amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis
              </p>
            </div>
            <div className=" w-full">
              <h6 className=" my-5 text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
                Images
              </h6>
              <div className="flex gap-4 overflow-x-scroll w-full">
                {reviewWorkers.map((image, index) => (
                  <Image
                    key={index}
                    src={image.imgURL}
                    alt="logo"
                    width={122}
                    height={122}
                    className={`object-contain w-[122px] h-[122px] max-sm:w-[67px] max-sm:h-[67px] rounded-[14px]`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 max-lg:hidden max-h-max flex flex-col gap-6">
          <div className=" bg-white w-full rounded-[10px] py-10 px-5">
            <h5 className="text-[#000000] text-[18px] leading-[24px] font-[600] max-sm:text-[14px] mb-5">
              Service Coverage
            </h5>
            <ul className=" flex flex-col  gap-5 list-disc pl-6 max-md:pl-4">
              <li className="text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] ">
                Lagos
              </li>
              <li className="text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] ">
                Abeaokuta, Ogun
              </li>
              <li className="text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] ">
                Sango, Ogun
              </li>
              <li className="text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] ">
                Agbara, Ogun
              </li>
              <li className="text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] ">
                Remo, Oyo
              </li>
              <li className="text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[12px] ">
                Ibadan, Oyo
              </li>
            </ul>
          </div>
          <div className=" bg-white w-full rounded-[10px] py-10 px-5">
            <h5 className="text-[#000000] text-[20px] leading-[28px] font-[600] max-sm:text-[16px] mb-5">
              Membership
            </h5>
            <div className=" flex flex-col  gap-2 ">
              <h5 className="text-[#030A05] text-[16px] leading-[28px] font-[600] max-sm:text-[16px] ">
                Painters association of Nigeria
              </h5>
              <div className="flex items-center gap-3 w-full">
                {" "}
                <h6 className="w-[100px] text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px] whitespace-nowrap">
                  Position held:
                </h6>
                <p className=" text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  Member
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="w-[100px] text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Starting Date:
                </h6>
                <p className=" text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  25/Feb/1998
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="w-[100px] text-[#030A05] text-[14px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  End Date:
                </h6>
                <p className=" text-[#303632] text-[14px] leading-[24px] font-[400] max-sm:text-[13px]">
                  25/Feb/1998
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9 max-lg:col-span-12 flelx flex-col w-full bg-white rounded-[10px] py-10 px-10 max-sm:px-5  ">
          <h4 className="mb-2 text-[#030A05] text-[18px] leading-[28px] font-[600] max-sm:text-[14px]">
            Insurance
          </h4>
          <div className=" bg-white w-full rounded-[10px]">
            <div className=" flex flex-col  gap-3 ">
              <div className="flex items-center gap-3 w-full">
                {" "}
                <h6 className="w-[120px] text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px] whitespace-nowrap">
                  Issuing Org:
                </h6>
                <p className=" text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[13px]">
                  Leadway Assurance
                </p>
              </div>
              <div className="flex items-center  gap-3 w-full">
                {" "}
                <h6 className="w-[120px] text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                  Type of cover:
                </h6>
                <p className=" text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[13px]">
                  Property Insurance
                </p>
              </div>
              <p className=" text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[13px]">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </p>
            </div>
          </div>
          <div className="py-6">
            <h6 className=" my-5 text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]">
              Certificate
            </h6>
            <div className="flex gap-10 max-md:flex-col">
              {certificatesDetails.map((certificate, index) => (
                <div key={index} className="w-[320px] max-sm:w-[280px]">
                  <Image
                    src={certificate.certificateURL}
                    alt="certificate"
                    width={280}
                    height={190}
                    className="object-cover w-[full] h-[190px]  min-w-full max-w-full max-sm:h-[140px]"
                  />
                  <div className="w-full flex flex-col gap-4 py-6">
                    <div className="flex items-start  gap-3 w-full">
                      {" "}
                      <h6 className="w-[120px] text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                        Issuing Org:
                      </h6>
                      <p className=" text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[13px]">
                        Painters Association of Nigeria
                      </p>
                    </div>
                    <div className="flex items-center  gap-3 w-full">
                      {" "}
                      <h6 className="w-[120px] text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                        Verification No:
                      </h6>
                      <p className=" text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[13px]">
                        {certificate.verificationNumber}
                      </p>
                    </div>
                    <div className="flex items-center  gap-3 w-full">
                      {" "}
                      <h6 className="w-[120px] text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                        Issuing Date:
                      </h6>
                      <p className=" text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[13px]">
                        {certificate.issuingDate}
                      </p>
                    </div>
                    <div className="flex items-center  gap-3 w-full">
                      {" "}
                      <h6 className="w-[120px] text-[#030A05] text-[16px] leading-[24px] font-[600] max-sm:text-[13px]  whitespace-nowrap">
                        Expiry Date:
                      </h6>
                      <p className=" text-[#303632] text-[16px] leading-[24px] font-[400] max-sm:text-[13px]">
                        {certificate.expiringDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailContent;
