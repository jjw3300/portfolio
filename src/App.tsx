import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import DarkModeToggle from "./components/ui/DarkModeToggle";
import ProjectCard from "./components/ui/ProjectCard";
import IntroSection from "./components/sections/IntroSection";
import TechStackSection from "./components/sections/TechStackSection";
import AwardsSection from "./components/sections/AwardsSection";

import { PROJECT_DATA } from "./constants";

const App: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-260%"]);

  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-[#fefefe] dark:bg-[#000000] min-h-screen font-sans flex flex-col transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-start justify-center pointer-events-none pt-8">
        <div className="pointer-events-auto">
          <DarkModeToggle
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        </div>
      </header>

      <div ref={targetRef} className="w-full relative h-auto md:h-[350vh]">
        <div className="relative md:sticky md:top-0 md:left-0 md:h-screen w-full md:overflow-hidden flex md:items-center">
          <motion.div
            style={{ x: isMobile ? 0 : smoothX }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-32 md:py-0 md:px-0 md:pl-[5vw] md:pr-[10vw] w-full"
          >
            <IntroSection />

            {PROJECT_DATA.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}

            <TechStackSection />

            <AwardsSection />
          </motion.div>
        </div>
      </div>

      <footer className="fixed bottom-8 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="text-center pointer-events-auto">
          <p className="text-md text-black dark:text-zinc-200 transition-colors duration-300">
            © 2026 Portfolio by <span className="text-zinc-400">@jjw3300</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
