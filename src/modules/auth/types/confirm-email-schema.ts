import { z } from "zod";

//schema
export const ConfirmEmailRequestSchema = z.object({
  email: z.string().email(),
  token: z.string(),
});

//type
export type ConfirmEmailRequestType = z.infer<typeof ConfirmEmailRequestSchema>;
