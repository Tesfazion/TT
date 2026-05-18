import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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
    highlights: z.array(z.string()).default([]),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  projects
};
