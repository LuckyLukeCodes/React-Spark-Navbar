import lightning from "../assets/images/lightning.png";
import NavbarList from "./NavbarList";
import { useState } from "react";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [menuBtnClicked, setMenuBtnClicked] = useState(false);
  const handleMenuBtnClicked = () => {
    setMenuBtnClicked(!menuBtnClicked);
  };
  return (
    <nav
      className={`fixed left-0 top-0 w-full md:shadow-md ${menuBtnClicked ? "" : "shadow-md"}`}
    >
      <div className="items-center justify-between bg-white px-7 py-4 md:flex md:px-10 dark:bg-[var(--dark-mode-bg-color)]">
        <a href="#" className="flex items-center gap-2">
          <img src={lightning} alt="" className="h-12 w-12" />
          <span className="electrolize-regular text-3xl font-semibold text-indigo-700 transition-all duration-150 ease-linear dark:text-indigo-100">
            SPARK
          </span>
        </a>
        <MenuButton
          onClick={handleMenuBtnClicked}
          menuBtnClicked={menuBtnClicked}
        />
        <NavbarList
          menuBtnClicked={menuBtnClicked}
          handleMenuBtnClicked={handleMenuBtnClicked}
        />
      </div>
    </nav>
  );
};

export default Navbar;
