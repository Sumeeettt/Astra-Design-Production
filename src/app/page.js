"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const workspaces = [
  {
    title: "Projects",
    detail: "Track clients, locations, and project status.",
    href: "/projects",
    accent: "border-rose-400",
    darkSurface: "dark:border-rose-300/35 dark:bg-[#2b1b28]/90 dark:hover:border-rose-200 dark:hover:shadow-[0_18px_40px_rgba(244,63,94,0.2)]",
    number: "01",
  },
  {
    title: "AI Studio",
    detail: "Explore an event concept from a creative brief.",
    href: "/ai-studio",
    accent: "border-amber-400",
    darkSurface: "dark:border-amber-300/35 dark:bg-[#302719]/90 dark:hover:border-amber-200 dark:hover:shadow-[0_18px_40px_rgba(251,191,36,0.18)]",
    number: "02",
  },
  {
    title: "Design Studio",
    detail: "Review design concepts and create a new brief.",
    href: "/design-studio",
    accent: "border-emerald-500",
    darkSurface: "dark:border-emerald-300/35 dark:bg-[#1b3029]/90 dark:hover:border-emerald-200 dark:hover:shadow-[0_18px_40px_rgba(52,211,153,0.18)]",
    number: "03",
  },
  {
    title: "Production",
    detail: "Check materials, print details, and installations.",
    href: "/production",
    accent: "border-sky-500",
    darkSurface: "dark:border-sky-300/35 dark:bg-[#1b293a]/90 dark:hover:border-sky-200 dark:hover:shadow-[0_18px_40px_rgba(56,189,248,0.18)]",
    number: "04",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="border-b border-[#f0d7d1] pb-6 dark:border-[#1d304d]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b02d45] dark:text-[#ffafc1]">ASTRA workspace</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-[#1f2937] dark:text-[#edf2ff]">Make the next moment memorable.</h1>
        <p className="mt-3 max-w-2xl text-[#5a6475] dark:text-[#dfe7f5]">Your event projects, concepts, designs, and production details in one place.</p>
      </header>

      <section aria-label="Workspace sections" className="grid gap-4 sm:grid-cols-2">
        {workspaces.map((workspace) => (
          <motion.div
            key={workspace.href}
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
          >
            <Link
              href={workspace.href}
              className={`group flex min-h-40 flex-col justify-between rounded-xl border border-white border-l-4 ${workspace.accent} bg-white/85 p-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] transition-all duration-300 hover:bg-white hover:shadow-[0_18px_32px_rgba(15,23,42,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${workspace.darkSurface}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-[#1f2937] transition-colors group-hover:text-[#a32038] dark:text-[#edf2ff] dark:group-hover:text-[#ffc9d8]">{workspace.title}</h2>
                  <p className="mt-2 max-w-sm text-sm leading-5 text-[#5a6475] dark:text-[#dfe7f5]">{workspace.detail}</p>
                </div>
                <span className="font-serif text-sm text-[#7d8596] dark:text-[#bac4d6]">{workspace.number}</span>
              </div>
              <span className="mt-5 text-sm font-semibold text-[#b02d45] transition-transform group-hover:translate-x-1 dark:text-[#ffafc1]">Open workspace →</span>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
