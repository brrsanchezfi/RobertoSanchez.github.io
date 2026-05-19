import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roberto Sánchez | Data Engineer & Cloud Architect",
  description:
    "Portafolio de Brayan Roberto Sánchez Figueroa — Data Engineer especializado en Databricks, Azure, Apache Spark, DataOps y soluciones Big Data.",
  keywords: [
    "Data Engineer",
    "Databricks",
    "Azure",
    "Apache Spark",
    "Python",
    "DataOps",
    "DevOps",
    "Big Data",
    "Cloud",
    "DKOps",
  ],
  authors: [{ name: "Brayan Roberto Sánchez Figueroa" }],
  openGraph: {
    title: "Roberto Sánchez | Data Engineer & Cloud Architect",
    description:
      "Portafolio profesional — Data Engineering, Databricks, Azure, Big Data.",
    type: "website",
    url: "https://brrsanchezfi.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberto Sánchez | Data Engineer",
    description: "Data Engineer | Databricks | Azure | Apache Spark | DKOps",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-brand-dark text-slate-200 antialiased">{children}</body>
    </html>
  );
}
