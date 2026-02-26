"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { resources } from "@/data/resources";
import { useLang } from "./LanguageContext";

const t = {
  en: {
    heading: "What are you going through?",
    subheading: "Tap what feels closest. Each one has quick tools you can try right now.",
    quickTools: "Quick tools available",
    tryTools: "Try these tools",
  },
  np: {
    heading: "तिमी के बाट गुज्रिरहेका छौ?",
    subheading: "जुन सबैभन्दा नजिक लाग्छ, त्यो छान। हरेकमा तुरुन्तै प्रयोग गर्न सकिने उपायहरू छन्।",
    quickTools: "छिटो प्रयोग गर्न सकिने उपायहरू",
    tryTools: "यी उपायहरू प्रयोग गर्नुहोस्",
  },
};

const icons: Record<string, React.ReactNode> = {
  anxiety: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  "exam-stress": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
  "sleep-problems": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  ),
  "low-mood": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  ),
  loneliness: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  ),
  bullying: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  "family-conflict": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  ),
  grief: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  ),
  "self-harm": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01" />
  ),
  addiction: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  ),
  trauma: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  "relationship-issues": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  "body-image": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  anger: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  ),
};

const durationColor = {
  "1 min": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "5 min": "bg-amber-100 text-amber-700 border-amber-200",
  "10 min": "bg-rose-100 text-rose-700 border-rose-200",
} as const;

export function ResourceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = resources[activeIndex];
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const s = t[lang];
  const isNp = lang === "np";

  const handleSelect = useCallback((i: number) => {
    setActiveIndex(i);
    const container = mobileNavRef.current;
    if (!container) return;
    const btn = container.children[i] as HTMLElement | undefined;
    if (!btn) return;
    const scrollLeft = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="text-center space-y-4 mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight">
          {s.heading}
        </h2>
        <p className="text-stone-500 text-xl font-light max-w-xl mx-auto">
          {s.subheading}
        </p>
      </div>
    <div className="flex flex-col md:flex-row md:max-h-[900px] bg-white rounded-3xl border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
      {/* Sidebar */}
      <nav className="md:w-72 lg:w-80 shrink-0 border-b md:border-b-0 md:border-r border-stone-100 bg-[#FDFBF7] md:overflow-y-auto scrollbar-none">
        {/* Mobile: horizontal scroll */}
        <div ref={mobileNavRef} className="flex md:hidden overflow-x-auto gap-2 p-3 scrollbar-none">
          {resources.map((r, i) => (
            <button
              key={r.slug}
              onClick={() => handleSelect(i)}
              className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                i === activeIndex
                  ? "bg-stone-900 text-white shadow-md scale-105"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {icons[r.slug]}
              </svg>
              <span className="whitespace-nowrap">{(isNp && r.titleNp) || r.title}</span>
            </button>
          ))}
        </div>

        {/* Desktop: vertical list */}
        <div className="hidden md:flex flex-col py-4 px-3 gap-1 overflow-y-auto">
          {resources.map((r, i) => (
            <button
              key={r.slug}
              onClick={() => setActiveIndex(i)}
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 relative overflow-hidden ${
                i === activeIndex
                  ? "bg-stone-900 text-white shadow-md shadow-stone-900/10 translate-x-1"
                  : "text-stone-600 hover:bg-white hover:shadow-sm hover:text-stone-900"
              }`}
            >
              {/* Active indicator background effect */}
              {i === activeIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-900 -z-10" />
              )}
              
              <div className={`p-2 rounded-xl transition-colors duration-300 ${
                i === activeIndex ? "bg-white/10" : "bg-stone-100 group-hover:bg-amber-50"
              }`}>
                <svg
                  className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                    i === activeIndex ? "text-amber-300" : "text-stone-500 group-hover:text-amber-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icons[r.slug]}
                </svg>
              </div>
              
              <span className={`font-semibold text-sm transition-colors duration-300 ${
                i === activeIndex ? "text-white" : "text-stone-700"
              }`}>{(isNp && r.titleNp) || r.title}</span>
              
              <svg
                className={`w-4 h-4 ml-auto shrink-0 transition-all duration-300 ${
                  i === activeIndex ? "text-amber-300 opacity-100 translate-x-0" : "text-stone-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </nav>

      {/* Detail Panel */}
      <div className="flex-1 flex flex-col bg-white relative overflow-hidden min-h-0">
        {/* Decorative background blur - Optimized */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,251,235,0.8)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-700" key={`bg-${activeIndex}`} />
        
        {/* Content area */}
        <div className="flex-1 p-8 md:p-12 lg:p-14 pb-8 relative z-10 overflow-y-auto min-h-0">
          <div 
            key={`content-${activeIndex}`}
            className="animate-fade-in-up"
          >
            <div className="space-y-4 mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icons[active.slug]}
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-stone-800 tracking-tight">
                {(isNp && active.titleNp) || active.title}
              </h3>
              <p className="text-stone-500 text-xl leading-relaxed font-light max-w-2xl">
                {(isNp && active.subtitleNp) || active.subtitle}
              </p>
            </div>

            <div className="bg-[#FDFBF7] border border-stone-100 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-200" />
              <p className="text-stone-700 leading-relaxed text-lg font-light relative z-10">
                {(isNp && active.normalizerNp) || active.normalizer}
              </p>
            </div>
          </div>
        </div>

        {/* Fixed bottom section */}
        <div className="border-t border-stone-100 p-8 md:p-12 lg:p-14 pt-6 bg-white/80 backdrop-blur-xl shrink-0 space-y-8 relative z-20">
          {/* Quick tools preview */}
          <div 
            key={`tools-${activeIndex}`}
            className="space-y-4 animate-fade-in-up [animation-delay:100ms]"
          >
            <div className="flex items-center gap-3">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                {s.quickTools}
              </h4>
              <div className="h-px flex-1 bg-stone-100" />
            </div>
            
            <div className="grid gap-4 sm:grid-cols-3">
              {active.tools.map((tool, idx) => (
                <div
                  key={tool.title}
                  className="group bg-white rounded-2xl p-5 space-y-3 border border-stone-100 shadow-sm hover:shadow-md hover:border-amber-100 transition-all duration-300 relative overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-stone-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${durationColor[tool.duration]}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tool.duration}
                  </span>
                  <p className="text-sm font-semibold text-stone-800 line-clamp-2 leading-snug group-hover:text-amber-700 transition-colors">{(isNp && tool.titleNp) || tool.title}</p>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={`/resources/${active.slug}`}
            className="group relative flex items-center justify-between w-full bg-stone-900 hover:bg-stone-800 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-stone-900/10 hover:shadow-2xl hover:shadow-stone-900/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">{s.tryTools}</span>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
