import  { useEffect, useState } from "react";

const useTheme = () => {
//   const [theme, setTheme] = useState("light");
const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const rootElement = window.document.documentElement;
    rootElement.classList.remove(colorTheme);
    rootElement.classList.add(theme);
    localStorage.setItem("theme", theme)
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useTheme;
