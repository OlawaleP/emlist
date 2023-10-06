import { Image, Modal } from "antd";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onCancel: () => void;
};

const ExploreEmilistModal = ({ isOpen, onCancel }: Props) => {
  return (
    <>
      <Modal style={{ top: 80 }} open={isOpen} onCancel={onCancel} width={900}>
        <div className="p-6 max-sm:px-3">
          <div className="">
            <h1 className="font-exo font-[600] text-[20px] text-[#030a05]  max-xl:text-center border-b-[1px] border-[#b8b9b8] max-sm:text-[16px]">
              Experts
            </h1>
            <div className="grid grid-cols-12  gap-10 py-6">
              <div className=" col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 flex flex-col gap-4">
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Agriculture
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Artisan
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Construction
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Education
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
              </div>
              <div className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 flex flex-col gap-4">
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Entertainment
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Event Management
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Information Management
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Manufacturing
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
              </div>
              <div className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 flex flex-col gap-4">
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    medical
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    minning
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    professional service
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    real estate
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
              </div>
              <div className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 flex flex-col gap-4">
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Food/restaurant
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    utility
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Waste Management
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h1 className="font-exo font-[600] text-[20px] text-[#030a05]  max-xl:text-center border-b-[1px] border-[#b8b9b8] max-sm:text-[16px]">
              Experts
            </h1>
            <div className="grid grid-cols-12 gap-10 py-6">
              <div className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 flex flex-col gap-4">
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    building materials
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    plumbing materials
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    computer
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    computer assesories
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
              </div>
              <div className=" col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 flex flex-col gap-4">
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    Clothing
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
                <Link href="/" className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    Others
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] ml-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="my-5">
            <h1 className="font-exo font-[600] text-[20px] text-[#030a05]  max-xl:text-center border-b-[1px] border-[#b8b9b8] max-sm:text-[16px]">
              Private Expert
            </h1>
            <div className="grid grid-cols-12 gap-10 py-6">
              <div className="col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 flex flex-col gap-4">
                <button className="flex items-center">
                  <p className="font-[400] text-base text-[#303632] capitalize">
                    Investigator
                  </p>
                </button>
                <button className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    Supervisor
                  </p>
                </button>
                <button className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    Project manager
                  </p>
                </button>
                <Link href="/become-expert" className="flex items-center">
                  <p className="font-[400] text-base  text-[#303632] capitalize">
                    Private expert
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExploreEmilistModal;
