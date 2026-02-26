"use client";

import Link from "next/link";
import type { Resource } from "@/data/resources";
import { helplines } from "@/data/helplines";
import { TopicNav } from "@/components/TopicNav";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { useLang } from "./LanguageContext";

const SLUG_HELPLINES: Record<string, string[]> = {
  "anxiety":            ["NP-NGO-TPO-HELPLINE", "NP-CRISIS-1166"],
  "exam-stress":        ["NP-NGO-TPO-HELPLINE", "NP-CRISIS-1166"],
  "sleep-problems":     ["NP-NGO-TPO-HELPLINE", "NP-CRISIS-1166"],
  "low-mood":           ["NP-CRISIS-1166", "NP-NGO-TPO-HELPLINE"],
  "loneliness":         ["NP-NGO-TPO-HELPLINE", "NP-NGO-KOSHISH"],
  "bullying":           ["NP-CHILD-1098", "NP-CRISIS-1166"],
  "family-conflict":    ["NP-GBV-1145", "NP-CRISIS-1166"],
  "grief":              ["NP-NGO-TPO-HELPLINE", "NP-CRISIS-1166"],
  "self-harm":          ["NP-CRISIS-1166", "NP-NGO-TPO-HELPLINE"],
  "addiction":          ["NP-NGO-TPO-HELPLINE", "NP-CRISIS-1166"],
  "trauma":             ["NP-NGO-TPO-HELPLINE", "NP-CRISIS-1166"],
  "relationship-issues":["NP-GBV-1145", "NP-NGO-TPO-HELPLINE"],
  "body-image":         ["NP-NGO-TPO-HELPLINE", "NP-CRISIS-1166"],
  "anger":              ["NP-NGO-TPO-HELPLINE", "NP-GBV-1145"],
};

const t = {
  en: {
    home: "Home",
    resources: "Resources",
    talkToSomeone: "Talk to someone",
    moreHelplines: "More helplines →",
    youMightThink: "You might be thinking",
    thoughtsCommon: "These thoughts are common. They feel true, but they\u2019re not the whole picture.",
    tryNow: "Try right now",
    pickOne: "Pick one that feels manageable. You don\u2019t need to do them all.",
    whenToGetHelp: "When to get help",
    selfHelpNote: "Self-help is a start, not a substitute. Please reach out if:",
    notAlone: "You don\u2019t have to do this alone",
    readyToTalk: "Ready to talk to someone?",
    findSupport: "Find Support",
    exploreOther: "Explore Other Topics",
  },
  np: {
    home: "गृहपृष्ठ",
    resources: "स्रोतहरू",
    talkToSomeone: "कसैसँग कुरा गर्नुहोस्",
    moreHelplines: "थप helpline →",
    youMightThink: "तिम्रो मनमा यस्तो आउन सक्छ",
    thoughtsCommon: "यी विचारहरू सामान्य हुन्। सँच्चै जस्तो लाग्छ, तर पूरा तस्बिर होइन।",
    tryNow: "अहिले नै प्रयोग गर",
    pickOne: "जुन सजिलो लाग्छ त्यो छान। सबै गर्नु पर्दैन।",
    whenToGetHelp: "कहिले सहयोग लिने",
    selfHelpNote: "Self-help सुरुवात हो, विकल्प होइन। कृपया सम्पर्क गर्नुहोस् यदि:",
    notAlone: "तिमीले एक्लै गर्नु पर्दैन",
    readyToTalk: "कसैसँग कुरा गर्न तयार?",
    findSupport: "सहयोग पाउनुहोस्",
    exploreOther: "अरू विषय हेर्नुहोस्",
  },
};

function shortName(name: string) {
  return name.replace(/\s+[–—-]+\s+.+$/, "").trim();
}

const durationConfig = {
  "1 min": {
    bg: "bg-emerald-100 text-emerald-700 border-emerald-200",
    accent: "from-emerald-400 to-emerald-500",
    stepBg: "bg-emerald-100 text-emerald-700",
  },
  "5 min": {
    bg: "bg-amber-100 text-amber-700 border-amber-200",
    accent: "from-amber-400 to-amber-500",
    stepBg: "bg-amber-100 text-amber-700",
  },
  "10 min": {
    bg: "bg-rose-100 text-rose-700 border-rose-200",
    accent: "from-rose-400 to-rose-500",
    stepBg: "bg-rose-100 text-rose-700",
  },
} as const;

