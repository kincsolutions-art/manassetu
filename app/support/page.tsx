import type { Metadata } from "next";
import { helplines } from "@/data/helplines";
import { SupportDirectory } from "@/components/SupportDirectory";
import { SupportHero } from "@/components/SupportHero";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Find Support | Manas Setu",
  description:
    "A verified directory of mental health helplines, counselors, hospitals, and crisis services in Nepal.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-amber-200 overflow-x-hidden">
      <SupportHero helplineCount={helplines.length} />

      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32 -mt-16 relative z-20 animate-fade-in-up [animation-delay:200ms]">
        <SupportDirectory helplines={helplines} />
      </section>

      <Footer />
    </div>
  );
}
