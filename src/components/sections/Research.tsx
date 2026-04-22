"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiFileText, FiX, FiArrowRight } from "react-icons/fi";

export type ResearchItem = {
  title: string;
  status: string;
  summary: string;
};

export function Research({ studies }: { studies: ResearchItem[] }) {
  const [selectedStudy, setSelectedStudy] = useState<ResearchItem | null>(null);

  // Prevent background scrolling when the modal is active
  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedStudy]);

  return (
    <>
      <section id="research" className="relative mt-32 space-y-16 scroll-mt-24">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Research & Publications
          </h2>
          <div className="mx-auto h-1.5 w-12 rounded-full bg-slate-900" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedStudy(study)}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-10"
            >
              <div className="flex flex-col space-y-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                    <FiFileText className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    </span>
                    {study.status}
                  </span>
                </div>
                <h3 className="line-clamp-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-blue-950 sm:text-3xl text-balance">
                  {study.title}
                </h3>
              </div>
              
              <div className="mt-12 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors group-hover:text-slate-900">
                Explore Abstract 
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Glassmorphism Deep-Dive Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-white/95 shadow-2xl backdrop-blur-xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-200/50 bg-slate-50/50 p-6 sm:p-10">
                <div className="space-y-4 pr-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-600 sm:text-xs">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    </span>
                    {selectedStudy.status}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl text-balance">
                    {selectedStudy.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200/60 text-slate-500 transition-colors hover:bg-slate-300 hover:text-slate-900"
                  aria-label="Close modal"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="bg-white p-6 sm:p-10">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                    Research Abstract
                  </h4>
                  <p className="text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-loose text-pretty">
                    {selectedStudy.summary}
                  </p>
                </div>
                
                {/* PDF/Data Placeholder for Future Setup */}
                <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-8 text-center sm:flex-row sm:justify-start sm:gap-6 sm:p-8 sm:text-left transition-colors hover:bg-slate-50 cursor-not-allowed">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200/50 text-slate-400">
                    <FiFileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Technical Paper / PDF</p>
                    <p className="mt-1 text-sm text-slate-500 text-pretty">Pending publication or available upon private request. Check back later.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
