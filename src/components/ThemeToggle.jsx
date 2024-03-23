import { IoSunny, IoMoon } from "react-icons/io5";
import { useState } from "react";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark") === "true";
  document.body.classList.toggle("dark", isDarkTheme);
  return isDarkTheme;
};

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark", newDarkTheme);
    localStorage.setItem("dark", newDarkTheme);
  };
  return (
    <div
      className={`flex w-20 rounded-3xl border-2 border-slate-200 bg-slate-200 shadow-sm shadow-indigo-200 transition-transform delay-300 ease-linear dark:border-indigo-400 dark:bg-indigo-400 dark:shadow-indigo-400 ${isDarkTheme ? "justify-start" : "justify-end"}`}
    >
      <button
        className="rounded-full border-2 border-indigo-700 bg-indigo-700 p-2 text-base font-bold text-[--text-color]"
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
