/**
 * ThemeContext - Global theme management
 * Handles light/dark mode toggle and direction (LTR/RTL)
 */
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Direction = "ltr" | "rtl";

interface ThemeContextType {
  theme: Theme;
  direction: Direction;
  toggleTheme: () => void;
  setDirection: (dir: Direction) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("ec-theme") as Theme) || "light";
    }
    return "light";
  });

  const [direction, setDirection] = useState<Direction>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("ec-dir") as Direction) || "ltr";
    }
    return "ltr";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("ec-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    localStorage.setItem("ec-dir", direction);
  }, [direction]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, direction, toggleTheme, setDirection }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
