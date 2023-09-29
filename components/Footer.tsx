import { footerContents, socialMediaLinks } from "@constants";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" padding-x">
      <div className="grid grid-cols-5 max-xl:grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-2 max-sm:gap-4 gap-14  border-[#d0cfcf] border-y-[1px] pt-6 pb-2 items-center">
        <div className="col-span-2 ">
          <Link href="/" className=" flex gap-2 flex-center cursor-pointer">
            <Image
              src="/assets/images/Logo.svg"
              alt="logo"
              width={130}
              height={30}
              className="object-contain w-[130px] h-[30px] max-sm:w-[78px] max-sm:h-[18px] mb-4"
            />
          </Link>
          <p className="text-[#303632] text-[14px] leading-[20px] font-[400] mb-3  max-sm:text-[13px] max-sm:leading-[20px] ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniamsit aliqua dolor do amet sint.
          </p>
        </div>
        {footerContents.map((link, index) => (
          <div key={index}>
            <h5 className="text-[#030a05] text-[20px] leading-[28px] font-[700] mb-4  max-sm:text-[14px] max-sm:leading-[24px] ">
              {link.title}
            </h5>
            {link.links.map((links, i) => (
              <p
                key={i}
                className="text-[#303632] text-[16px] leading-[24px] font-[400] mb-3  max-sm:text-[13px] max-sm:leading-[20px] "
              >
                {links.name}
              </p>
            ))}
          </div>
        ))}
        <ul className="flex items-center mb-4 gap-4 md:hidden col-span-2 ">
          {socialMediaLinks.map((social, i) => (
            <li>
              {" "}
              <a href={social.link}>
                <Image
                  src={social.imgURL}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain w-[24px] h-[24px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between w-full py-5 text-[#303632] text-[16px] leading-[24px] font-[400] mb-3  max-sm:text-[14px] max-sm:leading-[20px]">
        <p>© 2022 EMILIST Inc. All rights reserved</p>
        <ul className="flex items-center justify-end gap-4 max-md:hidden">
          {socialMediaLinks.map((social, i) => (
            <li>
              {" "}
              <a href={social.link}>
                <Image
                  src={social.imgURL}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain w-[24px] h-[24px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
