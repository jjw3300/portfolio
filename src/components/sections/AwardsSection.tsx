import React, { useState } from "react";
import { Trophy, Award, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import {
  AWARDS_DATA,
  CERTIFICATIONS_DATA,
  type AchievementItem,
} from "../../constants";

const ITEMS_PER_PAGE = 4;

const AchievementRow: React.FC<{ item: AchievementItem }> = ({ item }) => {
  const heightClass = "h-7";

  if (item.isEmpty) {
    return (
      <li
        className={`group w-full flex items-center px-2 rounded border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/30 ${heightClass}`}
      >
        <span className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-600 font-mono group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors">
          <Plus size={12} />
          <span>In preparation...</span>
        </span>
      </li>
    );
  }

  return (
    <li className={`flex items-center justify-between ${heightClass}`}>
      <span className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-medium truncate pr-2">
        {item.title}
      </span>
      {item.date && (
        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono shrink-0">
          {item.date}
        </span>
      )}
    </li>
  );
};

const SectionBlock: React.FC<{
  title: string;
  icon: React.ReactNode;
  items: AchievementItem[];
}> = ({ title, icon, items }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const currentItems = items.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

  return (
    <div className="flex gap-4 md:gap-6 h-full">
      <div className="p-3 h-fit bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
        {icon}
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex justify-between items-center mb-3 h-7 shrink-0">
          <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
            {title}
          </h4>

          {items.length > ITEMS_PER_PAGE && (
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-600 dark:text-zinc-400 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={page === totalPages - 1}
                className="p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-600 dark:text-zinc-400 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        <ul className="space-y-3 w-full">
          {currentItems.map((item) => (
            <AchievementRow key={item.id} item={item} />
          ))}
          {Array.from({ length: ITEMS_PER_PAGE - currentItems.length }).map(
            (_, i) => (
              <li key={`placeholder-${i}`} className="h-7" aria-hidden="true" />
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

const AwardsSection: React.FC = () => {
  return (
    <div className="w-full md:w-125 h-auto md:h-130 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col relative overflow-hidden transition-all duration-300">
      <div className="shrink-0 mb-3 md:mb-5">
        <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3 tracking-tight">
          Awards & Certifications
        </h3>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 min-h-0 flex flex-col justify-start">
          <SectionBlock
            title="Awards"
            icon={
              <Trophy size={18} className="text-zinc-700 dark:text-zinc-300" />
            }
            items={AWARDS_DATA}
          />
        </div>

        <div className="shrink-0 h-px bg-zinc-100 dark:bg-zinc-800 my-4" />

        <div className="flex-1 min-h-0 flex flex-col justify-start">
          <SectionBlock
            title="Certifications"
            icon={
              <Award size={18} className="text-zinc-700 dark:text-zinc-300" />
            }
            items={CERTIFICATIONS_DATA}
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
