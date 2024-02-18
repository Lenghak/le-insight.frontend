import { z } from "zod";

// schema
const SignInRequestSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, {
    message: "Enter at least 8 characters password",
  }),
});

export default SignInRequestSchema;

// type
export type SignInRequestType = z.infer<typeof SignInRequestSchema>;
