import { HiMenuAlt3, HiX } from "react-icons/hi";

const MenuButton = ({ onClick, menuBtnClicked }) => {
  return (
    <div className="absolute right-8 top-6 h-7 w-7  md:hidden">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex text-3xl text-indigo-700 hover:text-indigo-500 dark:text-indigo-300"
      >
        {menuBtnClicked ? <HiX /> : <HiMenuAlt3 />}
      </button>
    </div>
  );
};

export default MenuButton;
