"use client";

import { Header } from "./Header";
import { FloatingWidgets } from "./FloatingWidgets";
import { useLang } from "./LanguageContext";

const PINNED = {
  en: [
    { label: "Suicide Prevention", number: "1166", href: "tel:1166", note: "24/7 · Free on NTC" },
    { label: "Child Helpline", number: "1098", href: "tel:1098", note: "24/7 · Toll-free" },
    { label: "Police Emergency", number: "100", href: "tel:100", note: "24/7 · Emergency" },
    { label: "GBV Helpline", number: "1145", href: "tel:1145", note: "24/7 · Toll-free" },
  ],
  np: [
    { label: "Suicide Prevention", number: "1166", href: "tel:1166", note: "२४/७ · NTC मा निःशुल्क" },
    { label: "Child Helpline", number: "1098", href: "tel:1098", note: "२४/७ · निःशुल्क" },
    { label: "Police Emergency", number: "100", href: "tel:100", note: "२४/७ · आपतकालीन" },
    { label: "GBV Helpline", number: "1145", href: "tel:1145", note: "२४/७ · निःशुल्क" },
  ],
};

const t = {
  en: {
    badge: "Verified Nepal Directory",
    heading: "Find Support",
    description: (count: number) =>
      `${count} verified mental health services in Nepal, from crisis lines to counselors to hospitals.`,
    crisisHeading: "In a crisis right now?",
  },
  np: {
    badge: "प्रमाणित नेपाल Directory",
    heading: "सहयोग खोज्नुहोस्",
    description: (count: number) =>
      `नेपालमा ${count} वटा प्रमाणित मानसिक स्वास्थ्य सेवाहरू। Crisis line देखि counselor र अस्पतालसम्म।`,
    crisisHeading: "अहिले नै सहयोग चाहिन्छ?",
  },
};

export function SupportHero({ helplineCount }: { helplineCount: number }) {
  const { lang } = useLang();
  const s = t[lang];
  const pinned = PINNED[lang];

  return (
    <>
      <FloatingWidgets />

      <div className="relative overflow-hidden bg-stone-900 text-white pb-24 md:pb-32">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_60%)] animate-float-slow transform-gpu pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.12)_0%,transparent_60%)] animate-float-slow [animation-delay:2s] transform-gpu pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-900/80 pointer-events-none" />

        <Header />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 space-y-5 pt-20 md:pt-24 animate-fade-in-up selection:text-stone-900 selection:bg-amber-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-amber-200 text-sm font-medium tracking-wide">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {s.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 selection:text-stone-900 selection:bg-amber-300">
              {s.heading}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-2xl">
            {s.description(helplineCount)}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FDFBF7]" />
          </svg>
        </div>
      </div>

      {/* Crisis numbers */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32 -mt-16 md:-mt-20 relative z-20 space-y-12">
        <section className="animate-fade-in-up [animation-delay:100ms]">
          <div className="bg-white rounded-3xl border border-rose-100/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
            <div className="px-6 pt-6 pb-3 md:px-8 md:pt-8 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
              </span>
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-rose-500">
                {s.crisisHeading}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-stone-100 border-t border-stone-100">
              {pinned.map((p) => (
                <a
                  key={p.number}
                  href={p.href}
                  className="group flex flex-col gap-1 px-6 py-5 md:px-8 md:py-6 hover:bg-rose-50/60 transition-colors duration-300"
                >
                  <span className="text-xs font-semibold text-stone-400 group-hover:text-rose-500 transition-colors">
                    {p.label}
                  </span>
                  <span className="text-3xl md:text-4xl font-extrabold text-stone-800 tracking-tight group-hover:text-rose-600 transition-colors whitespace-nowrap leading-none">
                    {p.number}
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">
                    {p.note}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
