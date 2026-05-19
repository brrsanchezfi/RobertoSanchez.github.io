"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow grid-bg">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Terminal badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-card border border-brand-border rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-slate-400">
                disponible para proyectos
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Hola, soy{" "}
              <span className="gradient-text block mt-1">
                Roberto Sánchez
              </span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-6 font-mono min-h-[2rem]"
            >
              <span className="text-brand-cyan">$ </span>
              <TypeAnimation
                sequence={[
                  "Data Engineer",
                  2000,
                  "Cloud Architect · Azure",
                  2000,
                  "Databricks Expert",
                  2000,
                  "DataOps · DevOps",
                  2000,
                  "Big Data Specialist",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
              <span className="animate-blink text-brand-cyan">_</span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Ingeniero de Datos e Ingeniero Electricista con experiencia en
              soluciones Big Data, arquitecturas lakehouse y automatización de
              pipelines en{" "}
              <span className="text-brand-cyan">Databricks</span> y{" "}
              <span className="text-brand-blue">Azure</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a href="#dkops" className="btn-primary">
                Ver DKOps
                <span className="text-xs opacity-70">★ proyecto principal</span>
              </a>
              <a href="/cv-roberto-sanchez.pdf" download className="btn-outline">
                <Download size={16} />
                Descargar CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/brrsanchezfi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/robertosanchez-data/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:brrsanchezfi@gmail.com"
                className="text-slate-500 hover:text-brand-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
              <div className="h-4 w-px bg-brand-border" />
              <span className="font-mono text-xs text-slate-600">
                brrsanchezfi@gmail.com
              </span>
            </motion.div>
          </div>

          {/* Right: Profile photo + Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 max-w-md w-full"
          >
            {/* Profile photo */}
            <div className="flex justify-center mb-5">
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-brand-cyan/40 glow-cyan">
                  <Image
                    src="/profile.jpg"
                    alt="Roberto Sánchez"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Online indicator */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-brand-dark" />
              </div>
            </div>

            <div className="terminal-window glow-cyan">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-3 font-mono text-xs text-slate-500">
                  roberto@dataknow ~ whoami
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-3">
                <div className="flex gap-2">
                  <span className="text-brand-cyan">$</span>
                  <span className="text-slate-300">cat profile.json</span>
                </div>
                <div className="text-slate-400 pl-4 space-y-1 text-xs leading-relaxed">
                  <div>
                    <span className="text-brand-purple">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-brand-blue">"nombre"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-green-400">"Roberto Sánchez"</span>
                    <span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-brand-blue">"rol"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-green-400">"Data Engineer"</span>
                    <span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-brand-blue">"empresa"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-green-400">"DataKnow"</span>
                    <span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-brand-blue">"master"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-green-400">"UCM Madrid"</span>
                    <span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-brand-blue">"certs"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-yellow-400">["AZ-104", "DP-204", "AZ-900", "DP-900"]</span>
                    <span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-brand-blue">"stack"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-yellow-400">
                      ["Databricks", "Azure", "Spark", "Python"]
                    </span>
                    <span className="text-slate-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-brand-blue">"proyecto"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-brand-cyan">"DKOps"</span>
                  </div>
                  <div>
                    <span className="text-brand-purple">{"}"}</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <span className="text-brand-cyan">$</span>
                  <span className="text-slate-500 animate-blink">_</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: "1+", label: "año en DataKnow" },
                { value: "7+", label: "clientes enterprise" },
                { value: "4", label: "certs Microsoft" },
              ].map((stat) => (
                <div key={stat.label} className="card text-center py-3 px-2">
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="text-xs text-slate-600 font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
