import { z } from "zod";

export const ProfileSexSchema = z.enum(["MALE", "FEMALE", "RNTS"]);

export const ProfilesSchema = z.object({
  type: z.literal("profile"),
  id: z.string().uuid(),
  first_name: z.string(),
  last_name: z.string(),
  image_url: z.string().nullable(),
  bio: z.string().nullable(),
  birthday: z.string().datetime().nullable(),
  gender: z.string().nullable(),
  location_id: z.string().uuid().nullable(),
  following_count: z.number().positive(),
  follower_count: z.number().positive(),
  public_post_count: z.number().positive(),
  private_post_count: z.number().positive(),
  draft_post_count: z.number().positive(),
  sex: ProfileSexSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type ProfileType = z.infer<typeof ProfilesSchema>;
export type ProfileSexType = z.infer<typeof ProfileSexSchema>;
