"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export type ResearchItem = {
  title: string;
  subheading?: string;
  status?: string;
  conference: string;
  link?: string;
};

export function Research({ studies }: { studies: ResearchItem[] }) {
  return (
    <section id="research" className="relative mt-32 space-y-16 scroll-mt-24">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Research & Publications
        </h2>
        <div className="mx-auto h-1.5 w-12 rounded-full bg-slate-900" />
      </div>

      <div className="flex flex-col space-y-8">
        {studies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col items-start gap-8 overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-10 md:flex-row md:gap-12"
          >
            {/* Left side: Numbering and Status */}
            <div className="flex w-full shrink-0 items-center justify-between md:w-32 md:flex-col md:items-start md:gap-4 md:justify-start">
              <span className="text-6xl font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-blue-100 md:text-7xl">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              
              {study.status && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  </span>
                  {study.status}
                </span>
              )}
            </div>
            
            {/* Right side: Content */}
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex flex-col gap-1.5">
                {study.link ? (
                  <a href={study.link} target="_blank" rel="noopener noreferrer" className="block w-fit">
                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors hover:text-blue-600 group-hover:text-blue-950 sm:text-3xl text-balance">
                      {study.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-blue-950 sm:text-3xl text-balance">
                    {study.title}
                  </h3>
                )}
                {study.subheading && (
                  <h4 className="text-xl font-semibold tracking-tight text-slate-700 sm:text-2xl">
                    {study.subheading}
                  </h4>
                )}
              </div>
              
              <div className="mt-1 sm:mt-1.5">
                <p className="text-lg leading-relaxed text-slate-400 italic">
                  {study.conference}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
