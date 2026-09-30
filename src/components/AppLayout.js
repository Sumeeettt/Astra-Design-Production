"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Sidebar from "./Sidebar";

const pageBackgrounds = {
  "/": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2200&q=85",
  "/dashboard": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85",
  "/projects": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=85",
  "/ai-studio": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2200&q=85",
  "/design-studio": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2200&q=85",
  "/production": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=85",
};

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const showSidebar = sidebarOpen && !isLoginPage;
  const pageBackground = isLoginPage ? null : pageBackgrounds[pathname] ?? pageBackgrounds["/"];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`group relative isolate grid min-h-screen grid-cols-1 bg-gradient-to-br from-[#f5f1ec] via-[#f9f3eb] to-[#edf4eb] transition-colors duration-300 dark:from-[#071a2a] dark:via-[#0a1c30] dark:to-[#071b2c] ${
        showSidebar ? "md:grid-cols-[16rem_minmax(0,1fr)]" : "md:grid-cols-1"
      }`}
    >
      {pageBackground && (
        <>
          <Image
            src={pageBackground}
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 object-cover opacity-50 transition-transform duration-[1600ms] group-hover:scale-[1.02] dark:opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#f5f1ec]/65 via-[#f5f1ec]/50 to-[#edf4eb]/65 dark:from-[#071a2a]/65 dark:via-[#0a1c30]/55 dark:to-[#071b2c]/68"
          />
        </>
      )}

      {!isLoginPage && (
        <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full border border-[#e8d9d1] bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-[0_10px_25px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 dark:border-[#2b3f5f] dark:bg-[#0f213b]/95 dark:text-[#edf2ff] dark:hover:border-rose-300/60 dark:hover:bg-[#392430] dark:hover:text-rose-100"
          >
            Login
          </Link>
          {mounted && (
            <motion.button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color mode"
              title={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.08, rotate: 6 }}
              whileTap={{ scale: 0.96 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8d9d1] bg-white/85 text-lg shadow-[0_10px_25px_rgba(15,23,42,0.12)] backdrop-blur-md transition-colors duration-200 dark:border-[#2b3f5f] dark:bg-[#0f213b]/90 dark:text-[#edf2ff]"
            >
              <span aria-hidden="true" className="leading-none">
                {resolvedTheme === "dark" ? "☀️" : "🌙"}
              </span>
            </motion.button>
          )}
        </div>
      )}

      {showSidebar && <Sidebar onClose={() => setSidebarOpen(false)} />}

      {showSidebar && (
        <button
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          aria-label="Close sidebar"
        />
      )}

      <main className={`relative z-10 min-w-0 bg-transparent p-6 ${showSidebar ? "md:col-start-2" : "md:col-span-1"}`}>
        {!sidebarOpen && !isLoginPage && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="mb-4 rounded-lg bg-white px-3 py-2 shadow hover:bg-gray-50 dark:bg-[#111f34] dark:text-[#edf2ff] dark:hover:bg-[#182b46]"
            aria-label="Show Sidebar"
          >
            ☰
          </button>
        )}

        <div>{children}</div>
      </main>
    </div>
  );
}
