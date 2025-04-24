"use client";

import { useState } from "react";

import Navbar from "./Navbar";

const MainNav = () => {
  const [menu, setMenu] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggle = () => {
    setOpenSideBar((prev) => !prev);
    setMenu(false);
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
    setOpenSideBar(false);
  };
  return (
    <div>
      <Navbar toggle={toggle} toggleMenu={toggleMenu} menu={menu} />
    </div>
  );
};

export default MainNav;
