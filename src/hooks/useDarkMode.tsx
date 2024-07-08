import { useEffect, useState } from "react"




const useDarkMode = () => {

  const [theme, setTheme] = useState<string>("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {

    const root: HTMLElement = window.document.documentElement;

    root.classList.add(theme)
    root.classList.remove(colorTheme)

  }, [setTheme, colorTheme]);

  return (
    <div>useDarkMode</div>
  )
}

export default useDarkMode