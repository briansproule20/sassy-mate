"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log("Current theme:", theme);
    toggleTheme();
    console.log("Theme toggled");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 h-10 w-10"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-cavs-wine dark:text-cavs-gold" />
      ) : (
        <Sun className="w-5 h-5 text-cavs-gold" />
      )}
    </button>
  );
}

