import Section from "../components/Section";
import ArticlesCard from "../components/ArticlesCard";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <Section title="Artigos" subtitle="Veja meu portfólio de artigos publicados.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((p) => (
          <ArticlesCard key={p.id} p={p} />
        ))}
      </div>
    </Section>
  );
}
