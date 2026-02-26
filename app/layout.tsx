import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
