import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CopyButton } from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Donate | Manas Setu",
  description:
    "Help keep Manas Setu free and growing. Every contribution goes directly toward making mental health resources more accessible in Nepal.",
};

const IMPACTS = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M5 12H3a9 9 0 1018 0h-2M12 3v9m0 0l-3-3m3 3l3-3" />
    ),
    title: "Server costs",
    description: "Keep the site online and fast: hosting, domain, and infrastructure so anyone can access it anytime.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    title: "New tools & resources",
    description: "Research, write, and publish additional mental health guides, self-help tools, and a verified helpline directory, all free.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: "Nepali language",
    description: "Translate all resources into Nepali so no one is left out due to language barriers.",
  },
];

const DONATION_METHODS = [
  {
    name: "eSewa",
    logo: "/logo-esewa.png",
    logoWidth: 120,
    logoHeight: 44,
    logoBg: "bg-white",
    cardBg: "bg-white border-emerald-300",
    accentBar: "bg-emerald-400",
    codeColor: "text-emerald-800",
    dark: false,
    id: "9825634327",
    note: "Open eSewa → Send Money → enter the number above",
  },
  {
    name: "Khalti",
    logo: "/logo-khalti.png",
    logoWidth: 120,
    logoHeight: 61,
    logoBg: "bg-white",
    cardBg: "bg-white border-purple-300",
    accentBar: "bg-purple-400",
    codeColor: "text-stone-900",
    dark: false,
    id: "9825634327",
    note: "Open Khalti → Send Money → enter the number above",
  },
  {
    name: "Nabil Bank",
    logo: "/logo-nabil.png",
    logoWidth: 120,
    logoHeight: 67,
    logoBg: "bg-white",
    cardBg: "bg-white border-green-300",
    accentBar: "bg-green-500",
    codeColor: "text-stone-900",
    dark: false,
    id: "13110017502022",
    note: "Account name: Gaurav Kunwar",
  },
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-amber-200 overflow-x-hidden">

      {/* Dark hero section */}
      <div className="relative overflow-hidden bg-stone-900 text-white pb-24 md:pb-32">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_60%)] animate-float-slow transform-gpu pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_60%)] animate-float-slow [animation-delay:2s] transform-gpu pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-900/80 pointer-events-none" />

        <Header />

        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-5 pt-20 md:pt-24 animate-fade-in-up selection:text-stone-900 selection:bg-amber-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-amber-200 text-sm font-medium tracking-wide">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Support the mission
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-sm">
            Keep mental health
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 selection:text-stone-900 selection:bg-amber-300">
              free for everyone.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-xl drop-shadow-sm">
            Manas Setu will always be free. Your donation helps us reach more people, add more languages, and keep the lights on.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FDFBF7]" />
          </svg>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pb-24 md:pb-32 -mt-16 md:-mt-20 relative z-20 space-y-20">

        {/* What your donation does */}
        <section className="animate-fade-in-up [animation-delay:100ms]">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] overflow-hidden">
            <div className="p-8 md:p-10 border-b border-stone-100">
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">
                Where it goes
              </h2>
              <p className="text-stone-500 mt-2">
                Every rupee goes toward keeping the site online and publishing more free tools and resources.
              </p>
            </div>
            <div className="divide-y divide-stone-100">
              {IMPACTS.map((item) => (
                <div key={item.title} className="flex gap-5 items-start p-6 md:p-8 hover:bg-stone-50/60 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">{item.title}</h3>
                    <p className="text-stone-500 text-sm mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation methods */}
        <section className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">
              How to donate
            </h2>
            <p className="text-stone-500">
              Any amount helps. Choose whatever is easiest for you.
            </p>
          </div>

          <div className="space-y-4">
            {DONATION_METHODS.map((method) => (
              <div
                key={method.name}
                className={`rounded-3xl border-2 overflow-hidden shadow-sm ${method.cardBg}`}
              >
                {/* Accent bar */}
                <div className={`h-1 w-full ${method.accentBar}`} />

                <div className="p-6 md:p-8 space-y-5">
                  {/* Logo */}
                  <div className={`inline-flex rounded-xl overflow-hidden ${method.logoBg === "bg-white" ? "" : "p-3 " + method.logoBg}`}>
                    <Image
                      src={method.logo}
                      alt={method.name}
                      width={method.logoWidth}
                      height={method.logoHeight}
                      className="h-10 w-auto object-contain"
                    />
                  </div>

                  {/* ID + copy */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-stone-400">
                        {method.name === "Nabil Bank" ? "Account number" : "Mobile number"}
                      </p>
                      <code className={`text-2xl md:text-3xl font-extrabold tracking-tight ${method.codeColor}`}>
                        {method.id}
                      </code>
                    </div>
                    <CopyButton text={method.id} />
                  </div>

                  <p className="text-sm text-stone-500">
                    {method.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing note */}
        <section className="text-center space-y-6 py-8 animate-fade-in-up [animation-delay:300ms]">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div className="space-y-3 max-w-md mx-auto">
            <h2 className="text-2xl font-extrabold text-stone-800">Thank you.</h2>
            <p className="text-stone-500 leading-relaxed">
              Every rupee means one more person can find a calmer mind. We&rsquo;re grateful for your support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-800 transition-colors"
            >
              Back to Manas Setu
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Find Support
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
