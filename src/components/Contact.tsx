"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Phone, ExternalLink, Send } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "brrsanchezfi@gmail.com",
    href: "mailto:brrsanchezfi@gmail.com",
    color: "brand-purple",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "in/robertosanchez-data",
    href: "https://www.linkedin.com/in/robertosanchez-data/",
    color: "brand-blue",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/brrsanchezfi",
    href: "https://github.com/brrsanchezfi",
    color: "brand-cyan",
  },
  {
    icon: <Phone size={20} />,
    label: "WhatsApp",
    value: "+57 312 327 60 44",
    href: "https://wa.me/573123276044",
    color: "green-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="section-container">
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-border to-transparent mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="section-subtitle">08 · contacto</p>
        <h2 className="section-title">
          Trabajemos{" "}
          <span className="gradient-text">juntos</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mt-3">
          ¿Tienes un proyecto de datos, necesitas consultoría en Databricks o Azure, o quieres colaborar en open source? Escríbeme.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
            <MapPin size={16} className="text-brand-cyan" />
            <span>Madrid, España · Bogotá, Colombia (remoto)</span>
          </div>

          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="card flex items-center gap-4 group hover:border-brand-cyan/30 transition-all"
            >
              <div className={`text-${link.color} group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-slate-500 mb-0.5">{link.label}</div>
                <div className="text-white text-sm font-mono truncate">{link.value}</div>
              </div>
              <ExternalLink size={14} className="text-slate-600 group-hover:text-brand-cyan transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Quick message card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card border border-brand-border"
        >
          <div className="terminal-window mb-4">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-3 font-mono text-xs text-slate-500">mensaje.sh</span>
            </div>
            <div className="p-4 font-mono text-xs text-slate-400 space-y-1">
              <div>
                <span className="text-brand-cyan">$ </span>
                <span>send_message --to roberto</span>
              </div>
              <div className="text-slate-500">→ Disponible para consultoría</div>
              <div className="text-slate-500">→ Proyectos Databricks / Azure</div>
              <div className="text-slate-500">→ Data Engineering freelance</div>
              <div className="text-slate-500">→ Colaboraciones open source</div>
              <div className="text-green-400 mt-2">✓ Respondo en menos de 24h</div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-slate-300 text-sm font-medium">¿En qué puedo ayudarte?</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Arquitectura de datos",
                "Migración a Databricks",
                "Pipelines ETL/ELT",
                "Consultoría Azure",
                "FinOps / DataOps",
                "Open Source",
              ].map((topic) => (
                <a
                  key={topic}
                  href={`mailto:brrsanchezfi@gmail.com?subject=${encodeURIComponent(topic)}`}
                  className="text-xs text-slate-400 bg-brand-border/50 hover:bg-brand-cyan/10 hover:text-brand-cyan border border-transparent hover:border-brand-cyan/20 rounded-lg px-3 py-2 transition-all text-center"
                >
                  {topic}
                </a>
              ))}
            </div>
            <a
              href="mailto:brrsanchezfi@gmail.com"
              className="btn-primary w-full justify-center mt-2"
            >
              <Send size={15} />
              Enviar mensaje
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
