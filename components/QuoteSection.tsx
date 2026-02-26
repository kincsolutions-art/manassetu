"use client";

import { useLang } from "./LanguageContext";

const t = {
  en: {
    quote:
      "\u201CHealing doesn\u2019t mean the damage never existed. It means the damage no longer controls our lives.\u201D",
    label: "A gentle reminder",
  },
  np: {
    quote:
      "\u201Cनिको हुनु भनेको घाउ कहिल्यै थिएन भन्ने होइन। घाउले अब हाम्रो जीवन चलाउँदैन भन्ने हो।\u201D",
    label: "एउटा सानो सम्झना",
  },
};

export function QuoteSection() {
  const { lang } = useLang();
  const s = t[lang];

  return (
    <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(254,243,199,0.5)_0%,transparent_60%)] -z-10 pointer-events-none" />
      <svg className="w-10 h-10 mx-auto text-amber-300 mb-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium text-stone-800 leading-tight tracking-tight">
        {s.quote}
      </blockquote>
      <p className="text-stone-400 font-bold tracking-[0.2em] uppercase text-xs mt-8">
        {s.label}
      </p>
    </section>
  );
}
