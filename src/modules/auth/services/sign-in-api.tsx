import { getPublicQueryInstance } from "@/common/stores/api-store";
import {
  SignInRequestSchema,
  type SignInRequestType,
  type SignInResponseType,
} from "@/modules/auth/types/sign-in-schema";

import type { AxiosInstance, AxiosResponse } from "axios";

export default async function postSignIn(signInRequest: SignInRequestType, queryInstance?: AxiosInstance
) {
  return (queryInstance ?? getPublicQueryInstance()).post<
    SignInResponseType,
    AxiosResponse<SignInResponseType>,
    SignInRequestType
  >("/auth/sign-in", SignInRequestSchema.parse(signInRequest));
}
