type Props = {
  title: string;
  firstList: string;
  secondList: string;
};

const CompareCertification = ({ title, firstList, secondList }: Props) => {
  return (
    <section className="padding-x">
      <div className="flex max-md:flex-col">
        <div className="flex-1 min-w-[222px] max-md:min-w-full ">
          <p className="max-md:text-center pwhitespace-nowrap py-6 font-[600]  text-[16px] text-black max-md:py-4 max-sm:text-[14px]">
            {title}
          </p>
        </div>
        <div className="flex overflow-x-scroll  gap-5 border-b-[1px] border-[#B8B9B8]">
          <div className="flex min-w-[240px]  max-w-[240px] max-md:min-w-[180px] max-md:max-w-[180px] gap-8">
            <ul className=" py-6 font-[400] leading-[24px]  text-[16px] text-black max-md:py-4 max-sm:text-[12px]  w-full list-disc flex flex-col gap-4">
              <li>{firstList}</li>
              <li>{secondList}</li>
            </ul>
          </div>
          <div className="flex min-w-[240px]  max-w-[240px] max-md:min-w-[180px] max-md:max-w-[180px]">
            <ul className=" py-6 font-[400] leading-[24px]  text-[16px] text-black max-md:py-4 max-sm:text-[12px]  w-full list-disc flex flex-col gap-4">
              <li>{firstList}</li>
              <li>{secondList}</li>
            </ul>
          </div>
          <div className="flex min-w-[240px]  max-w-[240px] max-md:min-w-[180px] max-md:max-w-[180px]">
            <ul className=" py-6 font-[400] leading-[24px]  text-[16px] text-black max-md:py-4 max-sm:text-[12px]  w-full list-disc flex flex-col gap-4">
              <li>{firstList}</li>
              <li>{secondList}</li>
            </ul>
          </div>
          <div className="flex min-w-[240px]  max-w-[240px] max-md:min-w-[180px] max-md:max-w-[180px]">
            <ul className=" py-6 font-[400] leading-[24px]  text-[16px] text-black max-md:py-4 max-sm:text-[12px]  w-full list-disc flex flex-col gap-4">
              <li>{firstList}</li>
              <li>{secondList}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareCertification;
