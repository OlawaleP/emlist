import Image from "next/image";

const GeneralSpinner = () => {
  return (
    <div className="h-screen w-full bg-white flex items-center justify-center absolute top-0 left-0 right-0 z-20">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/Logo.svg"
          alt="logo"
          width={130}
          height={30}
          className="object-contain h-auto w-auto"
          priority
        />
        <p className="text-primary-green py-5">
          <span className="loading loading-infinity loading-lg"></span>
        </p>
      </div>
    </div>
  );
};

export default GeneralSpinner;
