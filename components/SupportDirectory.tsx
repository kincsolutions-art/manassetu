"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Helpline } from "@/data/helplines";
import { useLang } from "./LanguageContext";

type CategoryKey = "all" | "crisis" | "counseling" | "safety" | "hospital" | "professional";

const CATEGORIES: { key: CategoryKey; label: string; labelNp: string; icon: React.ReactNode; types: string[] }[] = [
  {
    key: "crisis",
    label: "Crisis Lines",
    labelNp: "Crisis Lines",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
    types: ["crisis", "emergency_services", "child_protection_crisis", "hospital_crisis_line"],
  },
  {
    key: "counseling",
    label: "Counseling",
    labelNp: "Counseling",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
    types: ["counseling", "counseling_services", "counseling_and_referral", "peer_support_and_advocacy", "relationship_support"],
  },
  {
    key: "safety",
    label: "Safety & GBV",
    labelNp: "सुरक्षा र GBV",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    types: ["gbv_crisis_support", "gbv_support_services"],
  },
  {
    key: "hospital",
    label: "Hospitals & Clinics",
    labelNp: "अस्पताल र क्लिनिक",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
    types: ["hospital_service", "hospital_telehealth", "private_clinic", "private_practice"],
  },
  {
    key: "professional",
    label: "Find a Pro",
    labelNp: "विशेषज्ञ खोज्नुहोस्",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    types: ["regulator", "professional_body"],
  },
];

const TYPE_LABELS: Record<string, { label: string; labelNp: string; color: string; bar: string; border: string; phone: string }> = {
  crisis:                  { label: "Crisis",           labelNp: "Crisis",           color: "bg-rose-100 text-rose-700 border-rose-200",     bar: "from-rose-400 to-rose-500",     border: "border-rose-200/60",   phone: "text-rose-600 hover:text-rose-700" },
  emergency_services:      { label: "Emergency",        labelNp: "Emergency",        color: "bg-rose-100 text-rose-700 border-rose-200",     bar: "from-rose-400 to-red-500",      border: "border-rose-200/60",   phone: "text-rose-600 hover:text-rose-700" },
  child_protection_crisis: { label: "Child Protection", labelNp: "Child Protection", color: "bg-rose-100 text-rose-700 border-rose-200",     bar: "from-rose-400 to-pink-500",     border: "border-rose-200/60",   phone: "text-rose-600 hover:text-rose-700" },
  hospital_crisis_line:    { label: "Hospital Crisis",  labelNp: "Hospital Crisis",  color: "bg-rose-100 text-rose-700 border-rose-200",     bar: "from-rose-400 to-rose-500",     border: "border-rose-200/60",   phone: "text-rose-600 hover:text-rose-700" },
  counseling:              { label: "Counseling",       labelNp: "Counseling",       color: "bg-amber-100 text-amber-700 border-amber-200",  bar: "from-amber-400 to-orange-400",  border: "border-amber-200/60",  phone: "text-amber-600 hover:text-amber-700" },
  counseling_services:     { label: "Counseling",       labelNp: "Counseling",       color: "bg-amber-100 text-amber-700 border-amber-200",  bar: "from-amber-400 to-orange-400",  border: "border-amber-200/60",  phone: "text-amber-600 hover:text-amber-700" },
  counseling_and_referral: { label: "Counseling",       labelNp: "Counseling",       color: "bg-amber-100 text-amber-700 border-amber-200",  bar: "from-orange-400 to-amber-400",  border: "border-amber-200/60",  phone: "text-amber-600 hover:text-amber-700" },
  peer_support_and_advocacy: { label: "Peer Support",  labelNp: "Peer Support",     color: "bg-amber-100 text-amber-700 border-amber-200",  bar: "from-amber-300 to-yellow-400",  border: "border-amber-200/60",  phone: "text-amber-600 hover:text-amber-700" },
  relationship_support:    { label: "Relationship",     labelNp: "Relationship",     color: "bg-amber-100 text-amber-700 border-amber-200",  bar: "from-orange-300 to-amber-400",  border: "border-amber-200/60",  phone: "text-amber-600 hover:text-amber-700" },
  gbv_crisis_support:      { label: "Safety & GBV",    labelNp: "सुरक्षा र GBV",   color: "bg-purple-100 text-purple-700 border-purple-200",bar: "from-purple-400 to-violet-500", border: "border-purple-200/60", phone: "text-purple-600 hover:text-purple-700" },
  gbv_support_services:    { label: "GBV Support",     labelNp: "GBV सहयोग",       color: "bg-purple-100 text-purple-700 border-purple-200",bar: "from-violet-400 to-purple-400", border: "border-purple-200/60", phone: "text-purple-600 hover:text-purple-700" },
  hospital_service:        { label: "Hospital",         labelNp: "अस्पताल",         color: "bg-sky-100 text-sky-700 border-sky-200",        bar: "from-sky-400 to-cyan-400",      border: "border-sky-200/60",    phone: "text-sky-600 hover:text-sky-700" },
  hospital_telehealth:     { label: "Teleconsult",      labelNp: "Teleconsult",      color: "bg-sky-100 text-sky-700 border-sky-200",        bar: "from-cyan-400 to-sky-400",      border: "border-sky-200/60",    phone: "text-sky-600 hover:text-sky-700" },
  private_clinic:          { label: "Private Clinic",   labelNp: "Private Clinic",   color: "bg-sky-100 text-sky-700 border-sky-200",        bar: "from-sky-400 to-blue-400",      border: "border-sky-200/60",    phone: "text-sky-600 hover:text-sky-700" },
  private_practice:        { label: "Private Practice", labelNp: "Private Practice", color: "bg-sky-100 text-sky-700 border-sky-200",        bar: "from-blue-400 to-sky-400",      border: "border-sky-200/60",    phone: "text-sky-600 hover:text-sky-700" },
  regulator:               { label: "Regulator",        labelNp: "Regulator",        color: "bg-stone-100 text-stone-600 border-stone-200",  bar: "from-stone-300 to-stone-400",   border: "border-stone-200/60",  phone: "text-stone-700 hover:text-stone-800" },
  professional_body:       { label: "Professional Body",labelNp: "Professional Body",color: "bg-stone-100 text-stone-600 border-stone-200",  bar: "from-stone-300 to-stone-400",   border: "border-stone-200/60",  phone: "text-stone-700 hover:text-stone-800" },
};

