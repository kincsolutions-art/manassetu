"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("visitor_counted");

    if (alreadyCounted) {
      fetch("/api/visitors")
        .then((r) => r.json())
        .then((d) => setCount(d.count));
    } else {
      fetch("/api/visitors", { method: "POST" })
        .then((r) => r.json())
        .then((d) => {
          setCount(d.count);
          sessionStorage.setItem("visitor_counted", "1");
        });
    }
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
            className={`inline-flex items-center justify-center font-bold ${
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
