import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Code2,
  Layout,
  Database,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sun,
  Moon,
  Image,
} from "lucide-react";

import githubLogo from "./assets/logo/github.svg";
import tistoryLogo from "./assets/logo/tistory.svg";
import figmaLogo from "./assets/logo/figma.svg";
import instagramLogo from "./assets/logo/instagram.svg";
import profileImg from "./assets/profile.jpg";

const LogoImages = {
  Github: githubLogo,
  Tistory: tistoryLogo,
  Figma: figmaLogo,
  Instagram: instagramLogo,
};

const DarkModeToggle: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
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

const StyledSocialCard: React.FC<{
  href: string;
  icon?: string | React.ReactNode;
  label: string;
  subLabel?: string;
  isGithub?: boolean;
  className?: string;
}> = ({ href, icon, label, subLabel, isGithub, className = "" }) => {
  const isImage = typeof icon === "string";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-4xl p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-sm group ${className}`}
    >
      {icon && (
        <div className="w-7 h-7 md:w-8 md:h-8 relative flex items-center justify-start origin-top-left transition-transform group-hover:scale-110 mb-4">
          {isImage ? (
            <img
              src={icon as string}
              alt={label}
              className={`w-full h-full object-contain ${
                isGithub ? "dark:invert" : ""
              }`}
            />
          ) : (
            <div className="text-zinc-900 dark:text-white">{icon}</div>
          )}
        </div>
      )}
      <div className={icon ? "mt-auto" : "flex items-center h-full"}>
        <div>
          <div className="text-sm md:text-base font-bold text-zinc-900 dark:text-white leading-tight truncate">
            {label}
          </div>
          {subLabel && (
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 truncate">
              {subLabel}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

const ProjectCard: React.FC<{
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
}> = ({ title, subtitle, period, description, features, techStack, image }) => {
  return (
    <div className="w-full md:w-[70vw] h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-center relative group overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 h-full">
        <div className="w-full md:w-1/2 h-48 md:h-full rounded-4xl overflow-hidden relative shadow-inner border border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between py-2 z-10 min-w-0">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-bold text-blue-500 mb-3">
                  {period}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight truncate">
                  {title}
                </h3>
                <p className="text-sm md:text-base font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                  {subtitle}
                </p>
              </div>
              <a
                href="#"
                className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white shrink-0"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 break-keep line-clamp-3 md:line-clamp-none">
              {description}
            </p>
            <div className="space-y-2 mb-6 hidden md:block">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-blue-50 dark:bg-blue-900/20 rounded-full shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-xl text-xs font-bold text-zinc-500 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-245%"]);
  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
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

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const techCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-4 h-4 text-amber-500" />,
      items: ["TypeScript", "JavaScript"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-4 h-4 text-blue-500" />,
      items: ["React", "Zustand", "Tailwind"],
    },
    {
      title: "Backend",
      icon: <Database className="w-4 h-4 text-green-500" />,
      items: ["Firebase", "Firestore"],
    },
    {
      title: "Design",
      icon: <Image className="w-4 h-4 text-red-500" />,
      items: ["Figma", "Framer"],
    },
  ];

  return (
    <div className="bg-fefefe dark:bg-000000 min-h-screen font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30 flex flex-col justify-between">
      <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-start justify-center pointer-events-none pt-8">
        <div className="pointer-events-auto">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>

      <div ref={targetRef} className="w-full relative h-auto md:h-[350vh]">
        <div className="relative md:sticky md:top-0 md:left-0 md:h-screen w-full md:overflow-hidden flex md:items-center">
          <motion.div
            style={{ x: isMobile ? 0 : smoothX }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-12 px-6 py-32 md:py-0 md:px-0 md:pl-[5vw] md:pr-[10vw] w-full"
          >
            <div className="w-full md:w-[90vw] h-auto md:h-[70vh] shrink-0 flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6">
              <div className="w-full md:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between shadow-sm relative overflow-hidden h-112.5 md:h-full">
                <div className="z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-100 dark:border-zinc-800 shrink-0 shadow-inner">
                      <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                        장진욱
                      </h2>
                      <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-green-600 dark:text-green-400 mt-1.5 bg-green-100 dark:bg-green-900/30 px-3 py-1.5 rounded-full w-fit">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600"></span>
                        </span>
                        <span>Available for work</span>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-4xl lg:text-4xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-6 break-keep">
                    사용자 경험을
                    <br />
                    <span className="text-blue-500">최우선으로 생각하는</span>
                    <br />
                    개발자입니다.
                  </h1>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl leading-relaxed break-keep">
                    TypeScript의 엄격함과 Framer Motion의 생동감을 결합하여
                    안정적이고 몰입감 있는 웹 경험을 설계합니다.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs font-bold text-zinc-400 dark:text-zinc-500 mt-auto uppercase tracking-widest z-10">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Daegu, South Korea</span>
                  </div>
                  <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>UTC+9</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:h-full md:col-span-5 flex flex-col gap-4 md:gap-4 shrink-0 h-auto">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
                  <StyledSocialCard
                    href="https://jjw3300.tistory.com/"
                    icon={LogoImages.Tistory}
                    label="@jjw3300"
                    subLabel="Tech Blog"
                    className="row-span-2 h-full"
                  />
                  <StyledSocialCard
                    href="https://github.com/jjw3300"
                    icon={LogoImages.Github}
                    label="@jjw3300"
                    isGithub={true}
                    className="h-full"
                  />
                  <StyledSocialCard
                    href="https://www.figma.com/@jjw3300"
                    icon={LogoImages.Figma}
                    label="@jjw3300"
                    className="h-full"
                  />
                </div>

                <a
                  href="mailto:jjw011232@gmail.com"
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-4xl p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] shadow-sm group shrink-0"
                >
                  <div className="text-zinc-900 dark:text-white">
                    <Mail size={24} />
                  </div>
                  <div className="text-base md:text-lg font-bold text-zinc-900 dark:text-white truncate">
                    jjw011232@gmail.com
                  </div>
                </a>

                <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
                  <StyledSocialCard
                    href="https://www.instagram.com/ssafy_jinuk/"
                    icon={LogoImages.Instagram}
                    label="@ssafy_jinuk"
                    subLabel="Marketing Archive"
                    className="row-span-2 h-full"
                  />
                  <StyledSocialCard
                    href="#"
                    label="Etc."
                    className="row-span-2 h-full"
                  />
                </div>
              </div>
            </div>

            <ProjectCard
              title="PORTMATCH"
              subtitle="포트폴리오 기반 매칭 플랫폼"
              period="2026.01"
              description="구직자와 기업을 포트폴리오로 연결하며, 면접부터 취업까지 해결하는 플랫폼입니다. 실시간 데이터 동기화를 통해 채용 프로세스 과정을 간편화 했습니다."
              features={[
                "Firestore onSnapshot 기반 실시간 일정 동기화",
                "240개 파티클 모핑 애니메이션 인트로",
              ]}
              techStack={["React", "TS", "Zustand", "Firebase"]}
              image="https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800"
            />

            <ProjectCard
              title="Giterra"
              subtitle="GitHub 데이터 3D 시각화"
              period="2026.02"
              description="GitHub 활동 데이터를 우주 속 행성 컨셉으로 재해석한 몰입형 프로파일러입니다. 텍스트 데이터를 3D 인터랙션으로 변환하여 시각적 즐거움을 제공합니다."
              features={[
                "CSS3D Perspective 활용 원통형 드래그 UI",
                "스캔라인 및 네온 글로우 효과 시스템 구축",
              ]}
              techStack={["React", "TS", "Tailwind", "Framer Motion"]}
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            />

            <div className="w-full md:w-[35vw] h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center">
              <h3 className="text-xl md:text-3xl font-black text-zinc-900 dark:text-white mb-6 md:mb-8 shrink-0">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-full">
                {techCategories.map((cat, i) => (
                  <div
                    key={i}
                    className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex flex-col justify-center transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      {cat.icon}
                      <span className="font-bold text-sm md:text-base text-zinc-900 dark:text-white">
                        {cat.title}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {cat.items.map((item, j) => (
                        <span
                          key={j}
                          className="text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 bg-white dark:bg-zinc-700 rounded-lg border border-zinc-200 dark:border-zinc-600 text-zinc-500 dark:text-zinc-300 whitespace-nowrap"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[35vw] h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="z-10 space-y-6 md:space-y-8">
                <h3 className="text-xl md:text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
                  Philosophy
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
                      <ShieldCheck
                        size={24}
                        className="text-zinc-700 dark:text-zinc-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                        Test Typing
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                        추가예정
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
                      <Zap
                        size={24}
                        className="text-zinc-700 dark:text-zinc-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                        Test Code
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                        추가 예정
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
                      <Clock
                        size={24}
                        className="text-zinc-700 dark:text-zinc-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                        Test Code
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                        추가 예정
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
                      <Sun
                        size={24}
                        className="text-zinc-700 dark:text-zinc-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                        Test Code
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                        추가 예정
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="relative md:fixed bottom-0 left-0 right-0 z-50 h-24 md:h-24 flex items-center justify-center bg-zinc-50 dark:bg-black pointer-events-none mt-10 md:mt-0">
        <div className="text-center pointer-events-auto">
          <p className="text-md text-zinc-400 mt-2">© 2026 site by @jjw3300</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
