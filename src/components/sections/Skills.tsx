"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { ComponentType } from "react";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaDatabase } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";

export type SkillCategory = {
  category: string;
  items: string[];
};

const iconMapping: Record<string, ComponentType<{ className?: string; style?: any }>> = {
  Python: SiPython,
  C: SiC,
  "C++": SiCplusplus,
  Java: FaJava,
  JavaScript: SiJavascript,
  SQL: FaDatabase,
  HTML: SiHtml5,
  CSS: SiCss3,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  "scikit-learn": SiScikitlearn,
  OpenCV: SiOpencv,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  "GitHub Actions": SiGithubactions,
  "CI/CD": FiCpu,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  "VS Code": VscVscode,
};

const colorMap: Record<string, string> = {
  Python: "#3776AB",
  C: "#A8B9CC",
  "C++": "#00599C",
  Java: "#007396",
  JavaScript: "#F7DF1E",
  SQL: "#4479A1",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Tailwind: "#06B6D4",
  Bootstrap: "#7952B3",
  React: "#61DAFB",
  "Next.js": "#000000",
  "Node.js": "#339933",
  "Express.js": "#000000",
  MySQL: "#4479A1",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  TensorFlow: "#FF6F00",
  PyTorch: "#EE4C2C",
  "scikit-learn": "#F7931E",
  OpenCV: "#5C3EE8",
  Pandas: "#150458",
  NumPy: "#013243",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Jenkins: "#D24939",
  "GitHub Actions": "#2088FF",
  "CI/CD": "#64748b",
  Git: "#F05032",
  GitHub: "#181717",
  GitLab: "#FCA121",
  "VS Code": "#007ACC",
};

const MarqueeRow = ({
  items,
  reverse = false,
  speed = 30,
  onClick,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
  onClick: () => void;
}) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div 
      className="group flex cursor-pointer overflow-hidden transition-all hover:bg-black/5"
      onClick={onClick}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        className="flex w-max items-center gap-4 py-4 sm:gap-6 sm:py-5"
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = iconMapping[item] || FiCpu;
          return (
            <div
              key={`${item}-${idx}`}
              className="flex shrink-0 items-center justify-center gap-3 rounded-full border border-slate-200/60 bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-slate-300 hover:shadow-md"
            >
              <Icon className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-slate-900" />
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-slate-900">
                {item}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export function Skills({ categories }: { categories: SkillCategory[] }) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

  const speeds = [120, 105, 135];

  return (
    <>
      <section id="skills" className="relative mt-24 space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tech Arsenal
          </h2>
          <div className="mx-auto h-1 w-12 rounded-full bg-slate-900" />
        </div>

        <div className="relative flex flex-col gap-2 overflow-hidden py-4 rounded-3xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F2F0E6] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F2F0E6] to-transparent sm:w-32" />

          {categories.map((category, index) => (
            <MarqueeRow 
              key={category.category}
              items={category.items} 
              speed={speeds[index % speeds.length]} 
              reverse={index % 2 !== 0} 
              onClick={() => setSelectedCategory(category)} 
            />
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-4 backdrop-blur-md"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  {selectedCategory.category}
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                {selectedCategory.items.map((item) => {
                  const Icon = iconMapping[item] || FiCpu;
                  const color = colorMap[item] || "#64748b";
                  return (
                    <div
                      key={item}
                      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-200 hover:shadow-md"
                    >
                      <Icon
                        className="h-8 w-8 transition-transform group-hover:scale-110"
                        style={{ color }}
                      />
                      <span className="text-center text-[10px] font-bold uppercase tracking-wider text-slate-600 sm:text-xs">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
