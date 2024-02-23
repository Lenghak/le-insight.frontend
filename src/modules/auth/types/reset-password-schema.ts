import { z } from "zod";

// schema
export const ResetPasswordRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  token: z.string(),
});

//type
export type ResetPasswordRequestType = z.infer<
  typeof ResetPasswordRequestSchema
>;
