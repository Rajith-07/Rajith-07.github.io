"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let currentSection = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if the section is currently near the top of viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-6 z-50 mx-auto w-fit max-w-[90vw] overflow-hidden rounded-full border border-slate-200/60 px-6 py-3 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-lg backdrop-blur-md"
          : "bg-white/40 shadow-sm backdrop-blur-sm"
      }`}
    >
      <ul className="flex items-center justify-between gap-4 overflow-x-auto text-sm font-semibold sm:gap-6 sm:text-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <li key={link.name} className="shrink-0">
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-1 py-1 transition-colors duration-200 ${
                  isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
