import { z } from "zod";

export const PaginationRequestSchema = z
  .object({
    limit: z
      .number({ coerce: true })
      .positive()
      .max(50)
      .optional()
      .default(50)
      .describe("Number of item per page"),
    page: z
      .number({ coerce: true })
      .positive()
      .optional()
      .default(1)
      .describe("Page offseting data"),
    q: z.string().optional().describe("Search string"),
  })
  .partial();

export const PaginationMetaSchema = z.object({
  count: z.number({ coerce: true }),
  page: z.number({ coerce: true }),
  totalPages: z.number({ coerce: true }),
  hasNextPage: z.boolean({ coerce: true }),
  hasPreviousPage: z.boolean({ coerce: true }),
});

export type PaginationRequestType = z.infer<typeof PaginationRequestSchema>;
export type PaginationMetaType = z.infer<typeof PaginationMetaSchema>;
