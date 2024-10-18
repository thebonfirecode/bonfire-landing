import { useState, useEffect } from "react";
import SunIcon from '../../../public/images/sun-svgrepo-com.svg';
import MoonIcon from '../../../public/images/moon-svgrepo-com.svg';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Store the theme choice in localStorage
  };

  useEffect(() => {
    // Ensure that this only runs on the client after the component has mounted
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    localStorage.setItem("theme", initialTheme);

  }, []);



  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative w-16 h-8 bg-off-white dark:bg-main-black rounded-full p-1 flex items-center transition-colors duration-300"
    >
      <div
        className={`w-6 h-6 bg-main-orange dark:bg-off-white rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-8" : ""
        }`}
      >
      {theme === "light" ? (
        <SunIcon className="w-5 h-5 m-0.5"/>
      ): (
        <MoonIcon className="w-5 h-5 m-0.5"/>
      )}
      </div>
    </button>
  );
};

export default ThemeToggleButton;
