import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const guide = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number().positive().int(),
    title: z.string(),
    creationDate: z.date(),
    updateDate: z.date().optional(),
    draft: z.boolean(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  guide,
};
