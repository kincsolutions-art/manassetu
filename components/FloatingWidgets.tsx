"use client";

import Link from "next/link";
import { VisitorCounter } from "./VisitorCounter";
import { useLang } from "./LanguageContext";

export function FloatingWidgets() {
  const { lang } = useLang();

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 animate-fade-in [animation-delay:1.5s] opacity-0">
      <Link
        href="/donate"
        className="inline-flex items-center gap-2 bg-stone-900/80 hover:bg-stone-900 backdrop-blur-md text-amber-300 hover:text-amber-200 text-sm font-semibold pl-4 pr-5 py-2.5 rounded-full border border-stone-700/50 shadow-lg transition-all duration-300 hover:shadow-xl animate-float"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {lang === "np" ? "सहयोग गर्नुहोस्" : "Support us"}
      </Link>
      <VisitorCounter />
    </div>
  );
}
