"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayed === current) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
        return;
      }
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline" />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #6ee7b7, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span
              className="text-xs text-accent font-mono"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Available for new projects
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-6xl md:text-8xl font-black mb-4 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-text">João</span>
            <br />
            <span className="gradient-text">Vilas-Boas</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="text-2xl md:text-3xl text-dim mb-6 h-10"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="text-accent/60">$ </span>
            <span className="text-text">{displayed}</span>
            <span className="text-accent animate-pulse">|</span>
          </div>

          {/* Bio */}
          <p
            className="text-dim text-lg max-w-2xl mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {personalInfo.bio[0]}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-accent text-bg font-bold px-8 py-3 rounded font-mono text-sm hover:bg-accent/90 transition-all duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-border text-dim hover:border-accent hover:text-accent px-8 py-3 rounded font-mono text-sm transition-all duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Contact Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dim hover:text-accent text-sm transition-colors duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dim/40">
            <span className="text-xs font-mono">scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent/40 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Technologies" },
            { value: "4", label: "Languages" },
            { value: "2", label: "Companies" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-border rounded-lg p-4 bg-surface/50 backdrop-blur text-center"
            >
              <div
                className="text-3xl font-black text-accent mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-dim font-mono tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
