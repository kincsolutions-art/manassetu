import { HeroSection } from "@/components/HeroSection";
import { HelplinesSection } from "@/components/HelplinesSection";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-amber-200 overflow-x-hidden">

      <FloatingWidgets />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── HELPLINES BRIDGE ───────────────────────────────── */}
      <main id="helplines">
        <HelplinesSection />

        {/* ── RESOURCE EXPLORER ────────────────────────────────── */}
        <section id="explore" className="relative max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-16 pb-16 md:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-amber-50/30 to-[#FDFBF7] pointer-events-none -z-10" />
          <ResourceExplorer />
        </section>

        {/* ── QUOTE ──────────────────────────────────────────── */}
        <QuoteSection />
      </main>

      <Footer />
    </div>
  );
}
