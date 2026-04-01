import React from "react";
import { ArrowUpRight, CheckCircle2, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: string[];
  techStack: string[];
  video: string;
  link: string;
  award?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  period,
  description,
  features,
  techStack,
  video,
  link,
  award,
}) => {
  return (
    <div className="w-full md:w-225 h-auto md:h-130 shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-10 shadow-sm flex flex-col justify-center relative group overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 h-full">
        <div className="w-full md:w-1/2 h-48 md:h-full rounded-2xl overflow-hidden relative shadow-inner border border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shrink-0 flex items-center justify-center">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-105"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
              <div className="w-16 h-16 rounded-lg bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between py-2 z-10 min-w-0">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-bold text-blue-500">
                    {period}
                  </span>
                  {award && (
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-sm shrink-0 ${
                        award === "최우수상"
                          ? "bg-gradient-to-r from-amber-400 to-amber-500 dark:bg-[#41321A]"
                          : "bg-gradient-to-r from-gray-400 to-gray-500 dark:bg-[#3a3a3a]"
                      }`}
                    >
                      <Star
                        className={`w-3.5 h-3.5 fill-white text-white ${
                          award === "최우수상"
                            ? "dark:fill-amber-200 dark:text-amber-200"
                            : "dark:fill-gray-300 dark:text-gray-300"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold text-white ${
                          award === "최우수상"
                            ? "dark:text-amber-200"
                            : "dark:text-gray-300"
                        }`}
                      >
                        {award}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                  {title}
                </h3>
                <p className="text-sm md:text-base font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                  {subtitle}
                </p>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white shrink-0"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 break-keep line-clamp-3 md:line-clamp-none">
              {description}
            </p>
            <div className="space-y-2 mb-6 hidden md:block">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded-full shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-xl text-xs font-bold text-zinc-500 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
