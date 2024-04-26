import {
  SignUpRequestSchema,
  type SignUpRequestType,
  type SignUpResponseType,
} from "@/modules/auth/types/sign-up-schema";

import { getPublicQueryInstance } from "@/common/stores/api-store";
import type { AxiosInstance, AxiosResponse } from "axios";

export default async function postSignUp(
  signUpRequest: SignUpRequestType,
  queryInstance?: AxiosInstance,
) {
  return (queryInstance ?? getPublicQueryInstance()).post<
    SignUpResponseType,
    AxiosResponse<SignUpResponseType>,
    SignUpRequestType
  >("/auth/sign-up", SignUpRequestSchema.parse(signUpRequest));
}
