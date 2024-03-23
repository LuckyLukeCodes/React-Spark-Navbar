import { IoSunny, IoMoon } from "react-icons/io5";
import { useState } from "react";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark") === "true";
  document.body.classList.toggle("dark", isDarkTheme);
  return isDarkTheme;
};

const ThemeFAB = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark", newDarkTheme);
    localStorage.setItem("dark", newDarkTheme);
  };
  return (
    <div
      className="fixed bottom-5 right-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full
      bg-indigo-700 p-0.5 text-2xl text-[var(--text-color)] shadow-md transition-all ease-in hover:shadow-md hover:shadow-indigo-300 active:scale-95 md:hidden dark:bg-indigo-300"
    >
      <div
        onClick={toggleDarkTheme}
        className="flex h-full w-full select-none items-center justify-center rounded-full transition-transform ease-in"
      >
        {isDarkTheme ? <IoMoon /> : <IoSunny />}
      </div>
    </div>
  );
};

export default ThemeFAB;
