"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-accent font-bold text-lg tracking-tight"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="text-dim">~/</span>jcorreia
          <span className="cursor text-accent" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-dim hover:text-accent transition-colors duration-300 link-hover"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="text-accent/50 font-mono text-xs mr-1">
                0{i + 1}.
              </span>
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono border border-accent/40 text-accent px-4 py-2 rounded hover:bg-accent/10 transition-all duration-300"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dim hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-dim hover:text-accent transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-accent/50 font-mono text-xs mr-2">
                0{i + 1}.
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
