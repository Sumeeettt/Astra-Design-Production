"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ onClose }) {
  const pathname = usePathname();
  const navigationItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "AI Studio", href: "/ai-studio" },
    { label: "Design Studio", href: "/design-studio" },
    { label: "Production", href: "/production" },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto overscroll-contain border-r border-rose-200 bg-white/90 p-6 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">
          <Link
            href="/dashboard"
            aria-label="ASTRA home"
            className="group relative inline-block pb-1 font-serif font-semibold tracking-[0.14em] text-rose-900 transition-colors duration-200 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600"
          >
            ASTRA
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
            />
          </Link>
        </h1>
        <button
          onClick={onClose}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          aria-label="Hide Sidebar"
        >
          ☰
        </button>
      </div>

      <nav className="mt-8 space-y-2">
        {navigationItems.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-lg p-3 transition-all duration-200 hover:translate-x-1 hover:bg-gradient-to-r hover:from-rose-300 hover:via-orange-200 hover:to-amber-200 hover:text-rose-950 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
                isActive
                  ? "bg-gradient-to-r from-rose-200 via-orange-100 to-amber-200 font-semibold text-rose-900 shadow-sm"
                  : "text-gray-700"
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

