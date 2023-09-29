import { fourColorStar } from "@constants";
import Image from "next/image";

type Props = {
  profile: boolean;
};

const ReviewProfile = ({ profile }: Props) => {
  return (
    <section className="pt-28 padding-x">
      <div className="w-full flex items-end justify-between">
        <div className="flex w-full">
          {profile && (
            <Image
              src="/assets/images/profiletwo.svg"
              alt="menu"
              width={30}
              height={30}
              className="object-cover w-[72px] h-[72px] max-sm:w-[42px] max-sm:h-[42px] rounded-full mr-4 max-sm:mr-1"
            />
          )}

          <div className="flex-1 w-full">
            {profile && (
              <h6 className="text-[24px] font-[600] text-[#030a05] max-sm:text-[16px] max-sm:font-[700]">
                Victor Falade
              </h6>
            )}
            <div
              className={`${
                profile ? "justify-between" : "justify-end"
              } flex items-center  w-full`}
            >
              {profile && (
                <div className="flex items-center">
                  <p className="text-[#5E625F] text-base pr-2 border-r-[1px] border-[##5E625F] max-sm:text-[12px]">
                    LEVEL 4
                  </p>
                  <div className="flex items-center my-1 gap-2 max-sm:gap-0 pl-2">
                    {" "}
                    {fourColorStar.map((star, index) => (
                      <Image
                        key={index}
                        src={star}
                        alt="rate"
                        width={20}
                        height={20}
                        className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px]"
                      />
                    ))}
                    <p className="text-[13px] max-sm:text-[10px]">(51)</p>
                  </div>
                </div>
              )}
              <div className="flex gap-8 max-sm:gap-4">
                <button>
                  <Image
                    src="/assets/icons/heart.svg"
                    alt="menu"
                    width={24}
                    height={24}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] "
                  />
                </button>
                <button>
                  <Image
                    src="/assets/icons/simcard.svg"
                    alt="menu"
                    width={24}
                    height={24}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] "
                  />
                </button>
                <button>
                  <Image
                    src="/assets/icons/vuesax.svg"
                    alt="menu"
                    width={24}
                    height={24}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] "
                  />
                </button>
                <button>
                  <Image
                    src="/assets/icons/share.svg"
                    alt="menu"
                    width={24}
                    height={24}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[16px] max-sm:h-[16px] "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewProfile;
