import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeFAB from "../components/ThemeFAB";

const HomeContext = createContext();

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark") === "true";
  document.body.classList.toggle("dark", isDarkTheme);
  return isDarkTheme;
};

const HomeLayout = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark", newDarkTheme);
    localStorage.setItem("dark", newDarkTheme);
  };
  return (
    <HomeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      <div className="h-screen dark:bg-[var(--dark-mode-bg-color)]">
        <Navbar />
        <Outlet />
        <ThemeFAB />
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
