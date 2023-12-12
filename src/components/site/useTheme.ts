import { useCallback, useEffect, useState } from "react";

export const useTheme = (storageKey = "vite-ui-theme") => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem(storageKey) === "dark" ||
      (!localStorage.getItem(storageKey) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem(storageKey, isDarkMode ? "dark" : "light");
  }, [isDarkMode, storageKey]);

  return {
    isDarkMode,
    toggleDarkMode,
  };
};
