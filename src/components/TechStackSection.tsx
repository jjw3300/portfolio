import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layout, Code2, Database } from "lucide-react";

const TechStackSection: React.FC = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 size={24} className="text-amber-500" />,
      items: ["TypeScript (Strict Mode)", "JavaScript (ES6+)"],
    },
    {
      title: "Frontend",
      icon: <Layout size={24} className="text-blue-500" />,
      items: ["React", "Zustand", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend / BaaS",
      icon: <Database size={24} className="text-green-500" />,
      items: ["Firebase", "Firestore", "Authentication"],
    },
    {
      title: "Tools",
      icon: <Cpu size={24} className="text-purple-500" />,
      items: ["Git", "GitHub", "Figma", "CI/CD"],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-8 flex flex-col gap-6 shadow-sm group h-full"
          >
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700 transition-all duration-300">
              {cat.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-100 dark:border-zinc-700/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStackSection;
