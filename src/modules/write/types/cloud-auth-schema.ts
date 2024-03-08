import { z } from "zod";

import { createResponseSchema } from "@/common/types/response-type";

// schema
export const CloudAuthResponseSchema = createResponseSchema({
  id: z.string(),
  attributes: z.object({
    token: z.string(),
  }),
  type: z.literal("articles"),
});

// types
export type CloudAuthResponseType = z.infer<typeof CloudAuthResponseSchema>;
