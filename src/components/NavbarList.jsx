import data from "../data/navbar";
import ThemeToggle from "./ThemeToggle";

const NavbarList = ({ menuBtnClicked }) => {
  return (
    <div className="bg-white dark:bg-[var(--dark-mode-bg-color)]">
      <ul
        className={`absolute left-0 z-[-1] w-full gap-2 pb-12 pl-9 md:static md:z-auto 
                    md:flex md:w-auto md:items-center md:pb-0 md:pl-0 md:shadow-none
                    ${menuBtnClicked ? "top-20 shadow-md" : "top-[-200px]"} transition-all duration-500 ease-in`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="my-7 border-b-[3px] border-transparent text-[1.25rem] font-semibold text-indigo-700 md:my-0 
                     md:ml-8 md:hover:border-indigo-700 dark:text-indigo-100 dark:md:hover:border-indigo-300"
          >
            <a
              href="#"
              className="rounded-2xl p-2 hover:bg-indigo-700 hover:text-indigo-100 md:rounded-none md:p-0 md:hover:bg-white md:hover:text-indigo-700 dark:hover:bg-indigo-100 dark:hover:text-indigo-700 dark:md:hover:bg-transparent dark:md:hover:text-indigo-100 "
            >
              {item.text}
            </a>
          </li>
        ))}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </ul>
    </div>
  );
};

export default NavbarList;
