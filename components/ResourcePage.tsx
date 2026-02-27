"use client";

import Link from "next/link";
import type { Resource } from "@/data/resources";
import { helplines } from "@/data/helplines";
import { TopicNav } from "@/components/TopicNav";
import { ToolFeedback } from "@/components/ToolFeedback";
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
    normalHeading: "What\u2019s normal",
    normalSub: "These feelings are common. They feel true, but they\u2019re not the whole picture.",
    redFlagHeading: "When to get help",
    redFlagSub: "Self-help is a start, not a substitute. Please reach out if:",
    tryNow: "Try right now",
    pickOne: "Pick one that feels manageable. You don\u2019t need to do them all.",
    notAlone: "You don\u2019t have to do this alone",
    readyToTalk: "Ready to talk to someone?",
    findSupport: "Find Support",
    exploreOther: "Explore Other Topics",
  },
  np: {
    home: "गृहपृष्ठ",
    resources: "अभ्यासहरू",
    talkToSomeone: "कसैसँग कुरा गर्नुहोस्",
    moreHelplines: "थप helpline →",
    normalHeading: "के सामान्य हो",
    normalSub: "यी विचारहरू सामान्य हुन्। सँच्चै जस्तो लाग्छ, तर पूरा तस्बिर होइन।",
    redFlagHeading: "कहिले सहयोग लिने",
    redFlagSub: "Self-help सुरुवात हो, विकल्प होइन। कृपया सम्पर्क गर्नुहोस् यदि:",
    tryNow: "अहिले नै प्रयोग गर्नुहोस्",
    pickOne: "जुन सजिलो लाग्छ त्यो छान्नुहोस्। सबै गर्नु पर्दैन।",
    notAlone: "तपाईंले एक्लै गर्नु पर्दैन",
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
  slug,
}: {
  tool: Resource["tools"][number];
  index: number;
  isNp: boolean;
  slug: string;
}) {
  const config = durationConfig[tool.duration];
  const steps = (isNp && tool.stepsNp) || tool.steps;
  const title = (isNp && tool.titleNp) || tool.title;

  return (
    <div
      className="group relative bg-white rounded-2xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-amber-100 transition-all duration-500 overflow-hidden animate-fade-in-up flex flex-col"
      style={{ animationDelay: `${(index + 3) * 100}ms` }}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${config.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

      <div className="relative p-5 space-y-4 flex-1 flex flex-col">
        <div className="space-y-2">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${config.bg}`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tool.duration}
          </span>
          <h3 className="text-base font-bold text-stone-800 group-hover:text-stone-900 transition-colors leading-snug">
            {title}
          </h3>
        </div>
        <ol className="space-y-3 flex-1">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 ${config.stepBg}`}>
                {i + 1}
              </span>
              <span className="text-stone-600 text-sm leading-relaxed pt-0.5 group-hover:text-stone-700 transition-colors">
                {step}
              </span>
            </li>
          ))}
        </ol>
        <ToolFeedback toolId={`${slug}--${tool.title.toLowerCase().replace(/\s+/g, "-")}`} />
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
        <div className="max-w-5xl mx-auto px-6 relative z-20 animate-fade-in-up [animation-delay:200ms]">
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

        {/* Normal vs Red flags — side by side */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 animate-fade-in-up [animation-delay:200ms]">
          <div className="grid md:grid-cols-2 gap-6">
            {/* What's normal */}
            <div className="bg-white rounded-3xl border border-amber-100/60 p-6 md:p-8 space-y-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-amber-600 font-bold tracking-[0.15em] uppercase text-xs bg-amber-50 px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {s.normalHeading}
                </div>
                <p className="text-stone-500 text-sm">{s.normalSub}</p>
              </div>
              <ul className="space-y-3">
                {((isNp && resource.commonThoughtsNp) || resource.commonThoughts).map((thought) => (
                  <li key={thought} className="flex gap-3 items-start">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-stone-600 text-sm leading-relaxed italic">
                      &ldquo;{thought.replace(/^[\u201C\u201D""]|[\u201C\u201D""]$/g, "")}&rdquo;
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red flags */}
            <div className="relative bg-white rounded-3xl border border-rose-100/60 p-6 md:p-8 space-y-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-transparent pointer-events-none" />
              <div className="relative space-y-2">
                <div className="inline-flex items-center gap-2 text-rose-500 font-bold tracking-[0.15em] uppercase text-xs bg-rose-50 px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                  </span>
                  {s.redFlagHeading}
                </div>
                <p className="text-stone-500 text-sm">{s.redFlagSub}</p>
              </div>
              <ul className="relative space-y-3">
                {((isNp && resource.redFlagsNp) || resource.redFlags).map((flag) => (
                  <li key={flag} className="flex gap-3 items-start">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-stone-600 text-sm leading-relaxed">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-16 md:pb-24 space-y-20">
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
            <div className="grid md:grid-cols-3 gap-5">
              {resource.tools.map((tool, i) => (
                <ToolCard key={tool.title} tool={tool} index={i} isNp={isNp} slug={resource.slug} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-6 py-8 animate-fade-in-up [animation-delay:800ms]">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <p className="text-amber-600/80 text-sm font-bold tracking-[0.15em] uppercase">
              {s.notAlone}
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">
              {s.readyToTalk}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 bg-stone-900 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {s.findSupport}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="bg-white border-2 border-stone-200 text-stone-700 font-semibold px-7 py-3.5 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all duration-300"
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
