import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Manas Setu",
  description:
    "Why Manas Setu exists, who built it, and where it's going. A free mental health resource built for Nepal.",
};

export default function AboutPage() {
  return <AboutContent />;
}
