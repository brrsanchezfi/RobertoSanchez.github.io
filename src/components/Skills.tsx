"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Data & Big Data",
    color: "cyan",
    skills: [
      { name: "Apache Spark", level: 90 },
      { name: "Databricks", level: 92 },
      { name: "PySpark", level: 88 },
      { name: "Delta Lake", level: 85 },
      { name: "Unity Catalog", level: 80 },
      { name: "Pandas", level: 88 },
    ],
  },
  {
    title: "Cloud · Azure",
    color: "blue",
    skills: [
      { name: "Azure Data Factory", level: 88 },
      { name: "Azure Synapse", level: 80 },
      { name: "Azure DevOps", level: 85 },
      { name: "Azure Storage", level: 82 },
      { name: "Azure Monitor", level: 75 },
      { name: "Databricks Bundles", level: 85 },
    ],
  },
  {
    title: "Lenguajes",
    color: "purple",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL / SparkSQL", level: 88 },
      { name: "Scala", level: 65 },
      { name: "Java", level: 60 },
      { name: "Shell / Bash", level: 75 },
      { name: "TypeScript", level: 55 },
    ],
  },
  {
    title: "DataOps · DevOps",
    color: "green",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "DataOps", level: 85 },
      { name: "FinOps", level: 78 },
      { name: "Airflow", level: 70 },
      { name: "Docker", level: 68 },
    ],
  },
];

const colorMap: Record<string, string> = {
  cyan: "bg-brand-cyan",
  blue: "bg-brand-blue",
  purple: "bg-brand-purple",
  green: "bg-green-400",
};

const borderMap: Record<string, string> = {
  cyan: "border-brand-cyan/30",
  blue: "border-brand-blue/30",
  purple: "border-brand-purple/30",
  green: "border-green-400/30",
};

const textMap: Record<string, string> = {
  cyan: "text-brand-cyan",
  blue: "text-brand-blue",
  purple: "text-brand-purple",
  green: "text-green-400",
};

const stack = [
  "Databricks", "Apache Spark", "Azure", "Python", "Delta Lake",
  "PySpark", "SQL Server", "Unity Catalog", "Data Factory", "Azure Synapse",
  "Azure DevOps", "Git", "Linux", "Airflow", "FinOps",
  "DataOps", "Scala", "Java", "Shell Scripting", "OOP",
  "Pandas", "NumPy", "Statistics", "Data Modeling", "ETL/ELT",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">02 · stack técnico</p>
        <h2 className="section-title">
          Habilidades &{" "}
          <span className="gradient-text">Tecnologías</span>
        </h2>
        <p className="text-slate-400 max-w-xl">
          Stack especializado en datos, cloud y automatización — enfocado en el ecosistema Azure + Databricks.
        </p>
      </motion.div>

      {/* Skill categories with bars */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className={`card border ${borderMap[cat.color]}`}
          >
            <h3 className={`font-mono text-sm font-semibold mb-5 ${textMap[cat.color]}`}>
              // {cat.title}
            </h3>
            <div className="space-y-4">
              {cat.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-slate-300 text-sm">{skill.name}</span>
                    <span className={`font-mono text-xs ${textMap[cat.color]}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: catIdx * 0.1 + i * 0.05 + 0.3, ease: "easeOut" }}
                      className={`h-full rounded-full ${colorMap[cat.color]}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tag cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10"
      >
        <h3 className="text-slate-500 font-mono text-xs mb-5 uppercase tracking-widest">
          // tecnologías adicionales
        </h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.02 }}
              className="skill-badge hover:border-brand-cyan/40 hover:bg-brand-cyan/10 cursor-default transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
