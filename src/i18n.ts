export type Locale = "pt" | "en";

export const localeMeta = {
  pt: {
    htmlLang: "pt-BR",
    hreflang: "pt-BR",
    dateLocale: "pt-BR",
    ogLocale: "pt_BR",
    defaultTitle: "Engenharia e software",
    description:
      "Portfólio de Rhuan Carlos: engenharia de software, produtos web, visão computacional e pesquisa aplicada.",
    rssTitle: "Artigos de Rhuan Carlos",
  },
  en: {
    htmlLang: "en",
    hreflang: "en",
    dateLocale: "en-US",
    ogLocale: "en_US",
    defaultTitle: "Engineering and software",
    description:
      "Rhuan Carlos' portfolio: software engineering, web products, computer vision, and applied research.",
    rssTitle: "Articles by Rhuan Carlos",
  },
} as const;

export const navigation = {
  pt: [
    { href: "/projetos", label: "Projetos" },
    { href: "/artigos", label: "Artigos" },
    { href: "/trajetoria", label: "Trajetória" },
    { href: "/sobre", label: "Sobre" },
  ],
  en: [
    { href: "/en/projects", label: "Projects" },
    { href: "/en/articles", label: "Articles" },
    { href: "/en/journey", label: "Journey" },
    { href: "/en/about", label: "About" },
  ],
} as const;

const routePairs = [
  { pt: "/projetos", en: "/en/projects" },
  { pt: "/artigos", en: "/en/articles" },
  { pt: "/trajetoria", en: "/en/journey" },
  { pt: "/contato", en: "/en/contact" },
  { pt: "/sobre", en: "/en/about" },
  { pt: "/rss.xml", en: "/en/rss.xml" },
  { pt: "/404", en: "/en/404" },
] as const;

const normalizePath = (pathname: string) => {
  const withoutTrailingSlash = pathname.replace(/\/+$/, "");
  return withoutTrailingSlash || "/";
};

const translatePath = (pathname: string, target: Locale) => {
  const path = normalizePath(pathname);

  if (path === "/" || path === "/en") {
    return target === "pt" ? "/" : "/en";
  }

  for (const pair of routePairs) {
    const source = target === "pt" ? pair.en : pair.pt;
    const destination = target === "pt" ? pair.pt : pair.en;

    if (path === source) return destination;
    if (path.startsWith(`${source}/`)) {
      return `${destination}${path.slice(source.length)}`;
    }
  }

  return target === "pt" ? "/" : "/en";
};

export const getLanguagePaths = (pathname: string) => ({
  pt: translatePath(pathname, "pt"),
  en: translatePath(pathname, "en"),
});

export const isEnglishPath = (pathname: string) =>
  normalizePath(pathname) === "/en" || normalizePath(pathname).startsWith("/en/");
