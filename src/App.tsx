import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import DarkModeToggle from "./components/ui/DarkModeToggle";
import ProjectCard from "./components/ui/ProjectCard";
import ScrollOnboarding from "./components/ui/ScrollOnboarding";
import IntroSection from "./components/sections/IntroSection";
import TechStackSection from "./components/sections/TechStackSection";
import AwardsSection from "./components/sections/AwardsSection";

import { PROJECT_DATA } from "./constants";

const App: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobileCheck = width < 768;
      setIsMobile(mobileCheck);

      if (!mobileCheck && scrollRef.current) {
        const scrollableWidth = scrollRef.current.scrollWidth - width;
        setScrollRange(scrollableWidth > 0 ? scrollableWidth : 0);
      } else {
        setScrollRange(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    const timeoutId = setTimeout(handleResize, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  const smoothX = useSpring(x, {
    stiffness: 400,
    damping: 90,
    mass: 1,
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
      <ScrollOnboarding />

      <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-start justify-center pointer-events-none pt-8">
        <div className="pointer-events-auto">
          <DarkModeToggle
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        </div>
      </header>

      <div
        ref={targetRef}
        className={`w-full relative ${isMobile ? "h-auto" : "h-[400vh] min-h-162.5"}`}
      >
        <div
          className={`${isMobile ? "relative w-full h-auto" : "sticky top-0 left-0 w-full h-screen min-h-162.5 overflow-hidden flex items-center"}`}
        >
          <motion.div
            ref={scrollRef}
            style={{ x: isMobile ? 0 : smoothX }}
            className={`
              w-full flex flex-col md:flex-row items-center 
              gap-4 md:gap-6 
              px-6 
              pt-24 pb-8 md:py-0 
              md:px-0 md:pl-[5vw] md:pr-[10vw] 
              md:w-max md:h-full 
              will-change-transform
            `}
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

      <footer
        className={`${
          isMobile
            ? "relative w-full py-8"
            : "fixed bottom-8 left-0 right-0 z-50"
        } flex items-center justify-center pointer-events-none`}
      >
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
