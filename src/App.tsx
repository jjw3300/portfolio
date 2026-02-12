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
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [scrollRange, setScrollRange] = useState(0);

  // [수정 1] 렌더링 루프 에러 해결
  // 화면 크기 변경 감지 및 스크롤 범위 계산을 하나의 useEffect로 통합
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobileCheck = width < 768;
      setIsMobile(mobileCheck);

      // 모바일이 아닐 때만 가로 스크롤 범위 계산
      if (!mobileCheck && scrollRef.current) {
        const scrollableWidth = scrollRef.current.scrollWidth - width;
        setScrollRange(scrollableWidth > 0 ? scrollableWidth : 0);
      } else {
        setScrollRange(0);
      }
    };

    // 초기 실행
    handleResize();

    // 리사이즈 이벤트 등록
    window.addEventListener("resize", handleResize);

    // 약간의 딜레이를 두고 한 번 더 계산 (이미지/폰트 로딩 후 레이아웃 잡힐 때 대비)
    const timeoutId = setTimeout(handleResize, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // 모바일일 때는 스크롤 감지 범위가 의미 없으므로 기본값 사용
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  // 스크롤 부드러움 설정 (뚝뚝 끊김 방지용 설정 유지)
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
      <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-start justify-center pointer-events-none pt-8">
        <div className="pointer-events-auto">
          <DarkModeToggle
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        </div>
      </header>

      {/* [수정 2] 모바일 스크롤 고장 해결 
          - md:h-[400vh]: 데스크톱에서만 스크롤 트랙 높이 생성
          - 모바일(기본)에서는 h-auto로 자연스럽게 늘어남
      */}
      <div
        ref={targetRef}
        className={`w-full relative ${isMobile ? "h-auto" : "h-[400vh]"}`}
      >
        {/* [수정 3] Sticky 및 Overflow 제어
            - sticky, h-screen, overflow-hidden은 오직 데스크톱(md)에서만 적용
            - 모바일에서는 relative로 변경하여 일반적인 세로 스크롤 허용
        */}
        <div
          className={`${isMobile ? "relative w-full h-auto" : "sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center"}`}
        >
          <motion.div
            ref={scrollRef}
            // 모바일이면 transform(x이동)을 아예 0으로 고정
            style={{ x: isMobile ? 0 : smoothX }}
            // will-change-transform: 부드러운 애니메이션 최적화
            className={`
              w-full flex flex-col md:flex-row items-center 
              gap-4 md:gap-6 
              px-6 py-32 md:py-0 md:px-0 md:pl-[5vw] md:pr-[10vw] 
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
