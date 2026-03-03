"use client";

import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span
            className="text-accent font-mono text-sm block mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            05. what's next?
          </span>
          <h2
            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get In{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p
            className="text-dim text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question, a proposal, or just want to say hi —
            my inbox is always open!
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-2 bg-accent text-bg font-bold px-10 py-4 rounded-lg font-mono text-base hover:bg-accent/90 transition-all duration-300"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border text-dim hover:border-accent2 hover:text-accent2 px-8 py-4 rounded-lg font-mono text-base transition-all duration-300"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Social links row */}
        <div
          className={`flex justify-center gap-6 mb-16 transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          {[
            {
              label: "GitHub",
              href: personalInfo.github,
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href: personalInfo.linkedin,
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "Email",
              href: `mailto:${personalInfo.email}`,
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-all duration-300 hover:-translate-y-1"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8">
          <p
            className="text-muted text-xs font-mono"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Designed & Built by{" "}
            <span className="text-accent">João Vilas-Boas Correia</span> · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
