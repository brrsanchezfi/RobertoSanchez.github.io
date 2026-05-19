# Roberto Sánchez — Portfolio

Portafolio personal de Brayan Roberto Sánchez Figueroa, Data Engineer especializado en Databricks, Azure, Apache Spark y DataOps.

**Live:** [brrsanchezfi.github.io](https://brrsanchezfi.github.io)

## Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deploy:** GitHub Pages via GitHub Actions

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build estático
npm run build
```

## CI/CD

El workflow en `.github/workflows/deploy.yml` hace automáticamente:

1. **Quality check** — ESLint + TypeScript type-check
2. **Build** — `next build` → exporta a `/out`
3. **Deploy** — sube `/out` a GitHub Pages (solo en push a `main`)

## Personalización

| Archivo | Qué editar |
|---|---|
| `src/components/Hero.tsx` | Nombre, bio, links |
| `src/components/Experience.tsx` | Clientes y proyectos |
| `src/components/Skills.tsx` | Skills y niveles |
| `src/components/DKOps.tsx` | Descripción del proyecto |
| `src/components/Certifications.tsx` | Certificaciones |
| `src/components/Contact.tsx` | Email, LinkedIn, teléfono |
| `public/cv-roberto-sanchez.pdf` | Tu CV actualizado |

## Agregar foto de perfil

Coloca tu foto en `public/profile.jpg` y actualiza `src/components/Hero.tsx` con:

```tsx
import Image from "next/image";
<Image src="/profile.jpg" alt="Roberto Sánchez" width={400} height={400} className="rounded-2xl" />
```
