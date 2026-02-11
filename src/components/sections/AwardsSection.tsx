import React from "react";
import { Trophy, Award } from "lucide-react";

const AwardsSection: React.FC = () => {
  return (
    <div className="w-full md:w-125 h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
      <div className="z-10 space-y-6 md:space-y-8">
        <h3 className="text-xl md:text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
          Awards & Certifications
        </h3>
        <div className="space-y-4 md:space-y-6">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
              <Trophy size={24} className="text-zinc-700 dark:text-zinc-300" />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Awards
              </h4>
              <ul className="mt-1.5 space-y-1">
                <li className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  SSAFY 기자단 최우수상
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
              <Award size={24} className="text-zinc-700 dark:text-zinc-300" />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Certifications
              </h4>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                추가 예정
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
