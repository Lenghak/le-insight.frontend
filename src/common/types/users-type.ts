import { z } from "zod";

export const UserRoleSchema = z.enum(["ADMIN", "USER", "GUEST"]);
export const UsersSchema = z.object({
  type: z.literal("user"),
  id: z.string().uuid(),
  profile_id: z.string().uuid(),
  phone: z.string().nullable(),
  email: z.string().email(),
  role: UserRoleSchema,
  banned_at: z.string().datetime().nullable(),
  banned_until: z.string().datetime().nullable(),
  deleted_at: z.string().datetime().nullable(),
  invited_at: z.string().datetime().nullable(),
  confirmed_at: z.string().datetime().nullable(),
  confirmation_sent_at: z.string().datetime().nullable(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type UsersType = z.infer<typeof UsersSchema>;
export type UsersRoleType = z.infer<typeof UserRoleSchema>;
