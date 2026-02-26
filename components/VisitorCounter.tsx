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
    <div className="bg-stone-800/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-stone-700/50 shadow-xl animate-float">
      <p className="text-amber-300/80 text-[10px] font-semibold tracking-widest uppercase mb-2 text-center">
        Lifetime Visitors
      </p>
      <div className="flex items-center justify-center gap-1" aria-label={`${count} lifetime visitors`}>
        {digits.map((d, i) => (
          <span
            key={i}
            className={`inline-flex items-center justify-center font-bold transition-all duration-300 ${
              d === ","
                ? "w-2 text-amber-200/60 text-sm"
                : "w-8 h-9 rounded-lg bg-stone-700/80 text-amber-100 text-lg shadow-inner"
            }`}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
