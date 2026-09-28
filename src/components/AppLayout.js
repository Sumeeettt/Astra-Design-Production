"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isLoginPage = usePathname() === "/login";
  const showSidebar = sidebarOpen && !isLoginPage;

  return (
    <div className={`grid min-h-screen grid-cols-1 bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50 ${showSidebar ? "md:grid-cols-[16rem_minmax(0,1fr)]" : "md:grid-cols-1"}`}>
      {showSidebar && <Sidebar onClose={() => setSidebarOpen(false)} />}

      {showSidebar && (
        <button
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          aria-label="Close sidebar"
        />
      )}

      <main className={`min-w-0 bg-transparent p-6 ${showSidebar ? "md:col-start-2" : "md:col-span-1"}`}>
        {!sidebarOpen && !isLoginPage && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="mb-4 rounded-lg bg-white px-3 py-2 shadow hover:bg-gray-50"
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
