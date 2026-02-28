"use client";

import Link from "next/link";
import { VisitorCounter } from "./VisitorCounter";
import { useLang } from "./LanguageContext";

export function FloatingWidgets() {
  const { lang } = useLang();

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 w-[148px] animate-fade-in [animation-delay:1.5s] opacity-0">
      <Link
        href="/donate"
        className="w-full inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white backdrop-blur-md text-stone-700 hover:text-amber-600 text-sm font-semibold py-2.5 rounded-xl border border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-md transition-all duration-300"
      >
        <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {lang === "np" ? "सहयोग गर्नुहोस्" : "Support cause"}
      </Link>
      <VisitorCounter />
    </div>
  );
}
