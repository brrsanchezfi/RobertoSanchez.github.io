"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork, Package, Shield, Zap, Database } from "lucide-react";

const features = [
  {
    icon: <Shield size={20} className="text-brand-cyan" />,
    title: "Table Governance",
    desc: "Contratos de datos, validación de esquemas y migraciones seguras sobre Delta Lake.",
  },
  {
    icon: <Database size={20} className="text-brand-blue" />,
    title: "Delta Lake Writers",
    desc: "Writers especializados para creación, actualización y gestión de tablas Delta con CDC.",
  },
  {
    icon: <Zap size={20} className="text-brand-purple" />,
    title: "Safe Migrations",
    desc: "Migraciones de esquema sin pérdida de datos, con validación automática de contratos.",
  },
  {
    icon: <Package size={20} className="text-green-400" />,
    title: "PyPI Ready",
    desc: "Publicado en PyPI con GitHub Actions. Instalable con `pip install DKOps`.",
  },
];

const techStack = [
  "Apache Spark", "Delta Lake", "Databricks", "Python", "PyPI",
  "GitHub Actions", "DataOps", "Table Governance",
];

export default function DKOps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dkops" ref={ref} className="section-container">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">04 · proyecto estrella</p>
        <h2 className="section-title">
          <span className="gradient-text">DKOps</span> — Open Source Framework
        </h2>
        <p className="text-slate-400 max-w-2xl mt-2">
          Framework de gobernanza de datos y operaciones sobre Delta Lake para Databricks. Diseñado para equipos de ingeniería de datos que trabajan con arquitecturas lakehouse.
        </p>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: Terminal demo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-3 font-mono text-xs text-slate-500">DKOps · quick start</span>
            </div>
            <div className="p-5 font-mono text-xs space-y-2 text-slate-400 overflow-x-auto">
              <div className="text-slate-500"># Install from PyPI</div>
              <div>
                <span className="text-brand-cyan">$ </span>
                <span className="text-white">pip install DKOps</span>
              </div>
              <div className="mt-3 text-slate-500"># Governance contract</div>
              <div className="text-brand-blue">from</div>
              <div className="pl-4 text-slate-300">
                DKOps.table_governance{" "}
                <span className="text-brand-blue">import</span>{" "}
                <span className="text-brand-cyan">TableGovernance</span>
              </div>
              <div className="mt-2">
                <span className="text-slate-300">governance </span>
                <span className="text-slate-500">= </span>
                <span className="text-brand-cyan">TableGovernance</span>
                <span className="text-slate-500">(</span>
              </div>
              <div className="pl-4">
                <span className="text-brand-blue">spark</span>
                <span className="text-slate-500">=</span>
                <span className="text-slate-300">spark</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="pl-4">
                <span className="text-brand-blue">contract_path</span>
                <span className="text-slate-500">=</span>
                <span className="text-green-400">"./contracts/table.json"</span>
              </div>
              <div><span className="text-slate-500">)</span></div>
              <div className="mt-2">
                <span className="text-brand-cyan">governance</span>
                <span className="text-slate-500">.</span>
                <span className="text-brand-blue">apply</span>
                <span className="text-slate-500">()</span>
              </div>
              <div className="mt-3 text-green-400">
                ✓ Contract validated · Schema applied · CDC enabled
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-brand-cyan">$</span>
                <span className="animate-blink text-brand-cyan">_</span>
              </div>
            </div>
          </div>

          {/* GitHub stats */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com/brrsanchezfi/DKOps"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-2 flex-1 hover:border-brand-cyan/40 transition-all group"
            >
              <Github size={18} className="text-slate-400 group-hover:text-brand-cyan transition-colors" />
              <div>
                <div className="text-xs text-slate-500">Repositorio</div>
                <div className="text-sm text-white font-mono">brrsanchezfi/DKOps</div>
              </div>
              <ExternalLink size={12} className="text-slate-600 ml-auto group-hover:text-brand-cyan" />
            </a>
            <a
              href="https://pypi.org/project/DKOps/"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-2 flex-1 hover:border-brand-blue/40 transition-all group"
            >
              <Package size={18} className="text-slate-400 group-hover:text-brand-blue transition-colors" />
              <div>
                <div className="text-xs text-slate-500">PyPI</div>
                <div className="text-sm text-white font-mono">pip install DKOps</div>
              </div>
              <ExternalLink size={12} className="text-slate-600 ml-auto group-hover:text-brand-blue" />
            </a>
          </div>
        </motion.div>

        {/* Right: Features + info */}
        <div className="space-y-6">
          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="card"
              >
                <div className="mb-3">{feat.icon}</div>
                <h3 className="text-white text-sm font-semibold mb-1">{feat.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Architecture description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="card border border-brand-purple/20"
          >
            <h3 className="text-white font-semibold mb-3">Arquitectura del framework</h3>
            <div className="space-y-2 font-mono text-xs">
              {[
                { path: "DKOps/", label: "raíz del paquete", color: "text-brand-cyan" },
                { path: "  table_governance/", label: "gobernanza de tablas", color: "text-brand-blue" },
                { path: "    contracts/", label: "contratos JSON por tabla", color: "text-slate-400" },
                { path: "    migrations/", label: "migraciones seguras de esquema", color: "text-slate-400" },
                { path: "    writers/", label: "writers Delta Lake (create/update)", color: "text-slate-400" },
                { path: "  demos/", label: "ejemplos de uso real", color: "text-brand-purple" },
              ].map((item) => (
                <div key={item.path} className="flex gap-3">
                  <span className={item.color}>{item.path}</span>
                  <span className="text-slate-600">→ {item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="skill-badge">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex gap-3"
          >
            <a
              href="https://github.com/brrsanchezfi/DKOps"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={16} />
              Ver en GitHub
            </a>
            <a
              href="https://pypi.org/project/DKOps/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Package size={16} />
              PyPI
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
