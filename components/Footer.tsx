"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "./LanguageContext";

const t = {
  en: {
    tagline: "A bridge to a calmer mind. Free mental health tools built for Nepal, open to everyone.",
    explore: "Explore",
    resources: "Resources",
    findSupport: "Find Support",
    helplines: "Helplines",
    about: "About",
    crisisHeading: "Need help right now?",
    crisisLabel: "National Suicide Prevention",
    crisisAvail: "24 / 7 · Free on Nepal Telecom",
    disclaimer: "Information verified February 2026. Hours and availability may change. Always confirm before calling.",
    builtFor: "Built for Nepal with care.",
  },
  np: {
    tagline: "मनको शान्तिमा एउटा सेतु। नेपालका लागि बनाइएको निःशुल्क मानसिक स्वास्थ्य साधन, सबैका लागि।",
    explore: "हेर्नुहोस्",
    resources: "स्रोतहरू",
    findSupport: "सहयोग",
    helplines: "Helpline",
    about: "बारेमा",
    crisisHeading: "अहिले नै सहयोग चाहिन्छ?",
    crisisLabel: "National Suicide Prevention",
    crisisAvail: "२४ / ७ · Nepal Telecom मा निःशुल्क",
    disclaimer: "जानकारी फेब्रुअरी २०२६ मा प्रमाणित। समय र उपलब्धता परिवर्तन हुन सक्छ। फोन गर्नुअघि पुष्टि गर्नुहोस्।",
    builtFor: "नेपालका लागि मायाले बनाइएको।",
  },
};

export function Footer() {
  const { lang } = useLang();
  const s = t[lang];

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-stone-800">

          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="block w-fit">
              <div className="bg-white/95 rounded-xl px-3 py-2 hover:bg-white transition-colors duration-200">
                <Image
                  src="/logo-horizontal.png"
                  alt="Manas Setu"
                  width={148}
                  height={60}
                  className="h-11 w-auto"
                />
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed font-light max-w-xs">
              {s.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
              {s.explore}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/resources" className="text-stone-400 hover:text-amber-200 text-sm transition-colors">
                {s.resources}
              </Link>
              <Link href="/support" className="text-stone-400 hover:text-amber-200 text-sm transition-colors">
                {s.findSupport}
              </Link>
              <Link href="/support" className="text-stone-400 hover:text-amber-200 text-sm transition-colors">
                {s.helplines}
              </Link>
              <Link href="/about" className="text-stone-400 hover:text-amber-200 text-sm transition-colors">
                {s.about}
              </Link>
            </nav>
          </div>

          {/* Crisis number */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
              {s.crisisHeading}
            </h3>
            <a href="tel:1166" className="group block space-y-1">
              <span className="text-stone-400 text-xs font-medium">{s.crisisLabel}</span>
              <span className="block text-4xl font-extrabold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                1166
              </span>
              <span className="flex items-center gap-1.5 text-stone-500 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {s.crisisAvail}
              </span>
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-600 text-xs">
          <p>{s.disclaimer}</p>
          <div className="flex items-center gap-3 shrink-0">
            <p>{s.builtFor}</p>
            <a
              href="https://www.linkedin.com/in/gauravkunwar108/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-amber-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
