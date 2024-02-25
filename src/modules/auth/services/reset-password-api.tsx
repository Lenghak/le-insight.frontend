import {
  ResetPasswordRequestSchema,
  type ResetPasswordRequestType,
} from "@/modules/auth/types/reset-password-schema";

import { queryInstance } from "@/common/stores/api-store";
import type { AxiosResponse } from "axios";

export default async function postResetPassword(
  resetPasswordRequest: ResetPasswordRequestType,
) {
  return queryInstance.post<unknown, AxiosResponse<unknown>>(
    "/auth/recovery-password",
    ResetPasswordRequestSchema.parse(resetPasswordRequest),
  );
}
