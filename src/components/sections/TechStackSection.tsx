import type { FC } from "react";
import { TECH_CATEGORIES } from "../../constants";
import CategoryCard from "../TechStack/CategoryCard";
import RatingGuide from "../TechStack/RatingGuide";

const TechStackSection: FC = () => {
  return (
    <section className="w-full md:w-275 h-auto md:h-130 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 md:p-6 flex flex-col relative transition-all duration-300">
      <div className="shrink-0 mb-3 md:mb-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Tech Stack
          </h3>
          <RatingGuide />
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 h-full">
          {TECH_CATEGORIES.map((category, idx) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
