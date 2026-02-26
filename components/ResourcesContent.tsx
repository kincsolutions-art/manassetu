"use client";

import Link from "next/link";
import { resources } from "@/data/resources";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWidgets } from "./FloatingWidgets";
import { useLang } from "./LanguageContext";

const icons: Record<string, React.ReactNode> = {
  anxiety: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  "exam-stress": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  "sleep-problems": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />,
  "low-mood": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  loneliness: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  bullying: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  "family-conflict": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
  grief: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
  "self-harm": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01" />,
  addiction: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
  trauma: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  "relationship-issues": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
  "body-image": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  anger: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />,
};

const t = {
  en: {
    badge: (n: number) => `${n} topics`,
    headingLine1: "What are you",
    headingLine2: "going through?",
    description: "Pick the topic that feels closest. Each one has quick tools you can try right now, no sign-up needed.",
    tools: (n: number) => `${n} tools`,
  },
  np: {
    badge: (n: number) => `${n} वटा विषयहरू`,
    headingLine1: "तपाईं के",
    headingLine2: "भोगिरहनुभएको छ?",
    description: "सबैभन्दा नजिकको विषय छान्नुहोस्। हरेकमा तुरुन्त प्रयोग गर्न सकिने tool छ — कुनै sign-up चाहिँदैन।",
    tools: (n: number) => `${n} वटा tool`,
  },
};

export function ResourcesContent() {
  const { lang } = useLang();
  const s = t[lang];
  const isNp = lang === "np";

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-amber-200 overflow-x-hidden">
      <FloatingWidgets />

      <div className="relative overflow-hidden bg-stone-900 text-white pb-24 md:pb-32">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_60%)] animate-float-slow transform-gpu pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.12)_0%,transparent_60%)] animate-float-slow [animation-delay:2s] transform-gpu pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-900/80 pointer-events-none" />

        <Header />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 space-y-5 pt-20 md:pt-24 animate-fade-in-up selection:text-stone-900 selection:bg-amber-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-amber-200 text-sm font-medium tracking-wide">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {s.badge(resources.length)}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 selection:text-stone-900 selection:bg-amber-300">
              {s.headingLine1}
            </span>
            <br />
            {s.headingLine2}
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-2xl">
            {s.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FDFBF7]" />
          </svg>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 md:px-8 pb-24 md:pb-32 -mt-16 md:-mt-20 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in-up [animation-delay:100ms]">
          {resources.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group bg-white rounded-3xl border border-stone-100 p-6 space-y-4 shadow-sm hover:shadow-lg hover:border-amber-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {icons[r.slug]}
                </svg>
              </div>

              <div className="space-y-1.5">
                <h2 className="font-bold text-stone-800 group-hover:text-stone-900 transition-colors">
                  {(isNp && r.titleNp) || r.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                  {(isNp && r.subtitleNp) || r.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-stone-400 group-hover:text-amber-600 transition-colors">
                <span>{s.tools(r.tools.length)}</span>
                <span>·</span>
                <span>{r.tools.map(tool => tool.duration).join(", ")}</span>
                <svg className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
