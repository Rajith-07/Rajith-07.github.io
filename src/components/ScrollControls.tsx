"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const scrollByViewport = (direction: "up" | "down") => {
  const delta = window.innerHeight * 0.8 * (direction === "up" ? -1 : 1);
  window.scrollBy({ top: delta, behavior: "smooth" });
};

export function ScrollControls() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? doc.scrollTop / maxScroll : 0;
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-6 md:flex">
      <motion.button
        aria-label="Scroll up"
        whileHover={{ y: -2, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollByViewport("up")}
        className="pointer-events-auto rounded-2xl border border-slate-300 bg-white/90 p-3 text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
      >
        <FiArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="pointer-events-none flex flex-col items-center">
        <div className="flex h-40 w-2 rounded-full border border-slate-200 bg-white shadow-inner">
          <motion.div
            className="w-full rounded-full bg-slate-900"
            style={{ originY: 1 }}
            animate={{ scaleY: progress }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <motion.button
        aria-label="Scroll down"
        whileHover={{ y: 2, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollByViewport("down")}
        className="pointer-events-auto rounded-2xl border border-slate-300 bg-white/90 p-3 text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-900"
      >
        <FiArrowDown className="h-5 w-5" />
      </motion.button>
    </div>
  );
}

