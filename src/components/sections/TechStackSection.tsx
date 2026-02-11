import React, { useState } from "react";
import { Star, ChevronRight } from "lucide-react";
import { TECH_CATEGORIES, type TechItem } from "../../constants";

const StarRating: React.FC<{ rating: number; color: string }> = ({
  rating,
  color,
}) => {
  return (
    <div className="flex gap-0.5 shrink-0">
      {[1, 2, 3].map((star) => (
        <Star
          key={star}
          size={14}
          className={`${
            star <= rating
              ? `${color} fill-current`
              : "text-zinc-200 dark:text-zinc-700"
          } transition-colors duration-300`}
        />
      ))}
    </div>
  );
};

const TechStackSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = TECH_CATEGORIES[activeIndex];

  return (
    <div className="w-full md:w-[70vw] h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
      {/* Sidebar / Top Menu */}
      <div className="w-full md:w-1/3 bg-zinc-50/50 dark:bg-zinc-900/50 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col shrink-0">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Tech Stack
          </h3>
        </div>

        {/* 수정된 부분: overflow-x-auto 제거, flex-wrap 추가 */}
        <div className="flex flex-wrap md:flex-col gap-2">
          {TECH_CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left md:w-full flex-1 md:flex-none min-w-[140px] ${
                activeIndex === i
                  ? "bg-white dark:bg-zinc-800 shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <div
                className={`p-2 rounded-lg transition-colors duration-300 shrink-0 ${
                  activeIndex === i
                    ? cat.color
                    : "bg-zinc-100 dark:bg-zinc-800 grayscale"
                }`}
              >
                {React.cloneElement(
                  cat.icon as React.ReactElement<{ size: number | string }>,
                  {
                    size: 18,
                  },
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className={`block font-bold truncate text-sm md:text-base ${
                    activeIndex === i
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {cat.title}
                </span>
              </div>
              <ChevronRight
                size={16}
                className={`hidden md:block transition-transform duration-300 shrink-0 ${
                  activeIndex === i
                    ? "text-zinc-900 dark:text-white translate-x-1"
                    : "text-zinc-300 dark:text-zinc-600 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-8 bg-white dark:bg-zinc-900 overflow-y-auto custom-scrollbar">
        <div className="max-w-2xl mx-auto h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 ${activeCategory.color.replace(
                "bg-",
                "text-",
              )}`}
            >
              {activeCategory.title}
            </span>
            <span className="text-zinc-400 text-sm">
              {activeCategory.items.length} skills
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {activeCategory.items.map((item: TechItem, j: number) => (
              <div
                key={j}
                className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-all duration-300 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800"
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="font-bold text-base md:text-lg text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {item.name}
                  </span>
                  <StarRating
                    rating={item.rating}
                    color={activeCategory.color.replace("text-", "fill-")}
                  />
                </div>

                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors break-keep">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
