import { z } from "zod";

export const UsersSchema = z.object({
  type: z.literal("user"),
  id: z.string().uuid(),
  profile_id: z.string().uuid(),
  phone: z.string().nullable(),
  email: z.string().email(),
  role: z.string(),
  banned_until: z.string().datetime().nullable(),
  deleted_at: z.string().datetime().nullable(),
  invited_at: z.string().datetime().nullable(),
  confirmed_at: z.string().datetime().nullable(),
  confirmation_sent_at: z.string().datetime().nullable(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