const defaultType = { label: "", labelNp: "", color: "bg-stone-100 text-stone-600 border-stone-200", bar: "from-stone-300 to-stone-400", border: "border-stone-100", phone: "text-stone-800 hover:text-amber-700" };

const UI = {
  en: {
    searchPlaceholder: "Search by name, topic, phone number…",
    all: "All",
    showingAll: (n: number) => `Showing all ${n} resources`,
    showingFiltered: (n: number, total: number) => `${n} of ${total} resources`,
    noPhone: "No phone listed",
    website: "Website",
    noResults: (q: string) => `No results found for "${q}"`,
    clearFilters: "Clear filters",
    footerNote: "All information was sourced directly from official websites and verified on",
    footerDate: "February 25, 2026",
    footerSuffix: ". Hours and availability may change. Always confirm before calling.",
    backLink: "← Back to Manas Setu",
  },
  np: {
    searchPlaceholder: "नाम, विषय वा फोन नम्बरले खोज्नुहोस्…",
    all: "सबै",
    showingAll: (n: number) => `जम्मा ${n} वटा सेवाहरू देखाइँदैछ`,
    showingFiltered: (n: number, total: number) => `${total} मध्ये ${n} वटा सेवाहरू`,
    noPhone: "फोन नम्बर छैन",
    website: "Website",
    noResults: (q: string) => `"${q}" को लागि कुनै नतिजा भेटिएन`,
    clearFilters: "Filter हटाउनुहोस्",
    footerNote: "सबै जानकारी official website बाट लिइएको र प्रमाणित गरिएको मिति:",
    footerDate: "फेब्रुअरी २५, २०२६",
    footerSuffix: "। समय र उपलब्धता परिवर्तन हुन सक्छ। कल गर्नुअघि पुष्टि गर्नुहोस्।",
    backLink: "← Manas Setu मा फर्कनुहोस्",
  },
};

