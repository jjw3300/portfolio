import { useRef, useEffect } from "react";
import type { TechItem, StyleConfig } from "../../constants";
import StarRating from "./StarRating";

interface TechItemRowProps {
  item: TechItem;
  styles: StyleConfig;
  isExpanded: boolean;
  hasActiveExpansion: boolean;
  onToggle: () => void;
}

const TechItemRow: React.FC<TechItemRowProps> = ({
  item,
  styles,
  isExpanded,
  hasActiveExpansion,
  onToggle,
}) => {
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
              className={`text-[12px] md:text-[13px] text-zinc-500 dark:text-zinc-400 leading-snug break-keep ${
                !isExpanded && "line-clamp-2"
              }`}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechItemRow;
