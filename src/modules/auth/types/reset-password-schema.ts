import { z } from "zod";

import { SignInResponseSchema } from "./sign-in-schema";

// schema
export const ResetPasswordRequestSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  token: z.string(),
});
export const ResetPasswordResponseSchema = SignInResponseSchema.omit({
  meta: true,
});

//type
export type ResetPasswordRequestType = z.infer<
  typeof ResetPasswordRequestSchema
>;
export type ResetPasswordResponseType = z.infer<
  typeof ResetPasswordResponseSchema
>;
