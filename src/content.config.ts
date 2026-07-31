import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
};

const projectSchema = z.object({
    ...commonFields,
    eyebrow: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    github: z.url().optional(),
    live: z.url().optional(),
    accent: z.enum(["violet", "blue", "amber", "emerald"]).default("violet"),
  });

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ base: "./src/content/en/projects", pattern: "**/*.{md,mdx}" }),
  schema: projectSchema,
});

const articleSchema = z.object({
    ...commonFields,
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().int().positive(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    sourceUrl: z.url().optional(),
    accent: z.enum(["violet", "blue", "amber", "emerald"]).default("violet"),
  });

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: articleSchema,
});

const articlesEn = defineCollection({
  loader: glob({ base: "./src/content/en/articles", pattern: "**/*.{md,mdx}" }),
  schema: articleSchema,
});

const eventSchema = z.object({
    ...commonFields,
    organizer: z.string(),
    role: z.string(),
    location: z.string(),
    link: z.url().optional(),
    image: z.string().optional(),
  });

const events = defineCollection({
  loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
  schema: eventSchema,
});

const eventsEn = defineCollection({
  loader: glob({ base: "./src/content/en/events", pattern: "**/*.{md,mdx}" }),
  schema: eventSchema,
});

const certificateSchema = z.object({
    ...commonFields,
    issuer: z.string(),
    credentialUrl: z.url().optional(),
    skills: z.array(z.string()).default([]),
    image: z.string().optional(),
  });

const certificates = defineCollection({
  loader: glob({ base: "./src/content/certificates", pattern: "**/*.{md,mdx}" }),
  schema: certificateSchema,
});

const certificatesEn = defineCollection({
  loader: glob({ base: "./src/content/en/certificates", pattern: "**/*.{md,mdx}" }),
  schema: certificateSchema,
});

export const collections = {
  projects,
  projectsEn,
  articles,
  articlesEn,
  events,
  eventsEn,
  certificates,
  certificatesEn,
};
