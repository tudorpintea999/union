import { defineCollection, z } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string().default("../layouts/blog-layout.astro"),
    title: z.string(),
    // yyyy-MM-dd
    date: z.date(),
    author: z.string().default("union_build"),
    description: z.string().optional(),
    editUrl: z.union([z.string().url(), z.boolean()]).optional().default(true),
    lastUpdated: z.union([z.date(), z.boolean()]).optional(),
    hidden: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  docs: defineCollection({ schema: docsSchema() }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};