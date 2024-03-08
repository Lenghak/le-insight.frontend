import { z } from "zod";

import { createResponseSchema } from "@/common/types/response-type";

// schemas
export const RefreshTokenRequestSchema = z.object({
  rt: z.string(),
});

export const RefreshTokensResponseSchema = createResponseSchema({
  id: z.string(),
  type: z.literal("tokens"),
  attributes: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

// types
export type RefreshTokensRequestType = z.infer<
  typeof RefreshTokenRequestSchema
>;
export type RefreshTokensResponseType = z.infer<
  typeof RefreshTokensResponseSchema
>;
