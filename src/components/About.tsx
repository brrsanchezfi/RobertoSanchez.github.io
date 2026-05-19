"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Globe } from "lucide-react";

const education = [
  {
    degree: "Master en Big Data and Data Engineering",
    school: "Universidad Complutense de Madrid",
    location: "Madrid, España",
    period: "Sep 2025 — Cursando",
    icon: "🎓",
    active: true,
  },
  {
    degree: "Ingeniería Eléctrica",
    school: "Universidad Nacional de Colombia",
    location: "Bogotá, Colombia",
    period: "2018 — 2024",
    icon: "⚡",
    active: false,
  },
  {
    degree: "Bachiller Técnico en Redes de Computadores",
    school: "I.E. Sagrado Corazón de Jesús de La Salle",
    location: "Cúcuta, Colombia",
    period: "2010 — 2011",
    icon: "🌐",
    active: false,
  },
];

const highlights = [
  {
    icon: <Briefcase size={20} className="text-brand-cyan" />,
    title: "Consultoría Enterprise",
    desc: "Proyectos en sectores financiero, energético, salud y público.",
  },
  {
    icon: <Award size={20} className="text-brand-blue" />,
    title: "4 Certificaciones Azure",
    desc: "AZ-104, DP-204, AZ-900, DP-900 — Microsoft Certified.",
  },
  {
    icon: <GraduationCap size={20} className="text-brand-purple" />,
    title: "Master en Madrid",
    desc: "Big Data & Data Engineering en la UCM, actualmente cursando.",
  },
  {
    icon: <Globe size={20} className="text-green-400" />,
    title: "Alcance Internacional",
    desc: "Clientes en Colombia, México y proyectos con estándares globales.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">01 · sobre mí</p>
        <h2 className="section-title">
          Construyendo el futuro con{" "}
          <span className="gradient-text">datos</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-slate-300 leading-relaxed">
            Soy <span className="text-white font-semibold">Ingeniero de Datos</span> e Ingeniero Electricista con experiencia en el diseño, desarrollo y automatización de soluciones de datos en entornos Big Data y nube.
          </p>
          <p className="text-slate-400 leading-relaxed">
            He participado en proyectos de migración de procesos analíticos y microservicios, así como en la implementación de arquitecturas modernas tipo <span className="text-brand-cyan font-mono">lakehouse</span>, aplicando prácticas de <span className="text-brand-blue">DataOps</span>, <span className="text-brand-purple">FinOps</span> y <span className="text-green-400">DevOps</span> bajo estándares de ingeniería de software.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Actualmente trabajo como consultor en <span className="text-white font-semibold">DataKnow</span>, donde he liderado proyectos en empresas como Experian, AMV Colombia, Sura México, Carvajal y el Departamento de Prosperidad Social, entre otros. Simultáneamente, estoy cursando un <span className="text-brand-blue">Master en Big Data y Data Engineering</span> en la Universidad Complutense de Madrid.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Mi proyecto open-source <span className="text-brand-cyan font-semibold">DKOps</span> refleja mi enfoque en la gobernanza de datos y automatización de operaciones sobre Delta Lake y Databricks.
          </p>

          {/* Languages */}
          <div className="flex gap-3 pt-2">
            <span className="skill-badge">🇪🇸 Español Nativo</span>
            <span className="skill-badge">🇬🇧 Inglés B1</span>
          </div>
        </motion.div>

        {/* Education + highlights */}
        <div className="space-y-6">
          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="card"
              >
                <div className="mb-2">{h.icon}</div>
                <h3 className="text-white text-sm font-semibold mb-1">{h.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-cyan" />
              Formación Académica
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className={`card flex items-start gap-4 ${
                    edu.active ? "border-brand-cyan/30" : ""
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{edu.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-white text-sm font-medium">{edu.degree}</h4>
                      {edu.active && (
                        <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-2 py-0.5">
                          Activo
                        </span>
                      )}
                    </div>
                    <p className="text-brand-cyan text-xs font-mono mt-0.5">{edu.school}</p>
                    <p className="text-slate-500 text-xs">{edu.location} · {edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
