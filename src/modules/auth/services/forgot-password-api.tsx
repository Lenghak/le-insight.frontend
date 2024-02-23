import {
  ForgotPasswordRequestSchema,
  type ForgotPasswordRequestType,
} from "@/modules/auth/types/forgot-password-schema";

import { queryInstance } from "@/common/stores/api-store";
import type { AxiosResponse } from "axios";

export default async function postForgotPassword(
  forgotPasswordRequest: ForgotPasswordRequestType,
) {
  return queryInstance.post<
    unknown,
    AxiosResponse<unknown>,
    ForgotPasswordRequestType
  >(
    "/auth/request-recovery",
    ForgotPasswordRequestSchema.parse(forgotPasswordRequest),
  );
}
