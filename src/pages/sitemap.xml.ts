import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = async ({ request }) => {
  const origin = new URL(request.url).origin;
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  const staticRoutes = [
    { pt: "/", en: "/en" },
    { pt: "/projetos", en: "/en/projects" },
    { pt: "/artigos", en: "/en/articles" },
    { pt: "/trajetoria", en: "/en/journey" },
    { pt: "/sobre", en: "/en/about" },
    { pt: "/contato", en: "/en/contact" },
  ];
  const entries = [
    ...staticRoutes.map((routes) => ({ ...routes, updatedAt: undefined })),
    ...projects.map((project) => ({
      pt: `/projetos/${project.id}`,
      en: `/en/projects/${project.id}`,
      updatedAt: project.data.updatedAt ?? project.data.publishedAt,
    })),
    ...articles.map((article) => ({
      pt: `/artigos/${article.id}`,
      en: `/en/articles/${article.id}`,
      updatedAt: article.data.updatedAt ?? article.data.publishedAt,
    })),
  ];

  const urls = entries
    .flatMap(({ pt, en, updatedAt }) => {
      const portugueseUrl = escapeXml(new URL(pt, origin).toString());
      const englishUrl = escapeXml(new URL(en, origin).toString());
      const lastModified = updatedAt
        ? `\n    <lastmod>${updatedAt.toISOString()}</lastmod>`
        : "";
      const alternates = `\n    <xhtml:link rel="alternate" hreflang="pt-BR" href="${portugueseUrl}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${englishUrl}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${portugueseUrl}" />`;

      return [
        `  <url>\n    <loc>${portugueseUrl}</loc>${lastModified}${alternates}\n  </url>`,
        `  <url>\n    <loc>${englishUrl}</loc>${lastModified}${alternates}\n  </url>`,
      ];
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
