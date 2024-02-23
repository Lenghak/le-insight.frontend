import { z } from "zod";

// schemas
export const ForgotPasswordRequestSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

// types
export type ForgotPasswordRequestType = z.infer<
  typeof ForgotPasswordRequestSchema
>;
