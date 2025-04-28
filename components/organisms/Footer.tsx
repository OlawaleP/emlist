import Image from "next/image";
import Link from "next/link";

import Logo from "../atoms/Logo";

import { footerLinks } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="padding-ctn">
      <div className="flex-c-b gap-12 w-full flex-wrap  border-y-1 border-gray-300  sm:py-10 py-6">
        <div className="sm:max-w-80 w-full flex flex-col gap-6">
          <Logo />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniamsit aliqua dolor do amet sint.
          </p>
        </div>
        {footerLinks?.map((title, index) => (
          <div className="flex flex-col " key={index}>
            <h6 className="sm:text-lg font-bold text-gray-900  mb-8">
              {title?.title}
            </h6>
            <ul className="flex flex-col sm:gap-6 gap-3">
              {title?.links?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.link}
                    className="font-medium hover:text-primary-green transition-all duration-300 capitalize max-sm:text-sm"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex-c-b flex-wrap gap-6 sm:py-8 py-4">
        <p className="max-sm:text-sm whitespace-nowrap flex-wrap gap-6">
          © 2025 EMILIST Inc. All rights reserved
        </p>
        <div className="flex-c gap-6">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/facebook-icon.svg"
              alt="logo"
              width={20}
              height={20}
              className="w-auto h-auto object-contain"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/twitter-icon.svg"
              alt="logo"
              width={20}
              height={20}
              className="w-auto h-auto object-contain"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/linkedin-icon.svg"
              alt="logo"
              width={20}
              height={20}
              className="w-auto h-auto object-contain"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/instagram-icon.svg"
              alt="logo"
              width={20}
              height={20}
              className="w-auto h-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
