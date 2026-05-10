import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const caseStudies = defineCollection({
  loader: glob({ base: "./src/content/case-studies", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    industry: z.string(),
    role: z.string(),
    tech: z.array(z.string()).default([]),
    metrics: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const insights = defineCollection({
  loader: glob({ base: "./src/content/insights", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string().default("Product"),
    stack: z.array(z.string()).default([]),
    image: z.string().optional(),
    repoUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  "case-studies": caseStudies,
  insights,
  projects
};
