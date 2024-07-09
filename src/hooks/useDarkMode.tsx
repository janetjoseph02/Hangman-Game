import { useState, useEffect } from "react";

const useDarkMode = (): [React.Dispatch<React.SetStateAction<string>>, string, string] => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });
  
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    const body: HTMLElement = document.body;

    // Update theme in localStorage
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      root.classList.add("dark");
      body.style.backgroundColor = "#1f2937"; 
      body.style.color = "#fff"; 
    } else {
      root.classList.remove("dark");
      body.style.backgroundColor = "#fff"; 
      body.style.color = "#000";
    }
  }, [theme]);

  return [setTheme, colorTheme, theme];
};

export default useDarkMode;
