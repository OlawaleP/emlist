type Props = {
  title: string;
  figure: number;
};

const CompareLevels = ({ title, figure }: Props) => {
  return (
    <section className="padding-x">
      <div className="flex max-md:flex-col">
        <div className="flex-1 min-w-[222px] max-md:min-w-full ">
          <p className="max-md:text-center whitespace-nowrap py-6 font-[600]  text-[16px] text-black max-md:py-4 max-sm:text-[14px]">
            {title}
          </p>
        </div>
        <div className="flex overflow-x-scroll  gap-5 border-b-[1px] border-[#B8B9B8]">
          <div className="flex  min-w-[240px] max-md:min-w-[180px]">
            <h6 className="whitespace-nowrap py-6 font-[400]  text-[16px] text-black max-md:py-4 max-sm:text-[12px] text-center w-full">
              {figure}
            </h6>
          </div>
          <div className="flex  min-w-[240px] max-md:min-w-[180px]">
            <h6 className="whitespace-nowrap py-6 font-[400]  text-[16px] text-black max-md:py-4 max-sm:text-[12px] text-center w-full">
              {figure}
            </h6>
          </div>
          <div className="flex  min-w-[240px] max-md:min-w-[180px]">
            <h6 className="whitespace-nowrap py-6 font-[400]  text-[16px] text-black max-md:py-4 max-sm:text-[12px] text-center w-full">
              {figure}
            </h6>
          </div>
          <div className="flex  min-w-[240px] max-md:min-w-[180px]">
            <h6 className="whitespace-nowrap py-6 font-[400]  text-[16px] text-black max-md:py-4 max-sm:text-[12px] text-center w-full">
              {figure}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareLevels;
