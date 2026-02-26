import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";

export const metadata: Metadata = {
  title: "About | Manas Setu",
  description:
    "Why Manas Setu exists, who built it, and where it's going. A free mental health resource built for Nepal.",
};

const VALUES = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
    title: "Always free",
    description:
      "Mental health support shouldn't have a paywall. Every tool, guide, and helpline on Manas Setu is free, forever.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    title: "Verified information",
    description:
      "Every helpline, every resource is verified. We check numbers, hours, and availability so you don't have to worry about outdated info.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "Built for Nepal",
    description:
      "Not a copy-paste from Western resources. Built with Nepal's context, culture, and languages in mind.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
    title: "No judgment",
    description:
      "Whatever you're going through, big or small, it's valid. This space exists for you, with no labels and no shame.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-amber-200 overflow-x-hidden">
      <FloatingWidgets />

      {/* Hero */}
      <div className="relative overflow-hidden bg-stone-900 text-white pb-24 md:pb-32">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_60%)] animate-float-slow transform-gpu pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.12)_0%,transparent_60%)] animate-float-slow [animation-delay:2s] transform-gpu pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-900/80 pointer-events-none" />

        <Header />

        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-5 pt-20 md:pt-24 animate-fade-in-up selection:text-stone-900 selection:bg-amber-300">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-amber-200 text-sm font-medium tracking-wide">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Our story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 selection:text-stone-900 selection:bg-amber-300">
              About Manas Setu
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-xl">
            A small project with a simple belief: everyone deserves access to
            mental health support, without cost, stigma, or barriers.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
          <svg
            className="relative block w-full h-[40px] md:h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-[#FDFBF7]"
            />
          </svg>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pb-24 md:pb-32 -mt-16 md:-mt-20 relative z-20 space-y-20">
        {/* The Why */}
        <section className="animate-fade-in-up [animation-delay:100ms]">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">
              Why this exists
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                In Nepal, talking about mental health is still difficult. There&rsquo;s
                stigma, there&rsquo;s silence, and when someone finally decides to look
                for help, the information is scattered, outdated, or locked behind
                a language barrier.
              </p>
              <p>
                Manas Setu was born from a simple frustration: why is it so hard to
                find reliable mental health support in your own country? We wanted
                one place where anyone (a student before exams, a parent after a
                loss, a teenager who can&rsquo;t sleep) could find tools that actually
                help.
              </p>
              <p>
                The name means{" "}
                <span className="font-semibold text-stone-800">
                  &ldquo;bridge of the mind&rdquo;
                </span>{" "}
                in Sanskrit. That&rsquo;s exactly what this is: a bridge between
                struggling in silence and finding a way forward.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">
            What we believe
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-stone-100 p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {v.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-stone-800">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Built by */}
        <section className="animate-fade-in-up [animation-delay:300ms]">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.05)] p-8 md:p-10 space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800 tracking-tight">
              Built by
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0">
                <Image
                  src="/gaurav.png"
                  alt="Gaurav Kunwar"
                  width={280}
                  height={350}
                  className="rounded-2xl object-cover w-[140px] h-[175px] sm:w-[160px] sm:h-[200px] shadow-md"
                />
              </div>
              <div className="space-y-1">
                <a
                  href="https://www.linkedin.com/in/gauravkunwar108/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-stone-800 hover:text-amber-600 transition-colors"
                >
                  Gaurav Kunwar
                </a>
                <p className="text-stone-400 text-sm">Founder &amp; Builder</p>
              </div>
            </div>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                I was diagnosed with bipolar disorder, borderline personality
                disorder, severe depression, and severe anxiety. I&rsquo;ve been on
                medication for 12 years. I know what it feels like to search
                for help at 2 AM and find nothing, or worse, find something
                that makes you feel more alone.
              </p>
              <p>
                Manas Setu exists because I needed it and it didn&rsquo;t exist. I
                built what I wished someone had built for me: a quiet place
                with real tools, real numbers, and zero judgment.
              </p>
              <p>
                This isn&rsquo;t a company. There&rsquo;s no team of 50. It&rsquo;s one person,
                a laptop, and a lot of late nights, driven by the belief that
                even a small tool, if it reaches the right person at the right
                time, can change everything.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6 py-8 animate-fade-in-up [animation-delay:400ms]">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-800">
            Want to help?
          </h2>
          <p className="text-stone-500 text-lg font-light max-w-md mx-auto">
            Whether it&rsquo;s sharing the site, reporting an error, or contributing a
            resource, every bit helps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/donate"
              className="bg-stone-900 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Support the mission
            </Link>
            <Link
              href="/support"
              className="bg-white border-2 border-stone-200 text-stone-700 font-semibold px-7 py-3.5 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all duration-300"
            >
              Explore resources
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
