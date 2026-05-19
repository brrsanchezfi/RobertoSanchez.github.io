"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

const langColors: Record<string, string> = {
  Python: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  Java: "bg-orange-500",
  Scala: "bg-red-500",
  Shell: "bg-green-500",
  Jupyter: "bg-orange-400",
  HTML: "bg-orange-600",
  CSS: "bg-blue-300",
};

const featuredRepos = [
  {
    name: "DKOps",
    full_name: "brrsanchezfi/DKOps",
    description: "Framework de gobernanza de datos y operaciones sobre Delta Lake para Databricks. Incluye contratos, migraciones seguras y writers especializados.",
    html_url: "https://github.com/brrsanchezfi/DKOps",
    homepage: "https://pypi.org/project/DKOps/",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    topics: ["databricks", "delta-lake", "dataops", "python", "governance"],
    updated_at: new Date().toISOString(),
    fork: false,
    id: 1,
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [repos, setRepos] = useState<(GitHubRepo & { featured?: boolean })[]>(featuredRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/brrsanchezfi/repos?sort=updated&per_page=20&type=public")
      .then((r) => r.json())
      .then((data: GitHubRepo[]) => {
        if (!Array.isArray(data)) return;
        const filtered = data
          .filter((r) => !r.fork && r.name !== "RobertoSanchez.github.io")
          .slice(0, 8);
        setRepos(
          filtered.map((r) => ({
            ...r,
            featured: r.name === "DKOps",
          }))
        );
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">06 · proyectos</p>
        <h2 className="section-title">
          Proyectos en{" "}
          <span className="gradient-text">GitHub</span>
        </h2>
        <p className="text-slate-400 max-w-xl mt-2">
          Repositorios públicos con foco en Data Engineering, automatización y soluciones Big Data.
        </p>
      </motion.div>

      {loading ? (
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-4 bg-brand-border rounded w-3/4 mb-3" />
              <div className="h-3 bg-brand-border rounded w-full mb-2" />
              <div className="h-3 bg-brand-border rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className={`card flex flex-col group transition-all duration-300 ${
                repo.featured
                  ? "border-brand-cyan/40 bg-gradient-to-br from-brand-card to-brand-cyan/5 md:col-span-2 lg:col-span-1"
                  : "hover:border-brand-border/80"
              }`}
            >
              {repo.featured && (
                <span className="text-xs text-brand-cyan font-mono mb-2">★ proyecto principal</span>
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-slate-500 flex-shrink-0" />
                  <h3 className="text-white font-semibold text-sm group-hover:text-brand-cyan transition-colors truncate">
                    {repo.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-brand-cyan transition-colors"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-brand-cyan transition-colors"
                  >
                    <Github size={13} />
                  </a>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">
                {repo.description || "Sin descripción"}
              </p>

              {/* Topics */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.topics.slice(0, 4).map((topic) => (
                    <span key={topic} className="skill-badge text-xs">{topic}</span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-border">
                <div className="flex items-center gap-1.5">
                  {repo.language && (
                    <>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${langColors[repo.language] ?? "bg-slate-500"}`}
                      />
                      <span className="text-xs text-slate-500">{repo.language}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="flex items-center gap-1 text-xs">
                    <Star size={11} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <GitFork size={11} />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/brrsanchezfi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex"
        >
          <Github size={16} />
          Ver todos los repositorios
        </a>
      </motion.div>
    </section>
  );
}
