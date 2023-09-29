import Link from "next/link";

type Props = {
  buttonTitle: string;
  seeLink: string;
};

const SeeButton = ({ buttonTitle, seeLink }: Props) => {
  return (
    <button className="border-[1px] border-[#303632] my-4 rounded-lg px-[18px] py-2 font-[500] font-exo text-base text-[#303632] max-md:text-[14px] max-md:px-[10px] max-md:py-1">
      <Link href={seeLink}>{buttonTitle}</Link>
    </button>
  );
};

export default SeeButton;
