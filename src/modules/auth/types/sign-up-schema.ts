import { z } from "zod";

import { SignInResponseSchema } from "./sign-in-schema";

// schema
export const SignUpRequestSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, {
    message: "Enter at least 8 characters password",
  }),
});

export const SignUpResponseSchema = SignInResponseSchema;

// types
export type SignUpRequestType = z.infer<typeof SignUpRequestSchema>;
export type SignUpResponseType = z.infer<typeof SignUpResponseSchema>;
