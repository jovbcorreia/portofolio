"use client";

import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-4 mb-16">
            <span
              className="text-accent font-mono text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              01.
            </span>
            <h2
              className="text-4xl font-black text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About Me
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Photo */}
          <div
            className={`md:col-span-2 flex justify-center transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-accent/40 glow-green">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                fill
                className="object-cover object-top"
                sizes="256px"
              />
            </div>
          </div>

          {/* Text + terminal card */}
          <div
            className={`md:col-span-3 space-y-6 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {personalInfo.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-dim leading-relaxed text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {paragraph}
              </p>
            ))}

            {/* Terminal card */}
            <div className="border border-border rounded-lg overflow-hidden glow-green">
              <div className="bg-surface border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span
                  className="ml-2 text-xs text-muted font-mono"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  whoami.sh
                </span>
              </div>
              <div
                className="bg-bg p-5 font-mono text-sm space-y-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <div className="text-muted">
                  <span className="text-accent">$ </span>whoami
                </div>
                <div className="text-text">João Vilas-Boas</div>
                <div className="text-muted mt-2">
                  <span className="text-accent">$ </span>cat info.json
                </div>
                <div className="text-dim">
                  <span className="text-accent2">{"{"}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-accent">"role"</span>:{" "}
                  <span className="text-text">"Full Stack Dev"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-accent">"location"</span>:{" "}
                  <span className="text-text">"Portugal 🇵🇹"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-accent">"languages"</span>:{" "}
                  <span className="text-text">"PT / FR / EN / ES"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-accent">"status"</span>:{" "}
                  <span className="text-accent">"available"</span>
                  <br />
                  <span className="text-accent2">{"}"}</span>
                </div>
                <div className="text-muted">
                  <span className="text-accent">$ </span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent border border-accent/30 px-5 py-2.5 rounded font-mono text-sm hover:bg-accent/10 transition-all"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dim hover:text-accent transition-colors font-mono text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
