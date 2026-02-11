import React from "react";
import { Star } from "lucide-react";
import {
  TECH_CATEGORIES,
  type TechItem,
  type TechCategory,
} from "../../constants";

interface StyleConfig {
  iconBox: string;
  title: string;
  star: string;
}

const COLOR_MAP: Record<string, StyleConfig> = {
  "text-amber-500": {
    iconBox:
      "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400",
    title: "text-amber-700 dark:text-amber-400",
    star: "text-amber-500",
  },
  "text-blue-500": {
    iconBox: "bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
    title: "text-blue-700 dark:text-blue-400",
    star: "text-blue-500",
  },
  "text-green-500": {
    iconBox:
      "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400",
    title: "text-green-700 dark:text-green-400",
    star: "text-green-500",
  },
  "text-red-500": {
    iconBox: "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400",
    title: "text-red-700 dark:text-red-400",
    star: "text-red-500",
  },
};

const StarRating: React.FC<{ rating: number; colorClass: string }> = ({
  rating,
  colorClass,
}) => {
  return (
    <div className="flex gap-0.5 shrink-0">
      {[1, 2, 3].map((star) => (
        <Star
          key={star}
          size={12}
          className={`${
            star <= rating
              ? `${colorClass} fill-current`
              : "text-zinc-200 dark:text-zinc-700"
          }`}
        />
      ))}
    </div>
  );
};

const TechItemRow: React.FC<{ item: TechItem; styles: StyleConfig }> = ({
  item,
  styles,
}) => {
  return (
    <div className="group/item flex flex-col justify-center gap-1 py-3 first:pt-0 border-b border-dashed border-zinc-200 dark:border-zinc-800 last:border-0 last:pb-0 shrink-0">
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm md:text-base text-zinc-800 dark:text-zinc-100 transition-colors group-hover/item:text-black dark:group-hover/item:text-white">
          {item.name}
        </span>
        <StarRating rating={item.rating} colorClass={styles.star} />
      </div>
      <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-snug break-keep opacity-90">
        {item.description}
      </p>
    </div>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <div className="w-full md:w-[95vw] xl:w-[75vw] h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 md:p-8 flex flex-col relative transition-all duration-300">
      <div className="shrink-0 mb-4 md:mb-6">
        <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3 tracking-tight">
          Tech Stack
        </h3>
      </div>

      <div className="flex-1 min-h-0 w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
          {TECH_CATEGORIES.map((category: TechCategory, idx) => {
            const styles =
              COLOR_MAP[category.color] || COLOR_MAP["text-amber-500"];

            return (
              <div
                key={idx}
                className="rounded-xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 h-full overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-1 shrink-0">
                  <div
                    className={`p-1.5 rounded-lg ${styles.iconBox} shrink-0`}
                  >
                    {category.icon && React.isValidElement(category.icon)
                      ? React.cloneElement(
                          category.icon as React.ReactElement<{
                            size: number | string;
                          }>,
                          { size: 16 },
                        )
                      : null}
                  </div>
                  <h4
                    className={`font-bold text-sm md:text-base uppercase tracking-wide ${styles.title} truncate`}
                  >
                    {category.title}
                  </h4>
                </div>

                {/* [수정]
                  1. flex-1: 남은 공간 차지
                  2. justify-start: 위에서부터 채움
                  3. overflow-hidden: 공간이 부족하면 아래쪽 아이템은 안 보임 (생략됨)
                */}
                <div className="flex flex-col flex-1 justify-start gap-1 overflow-hidden">
                  {category.items.map((item, itemIdx) => (
                    <TechItemRow key={itemIdx} item={item} styles={styles} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
