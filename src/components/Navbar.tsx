"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "DKOps", href: "#dkops" },
  { label: "Proyectos", href: "#projects" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-xl border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center">
            <Terminal size={16} className="text-white" />
          </div>
          <span className="font-mono text-sm text-slate-300 group-hover:text-brand-cyan transition-colors">
            <span className="text-brand-cyan">~/</span>roberto
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link relative py-1 ${
                active === href.slice(1) ? "text-brand-cyan" : ""
              }`}
            >
              {label}
              {active === href.slice(1) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-brand-cyan"
                />
              )}
            </a>
          ))}
        </nav>

        {/* CV Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/cv-roberto-sanchez.pdf"
            download
            className="btn-primary text-sm py-2 px-4"
          >
            Descargar CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-brand-cyan transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-card border-b border-brand-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-link text-base py-1"
                >
                  {label}
                </a>
              ))}
              <a
                href="/cv-roberto-sanchez.pdf"
                download
                className="btn-primary text-sm py-2 px-4 w-fit"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
