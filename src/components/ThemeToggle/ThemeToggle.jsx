// src/components/ThemeToggle/ThemeToggle.jsx
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    //button to toggle theme
    <button
      onClick={toggleTheme}
      className="p-1! rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggleButton;
