"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "./LanguageContext";

const NAV = [
  { label: "Resources", labelNp: "अभ्यासहरू", href: "/resources" },
  { label: "Find Support", labelNp: "सहयोग", href: "/support" },
  { label: "About", labelNp: "बारेमा", href: "/about" },
];

const CTA = { en: "Get Help Now", np: "सहयोग पाउनुहोस्" } as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-500">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div
            className="relative flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 will-change-[background-color,box-shadow,border-color]"
            style={{
              backgroundColor: isScrolled ? "rgba(255,255,255,0.55)" : "transparent",
              boxShadow: isScrolled
                ? "0 8px 32px rgba(0,0,0,0.06)"
                : "0 0 0 0 transparent",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isScrolled ? "rgba(255,255,255,0.4)" : "transparent",
              backdropFilter: isScrolled ? "blur(20px) saturate(1.4)" : "blur(0px) saturate(1)",
              WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(1.4)" : "blur(0px) saturate(1)",
            }}
          >
            <Link href="/" className="z-20 block shrink-0">
              <div
                className="rounded-xl px-3 py-1.5 transition-all duration-500"
                style={{
                  backgroundColor: isScrolled ? "transparent" : "rgba(255,255,255,0.95)",
                  boxShadow: isScrolled ? "none" : "0 1px 3px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/logo-horizontal.png"
                  alt="Manas Setu"
                  width={124}
                  height={50}
                  className="h-[32px] w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 z-10">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`font-medium text-sm transition-all duration-500 ${
                    isScrolled
                      ? "text-stone-500 hover:text-stone-900"
                      : "text-white hover:text-amber-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
                  }`}
                >
                  {lang === "np" ? n.labelNp : n.label}
                </Link>
              ))}
            </nav>

            {/* Desktop: Language Toggle + CTA */}
            <div className="hidden md:flex items-center gap-3 z-20">
              <button
                onClick={toggleLang}
                aria-label={`Switch to ${lang === "en" ? "Nepali" : "English"}`}
                className={`relative flex items-center h-8 w-[72px] rounded-full border text-xs font-semibold transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                  isScrolled
                    ? "bg-stone-100 border-stone-200"
                    : "bg-white/10 border-white/20 backdrop-blur-sm"
                }`}
              >
                <span
                  className="absolute top-0.5 h-7 w-[34px] rounded-full bg-white shadow-sm transition-all duration-300"
                  style={{ left: lang === "en" ? 1 : "calc(100% - 35px)" }}
                />
                <span
                  className={`relative z-10 flex-1 text-center transition-colors duration-300 ${
                    lang === "en"
                      ? "text-stone-900"
                      : isScrolled ? "text-stone-400" : "text-white/60"
                  }`}
                >
                  EN
                </span>
                <span
                  className={`relative z-10 flex-1 text-center text-sm transition-colors duration-300 ${
                    lang === "np"
                      ? "text-stone-900"
                      : isScrolled ? "text-stone-400" : "text-white/60"
                  }`}
                >
                  ने
                </span>
              </button>
              <Link
                href="/support"
                className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-500 border text-white ${
                  isScrolled
                    ? "bg-stone-900 border-stone-900 hover:bg-stone-700 hover:border-stone-700 shadow-sm"
                    : "bg-white/10 border-white/20 hover:bg-white/25 hover:border-white/40 backdrop-blur-sm"
                }`}
              >
                {CTA[lang]}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden z-20 p-2 rounded-lg transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                isScrolled
                  ? "text-stone-800 hover:bg-stone-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div
              className={`mt-3 p-6 flex flex-col gap-4 md:hidden rounded-2xl shadow-xl z-20 border transition-all duration-300 ${
                isScrolled
                  ? "bg-white/95 backdrop-blur-md border-stone-200"
                  : "bg-stone-900/95 backdrop-blur-md border-white/10"
              }`}
            >
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors ${
                    isScrolled ? "text-stone-600 hover:text-stone-900" : "text-white hover:text-amber-200"
                  }`}
                >
                  {lang === "np" ? n.labelNp : n.label}
                </Link>
              ))}
              <div className={`pt-2 border-t flex items-center justify-between ${isScrolled ? "border-stone-100" : "border-white/10"}`}>
                <button
                  onClick={toggleLang}
                  aria-label={`Switch to ${lang === "en" ? "Nepali" : "English"}`}
                  className={`relative flex items-center h-8 w-[72px] rounded-full border text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300 ${
                    isScrolled
                      ? "bg-stone-100 border-stone-200"
                      : "bg-white/10 border-white/20"
                  }`}
                >
                  <span
                    className="absolute top-0.5 h-7 w-[34px] rounded-full bg-white shadow-sm transition-all duration-300"
                    style={{ left: lang === "en" ? 1 : "calc(100% - 35px)" }}
                  />
                  <span
                    className={`relative z-10 flex-1 text-center transition-colors duration-300 ${
                      lang === "en"
                        ? "text-stone-900"
                        : isScrolled ? "text-stone-400" : "text-white/60"
                    }`}
                  >
                    EN
                  </span>
                  <span
                    className={`relative z-10 flex-1 text-center text-sm transition-colors duration-300 ${
                      lang === "np"
                        ? "text-stone-900"
                        : isScrolled ? "text-stone-400" : "text-white/60"
                    }`}
                  >
                    ने
                  </span>
                </button>
                <Link
                  href="/support"
                  onClick={() => setIsOpen(false)}
                  className={`text-center font-semibold px-5 py-3 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "bg-stone-900 text-white hover:bg-stone-800"
                      : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                  }`}
                >
                  {CTA[lang]}
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
