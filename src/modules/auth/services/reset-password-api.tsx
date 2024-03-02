import {
  ResetPasswordRequestSchema,
  type ResetPasswordRequestType,
  type ResetPasswordResponseType,
} from "@/modules/auth/types/reset-password-schema";

import { queryInstance } from "@/common/stores/api-store";
import type { AxiosResponse } from "axios";

export default async function postResetPassword(
  resetPasswordRequest: ResetPasswordRequestType,
) {
  return queryInstance.post<ResetPasswordResponseType, AxiosResponse<ResetPasswordResponseType>>(
    "/auth/recovery-password",
    ResetPasswordRequestSchema.parse(resetPasswordRequest),
  );
}
