import ImageSlider from "../molecules/Sliders/ImageSlider";
import ReadMore from "../molecules/ReadMore";

import { getCurrencySign } from "@/lib/helpers/getCurrencySign";
import { numberWithCommas } from "@/lib/helpers";
import CustomButton from "../atoms/CustomButton";

type Props = {
  handleOpenModal: () => void;
  serviceInfo: any;
};

const PublicExpertMainContent = ({ handleOpenModal, serviceInfo }: Props) => {
  return (
    <section className="padding-y">
      <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-4">
        <ImageSlider serviceInfo={serviceInfo} />
        <div className="col-span-2 max-lg:col-span-2 max-md:col-span-4">
          <div className="rounded-[15px] border-1 border-[#b8b9b8] py-6 px-8 max-sm:px-3">
            <h4 className="sm:text-xl font-bold mb-6 w-[85%]">
              ABOUT MY SERVICE
            </h4>
            <ReadMore
              style="mb-6  max-sm:text-sm"
              text={serviceInfo?.businessDescription}
              maxLength={600}
            />
            <h6 className="sm:text-lg font-semibold mb-6 w-[85%]">
              MY AREA OF EXPERTIES
            </h6>

            <ul className="max-w-[360px] max-sm:max-w-[240px] px-3 mb-6">
              {serviceInfo?.services?.map((service: string, index: number) => (
                <li key={index} className="w-[85%] max-sm:text-sm list-disc">
                  {service}
                </li>
              ))}
            </ul>
            <div className="">
              <h3 className="text-lg font-bold text-primary-green max-sm:text-sm mb-6">
                {serviceInfo?.currency &&
                  getCurrencySign(serviceInfo?.currency)}
                {serviceInfo?.startingPrice &&
                  numberWithCommas(serviceInfo?.startingPrice)}
              </h3>
              <p className="whitespace-nowrap mb-6  text-sm max-md:py-1 max-sm:text-xs">
                Starting price
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <CustomButton onClick={handleOpenModal} className="w-full">
                {" "}
                Contact Me
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicExpertMainContent;
