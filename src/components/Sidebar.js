"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ onClose }) {
  const pathname = usePathname();
  const navigationItems = [
    { label: "Home", href: "/", hover: "hover:bg-[#28243d] hover:text-[#d9ceff]" },
    { label: "Dashboard", href: "/dashboard", hover: "hover:bg-[#392430] hover:text-[#ffdbe3]" },
    { label: "Projects", href: "/projects", hover: "hover:bg-[#3a2e1c] hover:text-[#ffdf91]" },
    { label: "AI Studio", href: "/ai-studio", hover: "hover:bg-[#203b43] hover:text-[#b8f4f3]" },
    { label: "Design Studio", href: "/design-studio", hover: "hover:bg-[#28243d] hover:text-[#d9ceff]" },
    { label: "Production", href: "/production", hover: "hover:bg-[#203a30] hover:text-[#c4f4d4]" },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto overscroll-contain border-r border-[#17314d] bg-[radial-gradient(circle_at_top,rgba(77,110,151,0.25),transparent_35%),linear-gradient(180deg,#071b2d_0%,#071a2a_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition-colors duration-300 dark:border-[#17314d] dark:bg-[radial-gradient(circle_at_top,rgba(77,110,151,0.25),transparent_35%),linear-gradient(180deg,#071b2d_0%,#071a2a_100%)]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">
          <Link
            href="/"
            aria-label="ASTRA home"
            className="group relative inline-block pb-1 font-serif font-semibold tracking-[0.14em] text-[#f4d4db] transition-colors duration-200 hover:text-[#ffdbe3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600"
          >
            ASTRA
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#e4a05a] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
            />
          </Link>
        </h1>
        <button
          onClick={onClose}
          className="rounded-lg p-2 text-[#dfe6f7] transition-colors hover:bg-[#0f294a] hover:text-[#ffdbe3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          aria-label="Hide Sidebar"
        >
          ☰
        </button>
      </div>

      <nav className="mt-8 space-y-2">
        {navigationItems.map(({ label, href, hover }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-xl p-3 transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
                isActive
                  ? "bg-gradient-to-r from-[#d94d64] via-[#cb4d57] to-[#b96442] font-semibold text-white shadow-[0_12px_24px_rgba(192,61,81,0.28)]"
                  : `text-[#e8eefb] ${hover}`
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

