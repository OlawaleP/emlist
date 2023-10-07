const ExpertBanner = () => {
  return (
    <section className="pt-28 max-lg:pt-24">
      <div className="bg-become-expert-banner w-full h-[60vh] bg-cover bg-no-repeat bg-center">
        <div className="flex items-center w-full justify-end h-full max-md:justify-center">
          <h1 className="text-white font-[800] text-[48px] leading-[72px]  mr-32    max-md:hidden">
            Emilist Private <br />
            Experts
          </h1>
          <h1 className="text-white font-[800] text-[48px] leading-[72px]  max-md:mr-0 max-sm:text-[20px] max-sm:leading-[28px] md:hidden">
            Emilist Private Experts
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ExpertBanner;
