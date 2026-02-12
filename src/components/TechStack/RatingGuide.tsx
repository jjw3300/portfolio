import { useState } from "react";
import type { FC } from "react";
import { Star, Info, X } from "lucide-react";

const RatingGuide: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const guides = [
    { stars: 3, desc: "원리 이해를 바탕으로 시스템 설계 및 최적화 가능" },
    { stars: 2, desc: "도구에 숙달되어 독립적인 기능 구현 및 문제 해결 가능" },
    { stars: 1, desc: "기초 개념 숙지 및 주어진 가이드에 따라 기능 활용 가능" },
  ];

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full transition-all duration-300 ${
          isOpen
            ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
        }`}
      >
        {isOpen ? <X size={13} /> : <Info size={13} />}
        <span className="text-[11px] font-bold uppercase tracking-wider">
          Rating Info
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 md:w-80 p-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="space-y-2.5">
            {guides.map((guide) => (
              <div key={guide.stars} className="flex gap-3 items-start">
                <div className="flex gap-0.5 mt-1 shrink-0">
                  {[1, 2, 3].map((s) => (
                    <Star
                      key={s}
                      size={9}
                      className={`${
                        s <= guide.stars
                          ? "text-zinc-900 dark:text-white fill-current"
                          : "text-zinc-200 dark:text-zinc-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[11.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed break-keep">
                  {guide.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingGuide;
