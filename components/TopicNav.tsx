"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { resources } from "@/data/resources";
import { useLang } from "./LanguageContext";

export function TopicNav({ currentSlug }: { currentSlug: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const isNp = lang === "np";

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeIndex = resources.findIndex(r => r.slug === currentSlug);
    if (activeIndex < 0) return;

    const activeBtn = container.children[activeIndex] as HTMLElement | undefined;
    if (!activeBtn) return;

    // Position active pill as the second visible item
    const firstChild = container.children[0] as HTMLElement | undefined;
    const gap = 8; // gap-2 = 8px
    const firstWidth = firstChild ? firstChild.offsetWidth + gap : 0;
    const scrollLeft = activeBtn.offsetLeft - firstWidth;
    container.scrollLeft = Math.max(0, scrollLeft);
  }, [currentSlug]);

  return (
    <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
      {resources.map((r) => (
        <Link
          key={r.slug}
          href={`/resources/${r.slug}`}
          className={`shrink-0 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
            r.slug === currentSlug
              ? "bg-amber-300 text-stone-900"
              : "bg-white/10 text-stone-300 hover:bg-white/20 hover:text-white border border-white/10"
          }`}
        >
          {(isNp && r.titleNp) || r.title}
        </Link>
      ))}
    </div>
  );
}
