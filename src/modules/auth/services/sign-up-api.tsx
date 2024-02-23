import {
  SignUpRequestSchema,
  type SignUpRequestType,
  type SignUpResponseType,
} from "@/modules/auth/types/sign-up-schema";

import { queryInstance } from "@/common/stores/api-store";
import type { AxiosResponse } from "axios";

export default async function postSignUp(signUpRequest: SignUpRequestType) {
  return queryInstance.post<
    SignUpResponseType,
    AxiosResponse<SignUpResponseType>,
    SignUpRequestType
  >("/auth/sign-up", SignUpRequestSchema.parse(signUpRequest));
}
