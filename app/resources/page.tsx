import type { Metadata } from "next";
import { ResourcesContent } from "@/components/ResourcesContent";

export const metadata: Metadata = {
  title: "Resources | Manas Setu",
  description:
    "Free mental health tools for anxiety, exam stress, grief, loneliness, trauma, and more. Pick what you're going through right now.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
