"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent font-mono text-sm" style={{ fontFamily: "var(--font-mono)" }}>
            03.
          </span>
          <h2 className="text-4xl font-black text-text" style={{ fontFamily: "var(--font-display)" }}>
            Projects
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <div
                key={project.id}
                className={`group border border-border rounded-xl p-8 bg-surface/50 hover:border-accent/40 hover:bg-surface transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-accent/50 font-mono text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                        {project.year}
                      </span>
                      <span className="text-xs border border-accent/30 text-accent px-2 py-0.5 rounded font-mono">
                        Featured
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-dim text-sm leading-relaxed mb-4 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-dim bg-border/60 px-2.5 py-1 rounded font-mono"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-dim hover:text-accent transition-colors text-sm font-mono"
                      style={{ fontFamily: "var(--font-mono)" }}
                      title="GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-dim hover:text-accent transition-colors text-sm font-mono"
                        style={{ fontFamily: "var(--font-mono)" }}
                        title="Live Demo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        {showAll && (
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <div
                  key={project.id}
                  className="group border border-border rounded-xl p-6 bg-surface/30 hover:border-accent/30 hover:bg-surface/50 transition-all duration-300 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-accent/60 font-mono text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                      {project.year}
                    </span>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-muted hover:text-accent transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-text mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                    {project.title}
                  </h3>
                  <p className="text-dim text-xs leading-relaxed mb-4 flex-1" style={{ fontFamily: "var(--font-body)" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-muted font-mono" style={{ fontFamily: "var(--font-mono)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Toggle button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-mono text-sm text-accent border border-accent/30 px-8 py-3 rounded hover:bg-accent/10 transition-all duration-300"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {showAll ? "Show Less ↑" : "Show More Projects ↓"}
          </button>
        </div>
      </div>
    </section>
  );
}
