import { allReviews, fiveColorStar } from "@constants";
import Image from "next/image";

const AllReviews = () => {
  return (
    <section className="padding-x">
      <div className="flex items-center gap-4 py-4 border-b-[1px] border-[#b8b9b8]">
        <label
          htmlFor="filter"
          className="flex items-center text-base font-[400] text-[#474c48] max-md:text-[12px]"
        >
          <Image
            src="/assets/icons/filter.svg"
            alt="menu"
            width={20}
            height={20}
            className="object-contain mr-1"
          />{" "}
          Filter
        </label>

        <div className="border-[#b8b9b8] border-[1px] rounded-lg px-[20px] py-2  max-md:px-[10px] max-md:py-1 shadow-md">
          <select
            name=""
            id="filter"
            className="w-full outline-none box-border text-base text-[#303632] font-[400] max-md:text-[12px]"
          >
            <option value="contruction"> Most relevant</option>
            <option value="Software"> Software</option>
          </select>
        </div>
      </div>
      <div className="py-10 max-sm:py-5 flex flex-col max-w-[820px] gap-20">
        {allReviews.map((review, index) => (
          <div className="w-full flex " key={index}>
            <Image
              src={review.profile}
              alt="profile pic"
              width={51}
              height={51}
              className="object-cover w-[81px] h-[81px] max-sm:w-[40px] max-sm:h-[40px] rounded-full"
            />
            <div className="ml-4">
              <div className="flex items-center">
                <h6 className="text-[18px] font-[600] text-[#030a05] max-sm:text-[14px] mr-3 font-inter">
                  {review.name}
                </h6>
                <p className="text-[#FF9933] flex items-center text-[14px] font-[500]  max-sm:text-[12px] gap-1">
                  {fiveColorStar.map((star, index) => (
                    <Image
                      key={index}
                      src={star}
                      alt="rate"
                      width={20}
                      height={20}
                      className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px]"
                    />
                  ))}
                  5
                </p>
              </div>
              <p className="py-4 text-[#303632] text-[16px] leading-[24px] max-sm:[12px] max-sm:leading-[17px] max-sm:py-3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enimtest sit aliqua
                dolor do amet sint. Velit off. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enimtest sit aliqua dolor do amet sint. Velit
                off.Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enimtest sit aliqua
                dolor do amet sint.{" "}
              </p>

              <p className=" text-[#737774] text-[16px] leading-[24px] max-sm:[12px] max-sm:leading-[16px]">
                Published 2 hours ago
              </p>
              <div className="flex items-center gap-10 py-5 max-sm:py2 max-sm:gap-5">
                <p className="flex items-center text-[18px] font-[400] text-[#030a05] max-sm:text-[14px] ">
                  {" "}
                  <Image
                    src="/assets/icons/like.svg"
                    alt="profile pic"
                    width={51}
                    height={51}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-1"
                  />
                  Helpful
                </p>
                <p className="flex items-center text-[18px] font-[400] text-[#030a05] max-sm:text-[14px]">
                  {" "}
                  <Image
                    src="/assets/icons/dislike.svg"
                    alt="profile pic"
                    width={51}
                    height={51}
                    className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:h-[14px] mr-1"
                  />
                  Not Helpful
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center pb-10 max-sm:pb-5">
          <button className="flex text-primary-green text-[16px] max-sm:[14px]">
            {" "}
            <Image
              src="/assets/icons/add.svg"
              alt="rate"
              width={20}
              height={20}
              className="object-contain w-[20px] h-[20px] max-sm:w-[14px] max-sm:[14px] mr-3"
            />
            List More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
