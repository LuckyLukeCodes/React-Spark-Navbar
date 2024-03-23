import data from "../data/navbar";
import ThemeToggle from "./ThemeToggle";

const SmallNavbarList = () => {
  return (
    <div className="absolute left-0 top-[5.6rem] w-full bg-slate-500 p-4 md:hidden">
      <ul className="flex flex-col items-center justify-center gap-4 ">
        {data.map((item, index) => (
          <li
            key={index}
            className="border-b-2 border-transparent text-[1.25rem] font-semibold text-indigo-700 hover:border-indigo-700 dark:text-indigo-300 dark:hover:border-indigo-300"
          >
            <a href="#">{item.text}</a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default SmallNavbarList;
