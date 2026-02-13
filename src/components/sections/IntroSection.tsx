import React from "react";
import { MapPin, Clock } from "lucide-react";
import SocialCard from "../ui/SocialCard";

import githubLogo from "../../assets/logo/github.svg";
import tistoryLogo from "../../assets/logo/tistory.svg";
import figmaLogo from "../../assets/logo/figma.svg";
import instagramLogo from "../../assets/logo/instagram.svg";
import gmailLogo from "../../assets/logo/gmail.svg";
import profileImg from "../../assets/profile.png";
import solvedLogo from "../../assets/logo/solved.svg";
import artstationLogo from "../../assets/logo/artstation.svg";

const LogoImages = {
  Github: githubLogo,
  Tistory: tistoryLogo,
  Figma: figmaLogo,
  Instagram: instagramLogo,
  SolvedAc: solvedLogo,
  ArtStation: artstationLogo,
  Gmail: gmailLogo,
};

const IntroSection: React.FC = () => {
  return (
    <div className="w-full md:w-275 h-auto md:h-130 shrink-0 flex flex-col md:grid md:grid-cols-[7.5fr_4.5fr] gap-4 md:gap-6">
      <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden h-112.5 md:h-full">
        <div className="z-10 relative">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100 dark:border-zinc-800 shrink-0 shadow-inner">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl md:text-xl font-bold text-zinc-900 dark:text-white leading-tight">
                장진욱
              </h2>

              <div className="flex items-center gap-3 text-lg md:text-xl font-semibold text-zinc-600 dark:text-zinc-300 mt-2 w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Available for Work</span>
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
            사용자의 시선에서 문제를 바라보고, 가장 직관적이고 편안한 UI/UX
            흐름을 설계합니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs font-bold text-zinc-400 dark:text-zinc-500 mt-auto uppercase tracking-widest z-10 relative">
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

      <div className="w-full md:h-full grid grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-3 shrink-0 h-auto">
        <div className="grid grid-cols-[7fr_5fr] gap-3 h-full">
          <SocialCard
            href="https://jjw3300.tistory.com/"
            icon={LogoImages.Tistory}
            label="@jjw3300"
            subLabel="Tech Blog"
            className="h-full"
          />
          <div className="flex flex-col gap-3 h-full">
            <SocialCard
              href="https://github.com/jjw3300"
              icon={LogoImages.Github}
              label="@jjw3300"
              isGithub={true}
              className="flex-1"
            />
            <SocialCard
              href="https://solved.ac/profile/jjw3300"
              icon={LogoImages.SolvedAc}
              label="@jjw3300"
              className="flex-1"
            />
          </div>
        </div>

        <a
          href="mailto:jjw011232@gmail.com"
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-4xl p-4 flex items-center gap-3 transition-colors duration-200 hover:scale-[1.02] shadow-sm group relative z-10"
        >
          <div className="w-5 h-5 shrink-0">
            <img
              src={LogoImages.Gmail}
              alt="Gmail"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-base md:text-lg font-bold text-zinc-900 dark:text-white truncate">
            jjw011232@gmail.com
          </div>
        </a>

        <div className="grid grid-cols-[5fr_7fr] gap-3 h-full">
          <div className="flex flex-col gap-3 h-full">
            <SocialCard
              href="https://www.figma.com/@jjw3300"
              icon={LogoImages.Figma}
              label="@jjw3300"
              className="flex-1"
            />
            <SocialCard
              href="https://www.artstation.com/jjw3300"
              icon={LogoImages.ArtStation}
              label="@jjw3300"
              className="flex-1"
            />
          </div>
          <SocialCard
            href="https://www.instagram.com/ssafy_jinuk/"
            icon={LogoImages.Instagram}
            label="@ssafy_jinuk"
            subLabel="Marketing Archive"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
