"use client";

import { useEffect, useRef, useState } from "react";

const POLL_INTERVAL = 15_000;

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    fetch("/api/visitors", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});

    const interval = setInterval(() => {
      fetch("/api/visitors")
        .then((r) => r.json())
        .then((d) => setCount(d.count))
        .catch(() => {});
    }, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (count === null) return null;

  const digits = count.toLocaleString().split("");

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 border border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <p className="text-stone-400 text-[10px] font-semibold tracking-widest uppercase mb-2 text-center">
        Lifetime Visitors
      </p>
      <div className="flex items-center justify-center gap-1" aria-label={`${count} lifetime visitors`}>
        {digits.map((d, i) => (
          <span
            key={i}
            className={`inline-flex items-center justify-center font-bold transition-all duration-300 ${
              d === ","
                ? "w-2 text-stone-300 text-sm"
                : "w-7 h-8 rounded-lg bg-stone-100 text-stone-700 text-base shadow-inner"
            }`}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
