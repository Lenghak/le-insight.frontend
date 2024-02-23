import { z } from "zod";

import { ProfilesSchema } from "@/common/types/profiles-type";
import {
  createEntitySchema,
  createReponseSchema,
} from "@/common/types/response-type";
import { UsersSchema } from "@/common/types/users-type";

// schema
export const SignInRequestSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, {
    message: "Enter at least 8 characters password",
  }),
});

export const SignInResponseSchema = createReponseSchema({
  id: UsersSchema.shape.id,
  type: UsersSchema.shape.type,
  attributes: UsersSchema.omit({ id: true, type: true }),
  included: z.array(
    createEntitySchema({
      id: ProfilesSchema.shape.id,
      type: ProfilesSchema.shape.type,
      attributes: ProfilesSchema.omit({ id: true, type: true }),
    }),
  ),
  meta: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

// type
export type SignInRequestType = z.infer<typeof SignInRequestSchema>;
export type SignInResponseType = z.infer<typeof SignInResponseSchema>;
