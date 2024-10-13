import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const posts = defineCollection({
  type: "content",
  schema: z.object({
    // id: z.number().positive().int(),
    title: z.string(),
    creationDate: z.date(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts,
};
