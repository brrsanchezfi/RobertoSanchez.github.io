"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const clients = [
  {
    company: "Experian Colombia",
    role: "Data Engineer · Databricks",
    sector: "Fintech · Buró de crédito",
    period: "2023 — 2024",
    summary:
      "Desarrollo, optimización y mantenimiento de aplicaciones y procesos con Databricks para la generación de reportes, insumos y entregables de crédito.",
    tags: ["Databricks", "PySpark", "Delta Lake", "Reporting"],
    icon: "💳",
    color: "cyan",
  },
  {
    company: "AMV Colombia",
    role: "Tech Lead · Data Lake",
    sector: "Autorregulador del Mercado de Valores",
    period: "2024",
    summary:
      "Lideré el equipo de desarrollo de módulos para herramientas de AMV enfocados en evaluación de fraude, visualización de pilas y gestión del Data Lake.",
    tags: ["Databricks", "Data Factory", "DevOps", "Anti-fraude"],
    icon: "📈",
    color: "blue",
  },
  {
    company: "Sura México",
    role: "DevOps Engineer · Databricks",
    sector: "Seguros",
    period: "2024",
    summary:
      "Implementé la homologación de ambientes para metodologías DevOps usando Azure DevOps, Databricks Bundles y scripts batch en Linux.",
    tags: ["Azure DevOps", "Databricks Bundles", "Linux", "CI/CD"],
    icon: "🛡️",
    color: "purple",
  },
  {
    company: "Carvajal S.A.",
    role: "Migration Lead · Analytics",
    sector: "Industria",
    period: "2024",
    summary:
      "Lideré la migración de modelos analíticos desde SQL Server Integration Services (SSIS) hacia Databricks y Unity Catalog, refactorizando modelos de ventas y financiero en Spark.",
    tags: ["SSIS → Databricks", "Unity Catalog", "Spark", "SQL Server"],
    icon: "🏭",
    color: "green",
  },
  {
    company: "Departamento de Prosperidad Social",
    role: "Data Engineer · FinOps",
    sector: "Sector Público",
    period: "2024 — 2025",
    summary:
      "Migración a Databricks Unity Catalog. Desarrollo FinOps para reporte de consumos en la nube de Azure y Databricks. Reconocimiento por calidad del desarrollo y tiempo récord de ejecución.",
    tags: ["Unity Catalog", "FinOps", "Azure Monitor", "Gobierno"],
    icon: "🏛️",
    color: "yellow",
    highlight: true,
  },
  {
    company: "Comfama",
    role: "Data Modeler",
    sector: "Caja de Compensación",
    period: "2024",
    summary:
      "Desarrollé el modelo de datos para la integración de Comfama al sistema general de Asocajas (GIASS). Soporte a plataformas Data Factory, Azure Synapse y Databricks.",
    tags: ["Data Modeling", "Data Factory", "Synapse", "Databricks"],
    icon: "🏥",
    color: "pink",
  },
  {
    company: "Frontera Energy",
    role: "Data Engineer · Monitoring",
    sector: "Energía",
    period: "2023 — 2024",
    summary:
      "Desarrollo y monitoreo de aplicaciones en Databricks para el sector energético.",
    tags: ["Databricks", "Monitoring", "Python", "Energy"],
    icon: "⚡",
    color: "orange",
  },
];

const colorBorder: Record<string, string> = {
  cyan: "border-brand-cyan/30 hover:border-brand-cyan/60",
  blue: "border-brand-blue/30 hover:border-brand-blue/60",
  purple: "border-brand-purple/30 hover:border-brand-purple/60",
  green: "border-green-400/30 hover:border-green-400/60",
  yellow: "border-yellow-400/30 hover:border-yellow-400/60",
  pink: "border-pink-400/30 hover:border-pink-400/60",
  orange: "border-orange-400/30 hover:border-orange-400/60",
};

const colorText: Record<string, string> = {
  cyan: "text-brand-cyan",
  blue: "text-brand-blue",
  purple: "text-brand-purple",
  green: "text-green-400",
  yellow: "text-yellow-400",
  pink: "text-pink-400",
  orange: "text-orange-400",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="experience" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">03 · experiencia</p>
        <h2 className="section-title">
          Trayectoria{" "}
          <span className="gradient-text">Profesional</span>
        </h2>
      </motion.div>

      {/* Main employer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 mb-8 card border border-brand-cyan/20 bg-gradient-to-r from-brand-card to-brand-cyan/5"
      >
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🏢</span>
              <div>
                <h3 className="text-xl font-bold text-white">DataKnow</h3>
                <p className="text-brand-cyan font-mono text-sm">Ingeniero de Datos · Consultor Senior</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Bogotá, Colombia · Diciembre 2023 — Presente</p>
            <p className="text-slate-300 mt-3 max-w-2xl leading-relaxed">
              Consultor para múltiples empresas en proyectos de Big Data — desde diseño de arquitectura hasta desarrollo de aplicaciones Spark/Databricks en sectores financiero, energético, industrial y público.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Activo
            </span>
          </div>
        </div>
      </motion.div>

      {/* Client projects */}
      <div className="space-y-4">
        <h3 className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-6">
          // proyectos con clientes
        </h3>
        {clients.map((client, i) => (
          <motion.div
            key={client.company}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
            className={`card border ${colorBorder[client.color]} transition-all duration-300 cursor-pointer ${
              client.highlight ? "bg-gradient-to-r from-brand-card to-yellow-400/5" : ""
            }`}
            onClick={() => setExpanded(expanded === client.company ? null : client.company)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-2xl flex-shrink-0">{client.icon}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-white font-semibold">{client.company}</h4>
                    {client.highlight && (
                      <span className="text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full px-2 py-0.5">
                        🏆 Reconocimiento
                      </span>
                    )}
                  </div>
                  <p className={`text-sm font-mono ${colorText[client.color]}`}>{client.role}</p>
                  <p className="text-slate-500 text-xs">{client.sector} · {client.period}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="hidden sm:flex flex-wrap gap-1.5 justify-end">
                  {client.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="skill-badge text-xs">{tag}</span>
                  ))}
                </div>
                {expanded === client.company
                  ? <ChevronUp size={16} className="text-slate-400" />
                  : <ChevronDown size={16} className="text-slate-400" />
                }
              </div>
            </div>

            {expanded === client.company && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-brand-border"
              >
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  {client.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {client.tags.map((tag) => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
