"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Play, Eye, ExternalLink, Bell } from "lucide-react";
import Image from "next/image";

const CHANNEL_URL = "https://www.youtube.com/@banana_code";
const SUBSCRIBE_URL = "https://www.youtube.com/@banana_code?sub_confirmation=1";
const CHANNEL_ID = "UCaTeohOE4tsXTg9VQFJ6yyw";

const videos = [
  {
    id: "3Lwl5GRVrfM",
    title: "Construcción de un pipeline con Apache AIRFLOW, KAFKA y SPARK usando PYTHON",
    description:
      "Exploramos las herramientas esenciales en ingeniería de datos: Airflow, Kafka y Apache Spark. Descubrirás cómo automatizar tareas, gestionar flujos de datos y procesar grandes volúmenes en tiempo real.",
    date: "2023-10-11",
    views: 7673,
    featured: true,
    tags: ["Airflow", "Kafka", "Spark", "Python"],
  },
  {
    id: "G2Y8qubwcI8",
    title: "Bash Scripting for Data Engineering: Full ETL Workflow and Automation with Crontab",
    description:
      "Unlock the power of Bash scripting by building a complete ETL pipeline using nothing but the terminal. A real-world project where we automatically extract, transform and load data.",
    date: "2025-11-18",
    views: 236,
    featured: false,
    tags: ["Bash", "ETL", "Crontab", "Linux"],
  },
  {
    id: "G_F6RdVrNvs",
    title: "Proyecto Guiado — Alertas SMS con Airflow",
    description:
      "Creación de un proyecto que usa Apache Airflow para monitorizar la actividad de un canal de YouTube y enviar alertas SMS automáticamente.",
    date: "2023-12-11",
    views: 150,
    featured: false,
    tags: ["Airflow", "SMS", "Python", "APIs"],
  },
  {
    id: "il5uh3dGP1s",
    title: "Guía Rápida 002 — AWS Glue Pipeline ETL",
    description:
      "Configura una arquitectura ETL batch potente usando AWS Glue y Amazon S3. Desde la creación del bucket hasta el despliegue del pipeline completo.",
    date: "2023-11-22",
    views: 123,
    featured: false,
    tags: ["AWS Glue", "S3", "ETL", "Cloud"],
  },
  {
    id: "GTbZInnEJpc",
    title: "Guía Rápida 001 — API REST Serverless en AWS",
    description:
      "Aprende a crear una API REST Serverless en AWS de manera sencilla y práctica. Configura y despliega tu propia API en pocos minutos.",
    date: "2023-10-23",
    views: 62,
    featured: false,
    tags: ["AWS Lambda", "Serverless", "API REST"],
  },
];

function formatViews(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return n.toString();
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
  });
}

function VideoCard({
  video,
  index,
  inView,
}: {
  video: (typeof videos)[0];
  index: number;
  inView: boolean;
}) {
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  const url = `https://www.youtube.com/watch?v=${video.id}`;

  if (video.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="md:col-span-2 lg:col-span-3 card border border-red-500/30 bg-gradient-to-br from-brand-card to-red-950/20 group"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Thumbnail */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex-shrink-0 lg:w-80 rounded-xl overflow-hidden"
          >
            <Image
              src={thumb}
              alt={video.title}
              width={480}
              height={270}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            {/* Play overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
            </div>
            {/* Views badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono flex items-center gap-1">
              <Eye size={11} />
              {formatViews(video.views)} vistas
            </div>
          </a>

          {/* Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded font-mono">
                  ★ Más popular
                </span>
                <span className="text-xs text-slate-500 font-mono">{formatDate(video.date)}</span>
              </div>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-white font-bold text-lg leading-tight mb-3 hover:text-red-400 transition-colors">
                  {video.title}
                </h3>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{video.description}</p>
              <div className="flex flex-wrap gap-2">
                {video.tags.map((t) => (
                  <span key={t} className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-3 py-1 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
              >
                <Play size={15} fill="white" />
                Ver video
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      className="card border border-brand-border hover:border-red-500/30 group flex flex-col transition-all duration-300"
    >
      {/* Thumbnail */}
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-lg overflow-hidden mb-4 block"
      >
        <Image
          src={thumb}
          alt={video.title}
          width={320}
          height={180}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <Play size={20} className="text-white ml-0.5" fill="white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono flex items-center gap-1">
          <Eye size={10} />
          {formatViews(video.views)}
        </div>
      </a>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-wrap gap-1">
            {video.tags.slice(0, 2).map((t) => (
              <span key={t} className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-2 py-0.5 font-mono">
                {t}
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-600 font-mono flex-shrink-0">{formatDate(video.date)}</span>
        </div>

        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-semibold leading-snug mb-2 hover:text-red-400 transition-colors line-clamp-2"
        >
          {video.title}
        </a>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 flex-1">
          {video.description}
        </p>

        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors font-mono"
        >
          <ExternalLink size={11} />
          Ver en YouTube
        </a>
      </div>
    </motion.div>
  );
}

export default function YouTubeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const totalViews = videos.reduce((acc, v) => acc + v.views, 0);

  return (
    <section id="youtube" ref={ref} className="section-container">
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-16" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12"
      >
        <div>
          <p className="section-subtitle" style={{ color: "#ff4444" }}>
            07 · youtube
          </p>
          <h2 className="section-title">
            Banana{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff4444 0%, #ff0000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Code
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-1">
            Canal de Data Engineering con tutoriales prácticos sobre Airflow, Spark, AWS, Bash y automatización de pipelines.
          </p>
        </div>

        {/* Channel card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-shrink-0"
        >
          <div className="card border border-red-500/30 bg-gradient-to-br from-brand-card to-red-950/20 min-w-[260px]">
            {/* Channel header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <Youtube size={24} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold">Banana Code</div>
                <div className="text-slate-500 text-xs font-mono">@banana_code</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-brand-dark rounded-lg px-3 py-2 text-center">
                <div className="text-white font-bold text-lg">{videos.length}</div>
                <div className="text-slate-500 text-xs">videos</div>
              </div>
              <div className="bg-brand-dark rounded-lg px-3 py-2 text-center">
                <div className="text-white font-bold text-lg">{formatViews(totalViews)}</div>
                <div className="text-slate-500 text-xs">vistas totales</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <a
                href={SUBSCRIBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Bell size={15} />
                Suscribirse
              </a>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              >
                <Youtube size={15} />
                Ver canal
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Videos grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} inView={inView} />
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 text-center"
      >
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-red-500/30 hover:border-red-500/60 hover:bg-red-500/5 text-slate-300 hover:text-red-400 text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200"
        >
          <Youtube size={18} />
          Ver todos los videos en YouTube
          <ExternalLink size={13} />
        </a>
      </motion.div>
    </section>
  );
}
