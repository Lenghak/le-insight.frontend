import {
  ForgotPasswordRequestSchema,
  type ForgotPasswordRequestType,
} from "@/modules/auth/types/forgot-password-schema";

import { getPublicQueryInstance } from "@/common/stores/api-store";
import type { AxiosInstance, AxiosResponse } from "axios";

export default async function postForgotPassword(
  forgotPasswordRequest: ForgotPasswordRequestType,
  queryInstance?: AxiosInstance
) {
  return (queryInstance ?? getPublicQueryInstance()).post<
    unknown,
    AxiosResponse<unknown>,
    ForgotPasswordRequestType
  >(
    "/auth/request-recovery",
    ForgotPasswordRequestSchema.parse(forgotPasswordRequest),
  );
}
