"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="relative group">
      <Link
        href={href}
        className={`font-medium  ${isActive ? "text-primary-green" : ""}`}
      >
        {children}
      </Link>

      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-green" />
      )}

      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-green transition-all duration-300 group-hover:w-full" />
    </div>
  );
};

export default NavLink;
