import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
  const origin = new URL(request.url).origin;
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
