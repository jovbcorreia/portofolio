"use client";

import { useInView } from "react-intersection-observer";
import { skills, techStack } from "@/lib/data";

function SkillBar({
  name,
  icon,
  level,
  delay,
  inView,
}: {
  name: string;
  icon: string;
  level: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="flex items-center gap-2 text-text font-medium" style={{ fontFamily: "var(--font-body)" }}>
          <span className="text-base leading-none">{icon}</span>
          {name}
        </span>
        <span className="text-accent font-mono text-xs" style={{ fontFamily: "var(--font-mono)" }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent2 transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

const categories = [
  { key: "frontend", label: "Frontend", icon: "⚛️" },
  { key: "backend", label: "Backend", icon: "⚙️" },
  { key: "database", label: "Database", icon: "🗄️" },
  { key: "devops", label: "DevOps", icon: "🚀" },
] as const;

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="py-32 relative bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent font-mono text-sm" style={{ fontFamily: "var(--font-mono)" }}>
            02.
          </span>
          <h2 className="text-4xl font-black text-text" style={{ fontFamily: "var(--font-display)" }}>
            Skills
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Tech Stack Badges */}
        <div
          className={`flex flex-wrap gap-3 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="tech-card flex items-center gap-2 border border-border bg-surface rounded-lg px-4 py-2"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-sm">{tech.icon}</span>
              <span className="text-sm text-text" style={{ fontFamily: "var(--font-body)" }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat, ci) => {
            const catSkills = skills[cat.key];
            return (
              <div
                key={cat.key}
                className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${ci * 150}ms` }}
              >
                <h3
                  className="text-lg font-bold text-text mb-6 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </h3>
                <div className="space-y-4">
                  {catSkills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                      delay={ci * 150 + si * 100}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
