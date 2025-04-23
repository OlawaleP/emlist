import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/Logo.svg"
        alt="Company Logo"
        width={150}
        height={50}
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
