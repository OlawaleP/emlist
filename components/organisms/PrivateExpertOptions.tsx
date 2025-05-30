import Image from "next/image";

const PrivateExpertOptions = () => {
  return (
    <section className="padding-x padding-y">
      {/* Modal for hiring expert */}
      <HireExpertModal
        handleSubmit={handleSubmit}
        handleFileChange={handleFileChange}
        handleChnage={handleChnage}
        loading={loading}
        hiringDetails={hiringDetails}
        selectedImage={selectedImage}
        isOpen={isOpen}
        onCancel={onCancel}
        handleDelete={handleDelete}
        handleAddDate={handleAddDate}
        handleRemoveDate={handleRemoveDate}
        availability={availability}
        handleInputChange={handleInputChange}
      />
      <div className="flex gap-6 pb-20 max-md:flex-col max-md:items-center">
        <h4 className="text-4xl font-bold  max-sm:text-xl md:hidden">
          Investigator
        </h4>
        <div className="flex-1">
          <Image
            src="/assets/images/privateExpertImg.png"
            alt="logo"
            width={610}
            height={340}
            className="object-cover w-[610px] h-[340px] rounded-xl max-sm:w-full max-sm:h-[220px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h4 className="text-4xl font-bold  max-sm:text-xl max-md:hidden">
            Private Experts
          </h4>
          <p className="max-sm:text-sm  max-md:text-center">
            The success of your project starts with clarity and authentication
            of project elements. Click here to engage the services of EmiList
            investigators to help you navigate the authentication of your
            project resources like work status, land, documents, contracts,
            agreements, qualifications, and certifications
          </p>
          <div className="w-full flex max-md:justify-center">
            <button className="custom-btn" onClick={() => setIsOpen(true)}>
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateExpertOptions;
