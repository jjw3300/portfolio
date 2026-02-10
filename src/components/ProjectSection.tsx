import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  features: { title: string; details: string[] }[];
  techStack: string[];
  image: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  subtitle,
  period,
  description,
  features,
  techStack,
  image,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] p-8 md:p-14 shadow-sm flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-blue-500 font-bold tracking-tighter text-sm uppercase mb-2">
              {period}
            </p>
            <h3 className="text-4xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">
              {title}
            </h3>
            <p className="text-xl md:text-2xl font-semibold text-zinc-500 dark:text-zinc-400 mt-4 leading-snug">
              {subtitle}
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl text-zinc-900 dark:text-white font-bold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shrink-0"
          >
            View Live <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Details */}
          <div className="space-y-10">
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              {description}
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="flex items-center gap-3 text-xl font-bold text-zinc-900 dark:text-white">
                    <CheckCircle2
                      size={22}
                      className="text-blue-500 shrink-0"
                    />
                    {feature.title}
                  </h4>
                  <ul className="pl-8 space-y-3 border-l-2 border-zinc-100 dark:border-zinc-800">
                    {feature.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization / Stack */}
          <div className="flex flex-col gap-8">
            <div className="rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800 aspect-video relative group">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-800/40 rounded-[2.5rem] p-8 md:p-10 border border-zinc-100 dark:border-zinc-800">
              <h5 className="text-xs uppercase font-black text-zinc-400 dark:text-zinc-500 tracking-[0.2em] mb-6">
                TECHNOLOGY STACK
              </h5>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm md:text-base font-bold text-zinc-700 dark:text-zinc-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
