import { z } from "zod";

export const ProfileSexSchema = z.enum(["MALE", "FEMALE", "RNTS"]);

export const ProfilesSchema = z.object({
  type: z.literal("profile"),
  id: z.string().uuid(),
  first_name: z.string(),
  last_name: z.string(),
  image_url: z.string().nullable(),
  bio: z.string().nullable(),
  gender: z.string().nullable(),
  sex: ProfileSexSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type ProfileType = z.infer<typeof ProfilesSchema>;
export type ProfileSexType = z.infer<typeof ProfileSexSchema>;
