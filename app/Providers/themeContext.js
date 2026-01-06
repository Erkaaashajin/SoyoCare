"use client";

import { useContext, useState, createContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  return <ThemeContext.Provider value={{ theme, setTheme, isEnglish, setIsEnglish }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
;
