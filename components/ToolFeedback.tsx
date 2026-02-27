"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageContext";

const t = {
  en: { label: "Helpful?" },
  np: { label: "उपयोगी?" },
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
    if (voted === v) {
      const prev = voted;
      setVoted(null);
      localStorage.removeItem(`feedback:${toolId}`);
      setCounts((c) => ({ ...c, [prev]: Math.max(c[prev] - 1, 0) }));
      postFeedback(toolId, prev, true).then((d) => { if (d) setCounts({ yes: d.yes, no: d.no }); });
      return;
    }
    if (voted) {
      const prev = voted;
      setCounts((c) => ({ ...c, [prev]: Math.max(c[prev] - 1, 0), [v]: c[v] + 1 }));
      postFeedback(toolId, prev, true);
      postFeedback(toolId, v).then((d) => { if (d) setCounts({ yes: d.yes, no: d.no }); });
    } else {
      setCounts((c) => ({ ...c, [v]: c[v] + 1 }));
      postFeedback(toolId, v).then((d) => { if (d) setCounts({ yes: d.yes, no: d.no }); });
    }
    setVoted(v);
    localStorage.setItem(`feedback:${toolId}`, v);
  };

  return (
    <div className="border-t border-stone-100 pt-3 mt-1 flex items-center justify-between gap-2">
      <span className="text-[11px] text-stone-400 font-medium">{s.label}</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => vote("yes")}
          className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 ${
            voted === "yes"
              ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
              : "text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 border border-transparent"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          {counts.yes > 0 && counts.yes}
        </button>
        <button
          onClick={() => vote("no")}
          className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 ${
            voted === "no"
              ? "bg-stone-200 text-stone-700 border border-stone-300"
              : "text-stone-400 hover:text-stone-600 hover:bg-stone-50 border border-transparent"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
          </svg>
          {counts.no > 0 && counts.no}
        </button>
      </div>
    </div>
  );
}
