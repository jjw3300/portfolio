import React from "react";
import { ShieldCheck, Zap, Clock, Sun } from "lucide-react";

const PhilosophySection: React.FC = () => {
  return (
    <div className="w-full md:w-[35vw] h-auto md:h-[70vh] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
      <div className="z-10 space-y-6 md:space-y-8">
        <h3 className="text-xl md:text-3xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
          Philosophy
        </h3>
        <div className="space-y-4 md:space-y-6">
          {/* Item 1 */}
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
              <ShieldCheck
                size={24}
                className="text-zinc-700 dark:text-zinc-300"
              />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Test Typing
              </h4>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                추가예정
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
              <Zap size={24} className="text-zinc-700 dark:text-zinc-300" />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Test Code
              </h4>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                추가 예정
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
              <Clock size={24} className="text-zinc-700 dark:text-zinc-300" />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Time Management
              </h4>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                추가 예정
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow-sm shrink-0 border border-zinc-100 dark:border-zinc-700">
              <Sun size={24} className="text-zinc-700 dark:text-zinc-300" />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Positive Thinking
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

export default PhilosophySection;
