import { Github, Globe } from "lucide-react";

export type Article = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  repo?: string;
  link?: string;
};

export default function ArticlesCard({ p }: { p: Article }) {
  return (
    <article className="card overflow-hidden group">
      <div className="aspect-[16/9] bg-zinc-100" />
      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded-lg">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          {p.link && (
            <a className="btn btn-ghost" href={p.link} target="_blank" rel="noreferrer">
              <Globe size={18} /> Demo
            </a>
          )}
          {p.repo && (
            <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noreferrer">
              <Github size={18} /> Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
