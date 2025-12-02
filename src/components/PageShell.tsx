"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-8 sm:px-10 lg:px-0"
    >
      {children}
    </motion.main>
  );
}

