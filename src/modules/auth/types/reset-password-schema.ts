import { z } from "zod";

// schema
export const ResetPasswordRequestSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  token: z.string(),
});

//type
export type ResetPasswordRequestType = z.infer<
  typeof ResetPasswordRequestSchema
>;
