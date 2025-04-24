"use client";

import { useContext, useState } from "react";

import { AuthContext } from "@/lib/context/AuthState";
import { ROUTES } from "@/lib/constants/routes";
import { useNavbarScroll } from "@/lib/hooks/useNavbarScroll";

import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import NavItem from "../molecules/NavItem";
import CartIcon from "../atoms/CartIcon";
import HamburgerIcon from "../atoms/HamburgerIcon";

interface NavbarProps {
  toggle: () => void;
}

const Navbar = ({ toggle }: NavbarProps) => {
  const { currentUser } = useContext(AuthContext);
  const { visible, isHeightGreaterThanScreen } = useNavbarScroll();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div
        className={`fixed w-full padding-ctn py-4 flex-c-b backdrop-blur-xl transition-transform duration-700 z-10 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${isHeightGreaterThanScreen && "shadow"}`}
      >
        <Logo />
        <nav className="lg:flex items-center space-x-6 hidden">
          <NavLink href={ROUTES.JOIN_EXPERT}>Join as Expert</NavLink>
          <NavLink href={ROUTES.LIST_NEW_JOB}>List New Job</NavLink>
          <NavItem
            label="Explore Emilist"
            onClick={toggleMegaMenu}
            isOpen={isMegaMenuOpen}
          />
          {currentUser ? (
            <>
              <NavLink href={ROUTES?.DASHBOARD_JOB}>Dashboard</NavLink>
              <CartIcon />
            </>
          ) : (
            <>
              <NavLink href={ROUTES?.LOGIN}>Login</NavLink>
              <NavLink href={ROUTES?.SIGN_UP}>Sign up</NavLink>
            </>
          )}
        </nav>
        <div className="flex items-center gap-4 lg:hidden ">
          {currentUser && <CartIcon />}
          <HamburgerIcon toggle={toggle} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
