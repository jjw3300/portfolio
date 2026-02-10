import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Heart } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck size={32} className="text-green-500" />,
      title: "Strict Typing",
      content:
        "any 타입 사용을 엄격히 지양합니다. 컴파일 단계에서 잠재적 오류를 제어하고, 협업 시 코드의 예측 가능성과 안정성을 높이는 것을 최우선 과제로 삼습니다.",
    },
    {
      icon: <Zap size={32} className="text-amber-500" />,
      title: "Code as Documentation",
      content:
        "주석에 의존하기보다 명확한 변수명, 함수의 단일 책임 원칙 준수를 통해 코드 그 자체로 비즈니스 로직이 읽히도록 설계합니다.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] p-8 md:p-16 flex flex-col gap-16 relative overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {values.map((v, i) => (
            <div key={i} className="space-y-6">
              <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-800 rounded-3xl flex items-center justify-center shadow-inner group transition-all duration-300">
                {v.icon}
              </div>
              <h4 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                {v.title}
              </h4>
              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed break-keep">
                {v.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-12 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-3 tracking-tighter flex items-center justify-center md:justify-start gap-3 break-keep">
              함께 멋진 미래를 그려볼까요?{" "}
              <Heart
                size={28}
                className="text-red-500 fill-red-500 animate-pulse"
              />
            </h3>
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium break-keep">
              새로운 도전과 협업의 기회를 기다리고 있습니다.
            </p>
          </div>
          <a
            href="mailto:example@email.com"
            className="w-full md:w-auto px-10 py-5 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-3xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/20 text-center"
          >
            Let's Collaborate
          </a>
        </div>

        <div className="absolute -bottom-12 -right-12 text-[8rem] md:text-[14rem] font-black text-zinc-50 dark:text-zinc-800/10 select-none pointer-events-none whitespace-nowrap -rotate-6 tracking-tighter uppercase">
          Philosophy
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
