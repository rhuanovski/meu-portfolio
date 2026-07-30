import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export async function GET(context) {
  const articles = (await getCollection("articles", ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: `Artigos de ${site.name}`,
    description: "Engenharia de software, arquitetura e pesquisa aplicada.",
    site: context.site ?? new URL(context.request.url).origin,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `/artigos/${article.id}`,
      categories: article.data.tags,
    })),
  });
}
