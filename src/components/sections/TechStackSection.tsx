import React, { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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
          size={11}
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

const TechItemRow: React.FC<{
  item: TechItem;
  styles: StyleConfig;
  isExpanded: boolean;
  hasActiveExpansion: boolean;
  onToggle: () => void;
}> = ({ item, styles, isExpanded, hasActiveExpansion, onToggle }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isExpanded && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isExpanded]);

  const containerHeight = isExpanded
    ? "h-[220px]"
    : hasActiveExpansion
      ? "h-[40px]"
      : "h-[85px]";

  const contentOpacity = isExpanded
    ? "opacity-100 delay-100"
    : hasActiveExpansion
      ? "opacity-0"
      : "opacity-100";

  return (
    <div
      onClick={onToggle}
      className={`group/item flex flex-col w-full border-b border-dashed border-zinc-200 dark:border-zinc-800 last:border-b-0 cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${containerHeight}`}
    >
      <div className="p-2.5 h-full flex flex-col">
        <div className="flex justify-between items-center shrink-0 mb-1.5 h-5 gap-2">
          <span
            className={`font-bold text-[13px] md:text-sm transition-colors duration-300 truncate flex-1 ${
              hasActiveExpansion && !isExpanded
                ? "text-zinc-400 dark:text-zinc-600"
                : "text-zinc-800 dark:text-zinc-100 group-hover/item:text-black dark:group-hover/item:text-white"
            }`}
          >
            {item.name}
          </span>
          <div
            className={`transition-opacity duration-300 shrink-0 ${
              hasActiveExpansion && !isExpanded ? "opacity-0" : "opacity-100"
            }`}
          >
            <StarRating rating={item.rating} colorClass={styles.star} />
          </div>
        </div>

        <div
          className={`flex-1 overflow-hidden transition-opacity duration-300 ${contentOpacity}`}
        >
          <div
            ref={scrollRef}
            className={`h-full ${
              isExpanded
                ? "overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700"
                : "overflow-hidden"
            }`}
          >
            <p
              className={`text-[11px] md:text-[13px] text-zinc-500 dark:text-zinc-400 leading-snug break-keep ${!isExpanded && "line-clamp-2"}`}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard: React.FC<{ category: TechCategory }> = ({ category }) => {
  const [page, setPage] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const ITEMS_PER_PAGE = 4;

  const styles = COLOR_MAP[category.color] || COLOR_MAP["text-amber-500"];
  const totalPages = Math.ceil(category.items.length / ITEMS_PER_PAGE);

  const handlePrev = () => {
    setPage((p) => Math.max(0, p - 1));
    setExpandedIndex(null);
  };
  const handleNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
    setExpandedIndex(null);
  };

  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const currentItems = category.items.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

  return (
    <div className="rounded-xl p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-2.5 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 h-full overflow-hidden">
      <div className="flex items-center justify-between mb-0.5 shrink-0 h-6">
        <div className="flex items-center gap-2 overflow-hidden flex-1">
          <div className={`p-1.5 rounded-lg ${styles.iconBox} shrink-0`}>
            {category.icon && React.isValidElement(category.icon)
              ? React.cloneElement(
                  category.icon as React.ReactElement<{
                    size: number | string;
                  }>,
                  { size: 14 },
                )
              : null}
          </div>
          <h4
            className={`font-bold text-xs md:text-sm uppercase tracking-wide ${styles.title} truncate`}
          >
            {category.title}
          </h4>
        </div>

        {category.items.length > ITEMS_PER_PAGE && (
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="p-0.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-500 dark:text-zinc-400 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className="p-0.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-500 dark:text-zinc-400 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 border-y border-dashed border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {currentItems.map((item, itemIdx) => (
          <TechItemRow
            key={`${page}-${itemIdx}`}
            item={item}
            styles={styles}
            isExpanded={expandedIndex === itemIdx}
            hasActiveExpansion={expandedIndex !== null}
            onToggle={() => handleToggle(itemIdx)}
          />
        ))}

        {currentItems.length < ITEMS_PER_PAGE &&
          Array.from({ length: ITEMS_PER_PAGE - currentItems.length }).map(
            (_, i) => <div key={`placeholder-${i}`} className="h-21.25" />,
          )}
      </div>
    </div>
  );
};

const TechStackSection: React.FC = () => {
  return (
    <div className="w-full md:w-275 h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col relative transition-all duration-300">
      <div className="shrink-0 mb-3 md:mb-5">
        <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3 tracking-tight">
          Tech Stack
        </h3>
      </div>

      <div className="flex-1 min-h-0 w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 h-full">
          {TECH_CATEGORIES.map((category: TechCategory, idx) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
