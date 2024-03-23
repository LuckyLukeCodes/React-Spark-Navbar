import lightning from "../assets/images/lightning.png";
import NavbarList from "./NavbarList";
import SmallNavbarList from "./SmallNavbarList";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [menuBtnClicked, setMenuBtnClicked] = useState(false);
  const handleClickForSmallNav = () => {
    setMenuBtnClicked(!menuBtnClicked);
  };
  return (
    <nav className="flex items-center justify-between px-4 py-3 shadow-lg ">
      <div className="flex items-center gap-12">
        <div className="flex items-center">
          <img src={lightning} alt="" className="" />
          <span className="electrolize-regular text-3xl font-bold text-indigo-700 dark:text-indigo-300">
            SPARK
          </span>
        </div>
        <NavbarList />
      </div>
      {menuBtnClicked && <SmallNavbarList />}

      <MenuButton onClick={handleClickForSmallNav} />
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