function ToolCard({
  tool,
  index,
  isNp,
}: {
  tool: Resource["tools"][number];
  index: number;
  isNp: boolean;
}) {
  const config = durationConfig[tool.duration];
  const steps = (isNp && tool.stepsNp) || tool.steps;
  const title = (isNp && tool.titleNp) || tool.title;

  return (
    <div
      className="group relative bg-white rounded-3xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-amber-100 transition-all duration-500 overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${(index + 3) * 100}ms` }}
    >
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${config.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-stone-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 md:p-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border ${config.bg}`}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tool.duration}
          </span>
          <h3 className="text-xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors">
            {title}
          </h3>
        </div>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shadow-sm ${config.stepBg}`}>
                {i + 1}
              </span>
              <span className="text-stone-600 leading-relaxed pt-1 group-hover:text-stone-700 transition-colors">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function ResourcePage({ resource }: { resource: Resource }) {
  const { lang } = useLang();
  const s = t[lang];
  const isNp = lang === "np";

  const title = (isNp && resource.titleNp) || resource.title;
  const subtitle = (isNp && resource.subtitleNp) || resource.subtitle;
  const normalizer = (isNp && resource.normalizerNp) || resource.normalizer;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-amber-200 overflow-x-hidden">

      <FloatingWidgets />

      {/* Dark hero section */}
      <div className="relative overflow-hidden bg-stone-900 text-white pb-24 md:pb-32">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_60%)] animate-float-slow transform-gpu pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.12)_0%,transparent_60%)] animate-float-slow [animation-delay:2s] transform-gpu pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-900/80 pointer-events-none" />

        <Header />

        {/* Page title */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-5 pt-20 md:pt-24 pb-0 animate-fade-in-up selection:text-stone-900 selection:bg-amber-300">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-amber-300 transition-colors">{s.home}</Link>
            <svg className="w-3.5 h-3.5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/resources" className="hover:text-amber-300 transition-colors">{s.resources}</Link>
            <svg className="w-3.5 h-3.5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-stone-400">{title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-sm">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 selection:text-stone-900 selection:bg-amber-300">
              {title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-2xl drop-shadow-sm">
            {subtitle}
          </p>
        </div>

        {/* Topic nav strip */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-2">
          <TopicNav currentSlug={resource.slug} />
        </div>

        {/* Wave into content */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FDFBF7]" />
          </svg>
        </div>
      </div>

      <main className="relative z-20">
        {/* Relevant helplines */}
        {(() => {
          const ids = SLUG_HELPLINES[resource.slug] ?? [];
          const matched = ids.map(id => helplines.find(h => h.id === id)).filter(Boolean) as typeof helplines;
          if (!matched.length) return null;
          return (
            <div className="max-w-3xl mx-auto px-6 -mt-16 md:-mt-20 relative z-30 animate-fade-in-up [animation-delay:100ms] mb-4">
              <div className="bg-stone-900 rounded-3xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-lg">
                <div className="shrink-0 flex items-center gap-2 text-amber-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase">{s.talkToSomeone}</span>
                </div>
                <div className="flex flex-wrap gap-3 sm:flex-1">
                  {matched.map(h => (
                    <a
                      key={h.id}
                      href={`tel:${h.phones[0].replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/25 text-white rounded-full pl-3 pr-4 py-1.5 transition-all duration-200 group"
                    >
                      <span className="font-extrabold text-amber-300 tracking-tight leading-none">{h.phones[0]}</span>
                      <span className="text-xs text-stone-300 group-hover:text-white transition-colors truncate max-w-[160px]">{shortName(h.name)}</span>
                    </a>
                  ))}
                </div>
                <Link href="/support" className="shrink-0 text-xs text-stone-400 hover:text-amber-300 transition-colors whitespace-nowrap">
                  {s.moreHelplines}
                </Link>
              </div>
            </div>
          );
        })()}

        {/* Normalizer card */}
        <div className="max-w-3xl mx-auto px-6 relative z-20 animate-fade-in-up [animation-delay:200ms]">
          <section className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-amber-100/50 p-6 md:p-10 flex flex-col sm:flex-row gap-5 items-start relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-300 to-orange-300" />
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shadow-inner">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-stone-700 leading-relaxed text-lg md:text-xl font-light pt-1">
              {normalizer}
            </p>
          </section>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-20">
          {/* Common thoughts */}
          <section className="space-y-6 animate-fade-in-up [animation-delay:300ms]">
            <div className="space-y-2">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                {s.youMightThink}
              </h2>
              <p className="text-stone-500 text-sm md:text-base">
                {s.thoughtsCommon}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {((isNp && resource.commonThoughtsNp) || resource.commonThoughts).map((thought) => (
                <div
                  key={thought}
                  className="relative bg-white rounded-2xl border border-stone-100 px-6 py-5 text-stone-600 text-sm md:text-base leading-relaxed shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="absolute -top-2 -left-2 w-6 h-6 text-amber-200/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <span className="italic relative z-10">
                    &ldquo;{thought.replace(/^[""]|[""]$/g, "")}&rdquo;
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="space-y-8">
            <div className="space-y-2 animate-fade-in-up [animation-delay:400ms]">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
                {s.tryNow}
              </h2>
              <p className="text-stone-500 text-sm md:text-base">
                {s.pickOne}
              </p>
            </div>
            <div className="space-y-6">
              {resource.tools.map((tool, i) => (
                <ToolCard key={tool.title} tool={tool} index={i} isNp={isNp} />
              ))}
            </div>
          </section>

          {/* Red flags */}
          <section className="relative bg-white border border-rose-100 rounded-3xl p-8 md:p-10 space-y-6 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-fade-in-up [animation-delay:600ms]">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-orange-50/30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(254,205,211,0.4)_0%,transparent_60%)] -translate-y-1/2 translate-x-1/2 animate-pulse-soft transform-gpu pointer-events-none" />

            <div className="relative space-y-2">
              <div className="inline-flex items-center gap-2 text-rose-500 font-bold tracking-[0.15em] uppercase text-xs bg-rose-50 px-3 py-1.5 rounded-full mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                </span>
                {s.whenToGetHelp}
              </div>
              <p className="text-stone-600 text-sm md:text-base">
                {s.selfHelpNote}
              </p>
            </div>
            <ul className="relative space-y-4">
              {((isNp && resource.redFlagsNp) || resource.redFlags).map((flag) => (
                <li key={flag} className="flex gap-4 items-start text-stone-700">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5 shadow-sm">
                    <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="leading-relaxed pt-1">{flag}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center space-y-8 py-10 animate-fade-in-up [animation-delay:800ms]">
            <div className="space-y-3">
              <p className="text-stone-500 text-sm font-bold tracking-[0.2em] uppercase">
                {s.notAlone}
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 tracking-tight">
                {s.readyToTalk}
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/support"
                className="group relative inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">{s.findSupport}</span>
                <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300 hover:shadow-sm px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 w-full sm:w-auto"
              >
                {s.exploreOther}
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
