"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageContext";

const t = {
  en: {
    question: "Was this helpful?",
    yes: "Yes",
    no: "Not really",
    thanks: "Thanks for your feedback!",
    undo: "Undo",
  },
  np: {
    question: "यो उपयोगी भयो?",
    yes: "भयो",
    no: "भएन",
    thanks: "प्रतिक्रियाको लागि धन्यवाद!",
    undo: "फिर्ता",
  },
};

function postFeedback(tool: string, vote: string, undo?: boolean) {
  return fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tool, vote, ...(undo ? { undo: true } : {}) }),
  })
    .then((r) => r.json())
    .catch(() => null);
}

export function ToolFeedback({ toolId }: { toolId: string }) {
  const { lang } = useLang();
  const s = t[lang];
  const [counts, setCounts] = useState({ yes: 0, no: 0 });
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(`feedback:${toolId}`);
    if (stored === "yes" || stored === "no") setVoted(stored);

    fetch(`/api/feedback?tool=${encodeURIComponent(toolId)}`)
      .then((r) => r.json())
      .then((d) => setCounts({ yes: d.yes, no: d.no }))
      .catch(() => {});
  }, [toolId]);

  const vote = (v: "yes" | "no") => {
    if (voted) return;
    setVoted(v);
    localStorage.setItem(`feedback:${toolId}`, v);
    setCounts((prev) => ({ ...prev, [v]: prev[v] + 1 }));
    postFeedback(toolId, v).then((d) => { if (d) setCounts({ yes: d.yes, no: d.no }); });
  };

  const undo = () => {
    if (!voted) return;
    const prev = voted;
    setVoted(null);
    localStorage.removeItem(`feedback:${toolId}`);
    setCounts((c) => ({ ...c, [prev]: Math.max(c[prev] - 1, 0) }));
    postFeedback(toolId, prev, true).then((d) => { if (d) setCounts({ yes: d.yes, no: d.no }); });
  };

  const total = counts.yes + counts.no;
  const yesPercent = total > 0 ? Math.round((counts.yes / total) * 100) : 0;

  return (
    <div className="border-t border-stone-100 pt-5 mt-2">
      {voted ? (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="text-stone-400 text-sm font-medium">{s.thanks}</p>
            <button
              onClick={undo}
              className="text-xs text-stone-400 hover:text-amber-600 underline underline-offset-2 transition-colors"
            >
              {s.undo}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 text-xs text-stone-400">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span className="font-semibold text-stone-500">{counts.yes}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-stone-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                </svg>
                <span className="font-semibold text-stone-500">{counts.no}</span>
              </span>
            </div>
            {total > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                    style={{ width: `${yesPercent}%` }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-stone-400">{yesPercent}%</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-stone-400 text-sm font-medium">{s.question}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => vote("yes")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              {s.yes}
              {counts.yes > 0 && <span className="text-emerald-400 font-bold">{counts.yes}</span>}
            </button>
            <button
              onClick={() => vote("no")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-stone-50 text-stone-500 border border-stone-200 hover:bg-stone-100 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
              </svg>
              {s.no}
              {counts.no > 0 && <span className="text-stone-400 font-bold">{counts.no}</span>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
