import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("light") : "light"
  );
  const element = document.documentElement; //html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative  ">
      <MdDarkMode
        className={`w-12 h-0 mx-6 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-4 z-10${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }} onClick={()=>setTheme(theme === "light" ? "dark":"light")`}
      />
      <MdDarkMode
        className="w-12 h-7 mx-6  cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default DarkMode;
