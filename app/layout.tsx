import type { Metadata } from "next";
import localFont from "next/font/local";
import { Mukta } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

const generalSans = localFont({
  src: [
    { path: "../public/fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manas Setu | A Bridge to a Calmer Mind",
  description:
    "Free mental health tools for anxiety, stress, grief, and the hard days in between. Built for Nepal, open to everyone.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Manas Setu | A Bridge to a Calmer Mind",
    description:
      "Free mental health tools for anxiety, stress, grief, and the hard days in between. Built for Nepal, open to everyone.",
    images: [{ url: "/logo-square.png", width: 1024, height: 1024 }],
    siteName: "Manas Setu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} ${mukta.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
