import type { Project } from "../components/ProjectCard";

export const projects: Project[] = [
  {
    id: "p1",
    title: "Dashboard de Vendas",
    description: "Painel responsivo com gráficos e filtros em tempo real.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    link: "https://seu-dominio.com/projeto1",
    repo: "https://github.com/seuusuario/projeto1",
  },
  {
    id: "p2",
    title: "Landing Page Tech",
    description: "LP moderna com SEO e animações sutis.",
    stack: ["React", "Tailwind", "Framer Motion"],
    link: "https://seu-dominio.com/projeto2",
    repo: "https://github.com/seuusuario/projeto2",
  },
  {
    id: "p3",
    title: "API de Catálogo",
    description: "API REST com autenticação JWT e testes.",
    stack: ["Node", "Express", "Prisma", "PostgreSQL"],
    repo: "https://github.com/seuusuario/projeto3",
  },
];
