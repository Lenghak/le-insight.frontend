import { z } from "zod";

export const ProfilesSchema = z.object({
  type: z.literal("profile"),
  id: z.string().uuid(),
  first_name: z.string(),
  last_name: z.string(),
  image_id: z.string().uuid().nullable(),
  bio: z.string().nullable(),
  gender: z.string().nullable(),
  sex: z.enum(["male", "female", "rather not say"]),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});
