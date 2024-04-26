import { z } from "zod";

export const CategoriesStatusEnum = z.enum([
  "ACTIVE",
  "INACTIVE",
  "PENDING",
  "REVOKED",
]);

export const CategoriesSchema = z.object({
  type: z.literal("category"),
  id: z.string().uuid(),
  label: z.string(),
  description: z.string(),
  assigned_count: z.number(),
  generated_count: z.number(),
  status: CategoriesStatusEnum,
  is_archived: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type CategoriesStatusType = z.infer<typeof CategoriesStatusEnum>;
export type CategoriesType = z.infer<typeof CategoriesSchema>;
