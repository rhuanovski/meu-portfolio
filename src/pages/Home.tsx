import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ArticlesCard from "../components/ArticlesCard";
import { projects } from "../data/projects";
import { articles } from "../data/articles";

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        id="destaquesProjetos"
        title="Destaques de projetos"
        subtitle="Alguns projetos selecionados recentemente."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      <Section
        id="destaquesArtigos"
        title="Artigos publicados"
        subtitle="Alguns artigos selecionados recentemente."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((p) => (
            <ArticlesCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      <Section
        id="servicos"
        title="O que eu faço"
        subtitle="Do planejamento ao deploy, com foco em resultado."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold">Front-end</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Interfaces performáticas e acessíveis usando React, TypeScript e
              Tailwind.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Back-end</h3>
            <p className="mt-2 text-sm text-zinc-600">
              APIs escaláveis com Node, autenticação e integrações.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">UI/UX</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Design limpo estilo Apple, micro-interações e foco na experiência.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
