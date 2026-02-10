import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

// 1. 브랜드 아이콘을 위한 SVG 컴포넌트 정의 (티스토리, 깃허브, 피그마, 인스타그램)
const BrandIcons = {
  Github: ({ className }: { className?: string }) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Tistory: ({ className }: { className?: string }) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Tistory</title>
      <circle cx="12" cy="12" r="12" fill="#EB531F" className="dark:hidden" />
      <circle
        cx="12"
        cy="12"
        r="12"
        fill="#fff"
        className="hidden dark:block"
      />
      <path
        d="M8.5 7h7a1.5 1.5 0 1 1 0 3h-2v7a1.5 1.5 0 1 1-3 0v-7h-2a1.5 1.5 0 1 1 0-3z"
        fill="white"
        className="dark:fill-[#EB531F]"
      />
    </svg>
  ),
  Figma: ({ className }: { className?: string }) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12C6 15.3137 8.68629 18 12 18V12H6Z"
        fill="#0ACF83"
        className="group-hover:fill-[#0ACF83] fill-current transition-colors"
      />
      <path
        d="M12 6V12H18C19.6569 12 21 10.6569 21 9C21 7.34315 19.6569 6 18 6H12Z"
        fill="#1ABCFE"
        className="group-hover:fill-[#1ABCFE] fill-current transition-colors"
      />
      <path
        d="M6 6C6 2.68629 8.68629 0 12 0V6H6Z"
        fill="#F24E1E"
        className="group-hover:fill-[#F24E1E] fill-current transition-colors"
      />
      <path
        d="M12 0V6H18C21.3137 6 24 3.31371 24 0H12Z"
        fill="#FF7262"
        className="group-hover:fill-[#FF7262] fill-current transition-colors"
      />
      <path
        d="M6 12C6 8.68629 8.68629 6 12 6V12H6Z"
        fill="#A259FF"
        className="group-hover:fill-[#A259FF] fill-current transition-colors"
      />
    </svg>
  ),
  Instagram: ({ className }: { className?: string }) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
};

const IntroSection: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Seoul",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* ================= LEFT COLUMN (Profile) ================= */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden shadow-sm group">
          <div className="z-10">
            {/* Header: Profile Image & Status */}
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-inner">
                <img
                  src="https://picsum.photos/seed/profile/200/200"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  장진욱
                </h2>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white leading-[1.2] tracking-tight mb-8 break-keep">
              사용자 경험을 최우선으로 생각하는{" "}
              <br className="hidden md:block" />
              <span className="text-blue-500 dark:text-blue-400">
                프론트엔드 개발자
              </span>
              입니다.
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium max-w-2xl leading-relaxed break-keep">
              TypeScript의 엄격한 타입 시스템과 Framer Motion의 인터랙션을
              결합하여, 안정적이면서도 생동감 있는 웹 경험을 만듭니다.
            </p>
          </div>

          {/* Footer: Location & Time */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-12 z-10">
            <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/50 px-4 py-2 rounded-full w-fit">
              <MapPin size={16} className="text-zinc-900 dark:text-white" />
              <span>Gyeongsangbuk-do, South Korea</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/50 px-4 py-2 rounded-full w-fit">
              <Clock size={16} className="text-zinc-900 dark:text-white" />
              <span>{time} (KST)</span>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:scale-105 transition-transform duration-1000">
            <div className="w-full h-full rounded-full border-[3px] border-zinc-900 dark:border-white animate-[spin_60s_linear_infinite] border-dashed" />
            <div className="absolute inset-10 rounded-full border-[2px] border-zinc-900 dark:border-white animate-[spin_40s_linear_infinite_reverse] border-dotted" />
          </div>
        </div>

        {/* ================= RIGHT COLUMN (Links) ================= */}
        <div className="flex flex-col gap-4 h-full">
          {/* 1. Email Card (Generic Icon - Lucide) */}
          <a
            href="mailto:example@email.com"
            className="flex-none bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-xl min-h-[180px]"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl text-zinc-900 dark:text-white">
                <Mail size={24} />
              </div>
              <ArrowUpRight className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <div className="text-sm opacity-60 font-medium mb-1">
                Get in touch
              </div>
              <div className="text-xl md:text-2xl font-bold break-all">
                example@email.com
              </div>
            </div>
          </a>

          {/* 2. Grid for Brand Icons */}
          <div className="grid grid-cols-2 gap-4 flex-1 min-h-[300px]">
            <SocialCard
              href="https://github.com"
              icon={<BrandIcons.Github className="w-8 h-8" />}
              label="GitHub"
              subLabel="@username"
            />
            <SocialCard
              href="https://tistory.com"
              icon={<BrandIcons.Tistory className="w-8 h-8" />}
              label="Tistory"
              subLabel="Tech Log"
            />
            <SocialCard
              href="#"
              icon={<BrandIcons.Figma className="w-8 h-8" />}
              label="Figma"
              subLabel="@design"
            />
            <SocialCard
              href="#"
              icon={<BrandIcons.Instagram className="w-8 h-8" />}
              label="Instagram"
              subLabel="@daily"
              className="group-hover:text-pink-500 transition-colors"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Reusable Social Card Component
const SocialCard: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  subLabel: string;
  className?: string;
}> = ({
  href,
  icon,
  label,
  subLabel,
  className = "text-zinc-900 dark:text-white",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] p-6 flex flex-col justify-between aspect-square hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group shadow-sm hover:shadow-md"
  >
    <div
      className={`${className} transition-transform group-hover:scale-110 origin-left`}
    >
      {icon}
    </div>
    <div>
      <div className="font-bold text-lg text-zinc-900 dark:text-white">
        {label}
      </div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
        {subLabel}
      </div>
    </div>
  </a>
);

export default IntroSection;
