import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`relative w-16 h-9 rounded-lg p-1 transition-colors duration-300 focus:outline-none shadow-sm overflow-hidden ${
        darkMode ? "bg-zinc-800" : "bg-zinc-100"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        className="w-7 h-7 bg-white dark:bg-zinc-600 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center relative z-10"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          marginLeft: darkMode ? "auto" : "0",
        }}
      >
        {darkMode ? (
          <Moon size={16} className="text-zinc-200" />
        ) : (
          <Sun size={16} className="text-zinc-500" />
        )}
      </motion.div>
    </button>
  );
};

export default DarkModeToggle;
