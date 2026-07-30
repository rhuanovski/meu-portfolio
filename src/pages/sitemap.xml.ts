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
  const staticRoutes = ["/", "/projetos", "/artigos", "/trajetoria", "/sobre", "/contato"];
  const entries = [
    ...staticRoutes.map((path) => ({ path, updatedAt: undefined })),
    ...projects.map((project) => ({
      path: `/projetos/${project.id}`,
      updatedAt: project.data.updatedAt ?? project.data.publishedAt,
    })),
    ...articles.map((article) => ({
      path: `/artigos/${article.id}`,
      updatedAt: article.data.updatedAt ?? article.data.publishedAt,
    })),
  ];

  const urls = entries
    .map(({ path, updatedAt }) => {
      const location = escapeXml(new URL(path, origin).toString());
      const lastModified = updatedAt
        ? `\n    <lastmod>${updatedAt.toISOString()}</lastmod>`
        : "";
      return `  <url>\n    <loc>${location}</loc>${lastModified}\n  </url>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
