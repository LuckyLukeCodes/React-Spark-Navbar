import { IoSunny, IoMoon } from "react-icons/io5";
import { useHomeContext } from "../pages/HomeLayout";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useHomeContext();
  return (
    <div
      className={`ml-7 flex w-14 rounded-3xl border-2 border-slate-200 bg-slate-200 shadow-sm shadow-indigo-200 
       dark:border-indigo-400 dark:bg-indigo-400 dark:shadow-indigo-400
      ${isDarkTheme ? "justify-start" : "justify-end"}`}
    >
      <button
        className="rounded-full border-2 border-indigo-700 bg-indigo-700 p-1 text-base font-bold text-[--text-color]"
        onClick={() => {
          toggleDarkTheme();
        }}
      >
        {isDarkTheme ? <IoMoon /> : <IoSunny />}
      </button>
    </div>
  );
};

export default ThemeToggle;
