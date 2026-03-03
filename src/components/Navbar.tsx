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

const LOGO_TEXT = "jovbcorreia";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");

  // Typewriter on mount
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(LOGO_TEXT.slice(0, i + 1));
      i++;
      if (i === LOGO_TEXT.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

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
        {/* Logo with typewriter */}
        <a
          href="#"
          className="font-mono text-text font-bold text-lg tracking-tight"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="text-dim">~/</span>
          {displayed}
          <span className="cursor text-accent" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group px-3 py-1.5 rounded-md text-sm text-dim hover:text-white transition-all duration-200 hover:scale-110 origin-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {/* Spotlight background */}
              <span
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.04), inset 0 0 0 1px rgba(255,255,255,0.07)",
                }}
              />
              <span className="relative">
                <span
                  className="text-white/20 group-hover:text-white/60 font-mono text-xs mr-1 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  0{i + 1}.
                </span>
                {link.label}
              </span>
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-xs font-mono border border-white/20 text-dim px-4 py-2 rounded hover:border-white/50 hover:text-white hover:bg-white/5 hover:scale-105 transition-all duration-200"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dim hover:text-text transition-colors"
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
              className="block text-dim hover:text-white transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-white/20 font-mono text-xs mr-2" style={{ fontFamily: "var(--font-mono)" }}>
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
