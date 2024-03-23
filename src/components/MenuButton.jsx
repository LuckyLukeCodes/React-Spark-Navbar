import { HiMenuAlt3 } from "react-icons/hi";

const MenuButton = ({ onClick }) => {
  return (
    <div className="-mr-2 flex md:hidden">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex text-indigo-700 dark:text-indigo-300"
      >
        <HiMenuAlt3 />
      </button>
    </div>
  );
};

export default MenuButton;
