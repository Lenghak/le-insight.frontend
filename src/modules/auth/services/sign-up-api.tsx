import { queryInstance } from "@/common/stores/api";
import type { AxiosResponse } from "axios";

import type { SignUpRequestType } from "../types/sign-up-schema";

export default async function postSignUp(signUpRequest: SignUpRequestType) {
  return queryInstance.post<unknown, AxiosResponse<unknown>, SignUpRequestType>(
    "/auth/sign-up",
    signUpRequest,
  );
}
