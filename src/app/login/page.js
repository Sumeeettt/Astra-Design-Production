"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="relative -m-6 flex min-h-[100svh] items-center justify-center overflow-hidden bg-gray-950 p-4 sm:p-8">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=90')",
        }}
        initial={{ scale: 1.06 }}
        animate={{ scale: prefersReducedMotion ? 1.06 : [1.06, 1.1, 1.06] }}
        transition={{ duration: 24, repeat: prefersReducedMotion ? 0 : Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/65 to-rose-950/45" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-gray-950/45 via-transparent to-gray-950/20" />

      <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.header
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto w-full max-w-xl text-white"
        >
          <p className="font-serif text-3xl font-semibold tracking-[0.18em]">ASTRA</p>
          <div className="mt-6 h-1 w-16 rounded-full bg-amber-300" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Events · Design · Production</p>
          <h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-tight sm:text-5xl">Bring every detail into focus.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/80">A considered space for the people shaping unforgettable events.</p>
        </motion.header>

        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="mx-auto w-full max-w-md"
        >
          <header className="mb-6 text-white">
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <p className="mt-2 text-sm text-white/75">Sign in to continue to your workspace.</p>
          </header>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/50 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            initial={prefersReducedMotion ? false : { scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
          >
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-800">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-white p-3 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-800">Password</label>
              <div className="mt-2 flex rounded-lg border border-gray-200 bg-white transition focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-100">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="min-w-0 flex-1 rounded-lg bg-transparent p-3 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-pressed={showPassword}
                  className="shrink-0 px-3 text-sm font-medium text-rose-700 transition-colors hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-rose-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              className="w-full rounded-lg bg-gradient-to-r from-rose-700 to-orange-600 p-3 font-semibold text-white shadow-sm transition-colors hover:from-rose-800 hover:to-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
            >
              Sign in
            </motion.button>

            <p className="text-center text-xs text-gray-500">Demo sign-in opens the workspace dashboard.</p>
          </motion.form>
        </motion.section>
      </div>
    </div>
  );
}
