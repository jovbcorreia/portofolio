"use client";

import { useInView } from "react-intersection-observer";
import { experience } from "@/lib/data";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-32 relative bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent font-mono text-sm" style={{ fontFamily: "var(--font-mono)" }}>
            04.
          </span>
          <h2 className="text-4xl font-black text-text" style={{ fontFamily: "var(--font-display)" }}>
            Experience
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-8 md:pl-20 pb-12 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-[19px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg" />

                {/* Card */}
                <div className="border border-border rounded-xl p-6 bg-surface/50 hover:border-accent/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-lg font-bold text-text group-hover:text-accent transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {exp.role}
                      </h3>
                      <span className="text-accent2 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                        {exp.company}
                      </span>
                    </div>
                    <span
                      className="text-xs text-muted font-mono border border-border px-3 py-1.5 rounded whitespace-nowrap"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-dim text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-accent/70 bg-accent/5 border border-accent/10 px-2.5 py-1 rounded font-mono"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
