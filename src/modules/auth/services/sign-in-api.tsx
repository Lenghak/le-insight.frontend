import type { SignInRequestType } from "@/modules/auth/types/sign-in-schema";

import { queryInstance } from "@/common/stores/api";
import type { AxiosResponse } from "axios";

export default async function postSignIn(signInType: SignInRequestType) {
  //TODO: Add sign in response type
  return queryInstance.post<unknown, AxiosResponse<unknown>, SignInRequestType>(
    "/auth/sign-in",
    signInType,
  );
}
