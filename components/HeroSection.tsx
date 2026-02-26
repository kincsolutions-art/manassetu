"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "./Header";
import { useLang } from "./LanguageContext";

const t = {
  en: {
    badge: "You don\u2019t have to carry it alone",
    headingStart: "A bridge to",
    headingHighlight: "a calmer mind.",
    description:
      "Free tools for anxiety, stress, grief, and the hard days in between. Built for Nepal, open to everyone.",
    explore: "Explore Resources",
    support: "Find Support",
    heroAlt: "Misty forest mountains representing calm and clarity",
  },
  np: {
    badge: "तपाईं एक्लैको बोझ हैन",
    headingStart: "मनको शान्तिमा",
    headingHighlight: "एउटा सेतु।",
    description:
      "चिन्ता, तनाव, दुःख — जुनसुकै दिनको लागि निःशुल्क सहयोग। नेपालका लागि बनाइएको, सबैका लागि।",
    explore: "के-के छ हेर्नुहोस्",
    support: "सहयोग पाउनुहोस्",
    heroAlt: "शान्ति र स्पष्टताको प्रतिनिधित्व गर्ने धुम्मसिलो वन पहाड",
  },
};

export function HeroSection() {
  const { lang } = useLang();
  const s = t[lang];

  return (
    <div className="relative min-h-[95vh] flex flex-col overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_0%,transparent_60%)] animate-float-slow transform-gpu" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.15)_0%,transparent_60%)] animate-float-slow [animation-delay:2s] transform-gpu" />
      <div className="absolute top-[30%] left-[50%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.1)_0%,transparent_60%)] animate-pulse-soft transform-gpu" />

      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-forest.png"
          alt={s.heroAlt}
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/60 to-[#FDFBF7]" />
      </div>

      <Header />

      <section className="relative z-10 flex-1 flex items-center justify-center pb-20 md:pb-32 pt-24 md:pt-28">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-8 text-center space-y-8 flex flex-col items-center selection:text-stone-900 selection:bg-amber-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-100 text-sm font-medium tracking-wide animate-fade-in-up opacity-0 shadow-lg shadow-amber-900/20">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {s.badge}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl animate-fade-in-up opacity-0 [animation-delay:200ms] drop-shadow-sm">
            {s.headingStart}{" "}
            <span className="relative whitespace-nowrap">
              <span className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-rose-400/20 blur-lg rounded-lg" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 selection:text-stone-900 selection:bg-amber-300">
                {s.headingHighlight}
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-stone-200 leading-relaxed max-w-2xl animate-fade-in-up opacity-0 [animation-delay:400ms] font-light drop-shadow-sm">
            {s.description}
          </p>

          <div className="pt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 [animation-delay:600ms] w-full sm:w-auto justify-center">
            <Link
              href="/#explore"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">{s.explore}</span>
              <svg className="w-5 h-5 relative group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center gap-2 bg-stone-900/40 hover:bg-stone-800/60 backdrop-blur-md border border-white/15 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:border-white/30"
            >
              {s.support}
            </Link>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FDFBF7]" />
        </svg>
      </div>
    </div>
  );
}