function HelplineCard({ h, isNp }: { h: Helpline; isNp: boolean }) {
  const badge = TYPE_LABELS[h.contact_type] ?? defaultType;
  const primaryPhone = h.phones.filter(p => !p.includes("Ambulance") && !p.includes("(Not"))[0];

  const displayName = h.name.replace(/\s+[–—-]+\s+.+$/, "").trim();

  return (
    <div className={`group relative bg-white rounded-3xl border overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.09)] transition-all duration-500 flex flex-col ${badge.border}`}>
      <div className={`h-1 bg-gradient-to-r ${badge.bar}`} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Badge + hours */}
        <div className="flex items-start justify-between gap-3">
          <span className={`inline-flex items-center text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${badge.color}`}>
            {isNp ? badge.labelNp : badge.label}
          </span>
          {h.hours.toLowerCase().includes("24") && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              24 / 7
            </span>
          )}
        </div>

        {/* Name */}
        <div>
          <h3 className="font-bold text-stone-800 text-base leading-snug group-hover:text-stone-900 transition-colors">
            {displayName}
          </h3>
          {h.location && h.location !== "National" && h.location !== "Not specified" && (
            <p className="text-stone-400 text-xs mt-1 flex items-center gap-1">
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {h.location}
            </p>
          )}
        </div>

        {/* Blurb */}
        <p className="text-stone-500 text-sm leading-relaxed flex-1">{(isNp && h.blurbNp) || h.blurb}</p>

        {/* Cost */}
        {h.cost && h.cost !== "Not specified." && h.cost !== "N/A" && (
          <p className="text-xs text-stone-400 italic">{(isNp && h.costNp) || h.cost}</p>
        )}
      </div>

      {/* Footer: phone + website */}
      <div className="border-t border-stone-100 px-6 py-4 flex items-center justify-between gap-4 bg-stone-50/50">
        {primaryPhone ? (
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
            className={`font-extrabold tracking-tight transition-colors duration-200 leading-none text-xl ${badge.phone}`}
          >
            {primaryPhone}
          </a>
        ) : (
          <span className="text-stone-400 text-sm italic">{isNp ? UI.np.noPhone : UI.en.noPhone}</span>
        )}
        {h.website && (
          <a
            href={h.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-xs text-stone-400 hover:text-amber-600 transition-colors group/link"
          >
            {isNp ? UI.np.website : UI.en.website}
            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export function SupportDirectory({ helplines }: { helplines: Helpline[] }) {
  const { lang } = useLang();
  const isNp = lang === "np";
  const s = UI[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey>("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return helplines.filter((h) => {
      const catMatch =
        category === "all" ||
        CATEGORIES.find((c) => c.key === category)?.types.includes(h.contact_type);
      if (!catMatch) return false;
      if (!q) return true;
      return (
        h.name.toLowerCase().includes(q) ||
        h.blurb.toLowerCase().includes(q) ||
        h.phones.some((p) => p.includes(q)) ||
        h.niches.some((n) => n.toLowerCase().includes(q)) ||
        h.location.toLowerCase().includes(q)
      );
    });
  }, [helplines, query, category]);

  return (
    <div className="space-y-8">
      {/* Search + Filter bar */}
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            placeholder={s.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-2xl pl-12 pr-5 py-4 text-stone-800 placeholder:text-stone-400 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              category === "all"
                ? "bg-stone-900 text-white shadow-md"
                : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            {s.all} ({helplines.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = helplines.filter((h) => cat.types.includes(h.contact_type)).length;
            return (
              <button
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  category === cat.key
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">{cat.icon}</svg>
                {isNp ? cat.labelNp : cat.label}
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                  category === cat.key ? "bg-white/20 text-white" : "bg-stone-100 text-stone-500"
                }`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-stone-400">
        {filtered.length === helplines.length
          ? s.showingAll(filtered.length)
          : s.showingFiltered(filtered.length, helplines.length)}
      </p>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((h) => (
            <HelplineCard key={h.id} h={h} isNp={isNp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 space-y-3">
          <p className="text-4xl">🌿</p>
          <p className="text-stone-500 text-lg">{s.noResults(query)}</p>
          <button onClick={() => { setQuery(""); setCategory("all"); }} className="text-amber-600 text-sm font-semibold hover:underline">
            {s.clearFilters}
          </button>
        </div>
      )}

      {/* Footer note */}
      <div className="bg-white rounded-2xl border border-stone-100 p-6 text-center space-y-2 shadow-sm">
        <p className="text-stone-500 text-sm leading-relaxed max-w-xl mx-auto">
          {s.footerNote} <span className="font-semibold text-stone-700">{s.footerDate}</span>{s.footerSuffix}
        </p>
        <Link href="/" className="inline-flex items-center gap-1 text-amber-600 text-sm font-semibold hover:underline">
          {s.backLink}
        </Link>
      </div>
    </div>
  );
}
