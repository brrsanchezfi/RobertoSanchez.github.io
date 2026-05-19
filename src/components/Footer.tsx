"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-card">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>
            <div>
              <div className="font-mono text-sm text-white">Roberto Sánchez</div>
              <div className="text-xs text-slate-500">Data Engineer · DataKnow</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 justify-center">
            {["#about", "#skills", "#experience", "#dkops", "#projects", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="hover:text-brand-cyan transition-colors capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/brrsanchezfi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-cyan transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/robertosanchez-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-blue transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:brrsanchezfi@gmail.com"
              className="text-slate-500 hover:text-brand-purple transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs font-mono">
            © {year} Roberto Sánchez · Bogotá / Madrid
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Built with{" "}
            <span className="text-brand-cyan">Next.js</span> ·{" "}
            <span className="text-brand-blue">TailwindCSS</span> ·{" "}
            <span className="text-brand-purple">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
