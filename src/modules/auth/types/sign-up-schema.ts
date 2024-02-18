import { z } from "zod";

// schema
const SignUpRequestSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, {
    message: "Enter at least 8 characters password",
  }),
});

export default SignUpRequestSchema;

// types
export type SignUpRequestType = z.infer<typeof SignUpRequestSchema>;
