import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLOR_MAP, type TechCategory } from "../../constants";
import TechItemRow from "./TechItemRow";

const CategoryCard: React.FC<{ category: TechCategory }> = ({ category }) => {
  const [page, setPage] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const ITEMS_PER_PAGE = 4;
  const styles = COLOR_MAP[category.color] || COLOR_MAP["text-amber-500"];
  const totalPages = Math.ceil(category.items.length / ITEMS_PER_PAGE);

  const handlePageChange = (direction: "prev" | "next") => {
    setPage((p) =>
      direction === "prev"
        ? Math.max(0, p - 1)
        : Math.min(totalPages - 1, p + 1),
    );
    setExpandedIndex(null);
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
            {React.isValidElement(category.icon) &&
              React.cloneElement(
                category.icon as React.ReactElement<{ size: number }>,
                {
                  size: 14,
                },
              )}
          </div>
          <h4
            className={`font-bold text-sm md:text-sm uppercase tracking-wide ${styles.title} truncate`}
          >
            {category.title}
          </h4>
        </div>

        {category.items.length > ITEMS_PER_PAGE && (
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={page === 0}
              className="p-0.5 disabled:opacity-30 text-zinc-500 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => handlePageChange("next")}
              disabled={page === totalPages - 1}
              className="p-0.5 disabled:opacity-30 text-zinc-500 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 border-y border-dashed border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {currentItems.map((item, idx) => (
          <TechItemRow
            key={`${page}-${idx}`}
            item={item}
            styles={styles}
            isExpanded={expandedIndex === idx}
            hasActiveExpansion={expandedIndex !== null}
            onToggle={() =>
              setExpandedIndex(expandedIndex === idx ? null : idx)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
