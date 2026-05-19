"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    code: "AZ-104",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft Azure",
    period: "Mayo 2025 — Mayo 2026",
    url: "https://learn.microsoft.com/en-us/certifications/azure-administrator/",
    active: true,
    color: "blue",
    icon: "🔷",
    description: "Administración avanzada de recursos Azure: redes, identidades, almacenamiento y cómputo.",
  },
  {
    code: "DP-204",
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft Azure",
    period: "Mayo 2024 — Mayo 2026",
    url: "https://learn.microsoft.com/en-us/certifications/azure-data-engineer/",
    active: true,
    color: "cyan",
    icon: "🔵",
    description: "Diseño e implementación de soluciones de datos en Azure: Data Factory, Databricks, Synapse, Stream Analytics.",
  },
  {
    code: "AZ-900",
    name: "Microsoft Certified: Aspectos Básicos de Azure",
    issuer: "Microsoft Azure",
    period: "Junio 2024",
    url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    active: false,
    color: "purple",
    icon: "🟣",
    description: "Fundamentos de cloud computing y servicios Azure.",
  },
  {
    code: "DP-900",
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft Azure",
    period: "Febrero 2024",
    url: "https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/",
    active: false,
    color: "green",
    icon: "🟢",
    description: "Fundamentos de datos en la nube: relacionales, no relacionales y analítica.",
  },
];

const colorBorder: Record<string, string> = {
  blue: "border-brand-blue/30 hover:border-brand-blue/60",
  cyan: "border-brand-cyan/30 hover:border-brand-cyan/60",
  purple: "border-brand-purple/30 hover:border-brand-purple/60",
  green: "border-green-400/30 hover:border-green-400/60",
};

const colorCode: Record<string, string> = {
  blue: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
  cyan: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
  purple: "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
  green: "text-green-400 bg-green-400/10 border-green-400/20",
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">05 · certificaciones</p>
        <h2 className="section-title">
          Certificaciones{" "}
          <span className="gradient-text">Microsoft Azure</span>
        </h2>
        <p className="text-slate-400 max-w-xl mt-2">
          4 certificaciones Microsoft Azure activas, cubriendo administración de infraestructura, ingeniería de datos y fundamentos cloud.
        </p>
      </motion.div>

      {/* Cert path visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-12 mb-8 card border border-brand-border"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {certs.map((cert, i) => (
            <div key={cert.code} className="flex items-center gap-3">
              <div className="text-center">
                <div
                  className={`text-xs font-mono font-bold border rounded-lg px-3 py-2 ${colorCode[cert.color]}`}
                >
                  {cert.code}
                </div>
                <div className={`text-xs mt-1 ${cert.active ? "text-green-400" : "text-slate-500"}`}>
                  {cert.active ? "✓ Activo" : "Obtenido"}
                </div>
              </div>
              {i < certs.length - 1 && (
                <div className="hidden sm:block w-8 h-px bg-brand-border" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cert cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.code}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className={`card border ${colorBorder[cert.color]} transition-all duration-300`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{cert.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-xs font-mono font-bold border rounded px-2 py-0.5 ${colorCode[cert.color]}`}>
                        {cert.code}
                      </span>
                      {cert.active && (
                        <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-2 py-0.5">
                          Vigente
                        </span>
                      )}
                    </div>
                    <h3 className="text-white text-sm font-semibold leading-tight">{cert.name}</h3>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-brand-cyan transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <p className="text-slate-500 text-xs mb-2">{cert.issuer} · {cert.period}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{cert.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Badge row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex items-center gap-4 text-center justify-center"
      >
        <Award size={20} className="text-brand-cyan" />
        <p className="text-slate-400 text-sm">
          Verificación disponible en{" "}
          <a
            href="https://learn.microsoft.com/en-us/users/brayan-0626/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-cyan hover:underline"
          >
            Microsoft Learn
          </a>
        </p>
      </motion.div>
    </section>
  );
}
