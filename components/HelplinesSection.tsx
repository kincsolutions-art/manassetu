"use client";

import Link from "next/link";
import { useLang } from "./LanguageContext";
import { helplines } from "@/data/helplines";

const t = {
  en: {
    eyebrow: "Rather talk to someone?",
    heading: "Free helplines, available now.",
    suicideLabel: "National Suicide Prevention",
    suicideDesc:
      "Based at Mental Hospital Lagankhel. Available round the clock. Free on Nepal Telecom; accessible from Ncell.",
    tpoLabel: "TPO Nepal Psychosocial",
    tpoDesc:
      "Psychosocial counseling by TPO Nepal. Daily 9 AM–5 PM. Free on Nepal Telecom.",
    browseAll: (count: number) =>
      `Browse all ${count} verified resources in Nepal`,
  },
  np: {
    eyebrow: "कसैसँग कुरा गर्नु छ?",
    heading: "निःशुल्क helpline, अहिले उपलब्ध।",
    suicideLabel: "National Suicide Prevention",
    suicideDesc:
      "Mental Hospital लगनखेलमा। २४ सै घण्टा उपलब्ध। Nepal Telecom मा निःशुल्क; Ncell बाट पनि लाग्छ।",
    tpoLabel: "TPO Nepal Psychosocial",
    tpoDesc:
      "TPO Nepal को मनोसामाजिक परामर्श। दैनिक बिहान ९ – साँझ ५। Nepal Telecom मा निःशुल्क।",
    browseAll: (count: number) =>
      `नेपालका ${count} वटा प्रमाणित स्रोतहरू हेर्नुहोस्`,
  },
};

export function HelplinesSection() {
  const { lang } = useLang();
  const s = t[lang];

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-16 pb-12 md:pb-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-rose-100/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,241,242,0.8)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,251,235,0.8)_0%,transparent_60%)] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-2">
            {s.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 tracking-tight">
            {s.heading}
          </h2>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-rose-500 font-bold tracking-[0.15em] uppercase text-xs bg-rose-50 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              {s.suicideLabel}
            </div>
            <a
              href="tel:1166"
              className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-800 tracking-tight hover:text-rose-600 transition-colors duration-300 whitespace-nowrap"
            >
              1166
            </a>
            <p className="text-stone-500 text-sm leading-relaxed max-w-md font-light">
              {s.suicideDesc}
            </p>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-amber-600 font-bold tracking-[0.15em] uppercase text-xs bg-amber-50 px-3 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {s.tpoLabel}
            </div>
            <a
              href="tel:16600102005"
              className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-800 tracking-tight hover:text-amber-600 transition-colors duration-300 whitespace-nowrap"
            >
              1660 010 2005
            </a>
            <p className="text-stone-500 text-sm leading-relaxed max-w-md font-light">
              {s.tpoDesc}
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-8 pt-8 border-t border-stone-100 text-center">
          <Link
            href="/support"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-stone-800 transition-colors"
          >
            {s.browseAll(helplines.length)}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
