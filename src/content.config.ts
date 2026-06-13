import { defineCollection, z } from "astro:content";

const learning = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum(["book", "video", "repo"]),
    typeLabel: z.string(),
    author: z.string(),
    cover: z.string(),
    status: z.string(),
    depth: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(),
    sourceHref: z.string().url().optional()
  })
});

const awards = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional()
  })
});

export const collections = {
  learning,
  awards
};
