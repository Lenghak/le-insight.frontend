import type {
  SignInRequestType,
  SignInResponseType,
} from "@/modules/auth/types/sign-in-schema";

import { queryInstance } from "@/common/stores/api-store";
import type { AxiosResponse } from "axios";

export default async function postSignIn(signInType: SignInRequestType) {
  return queryInstance.post<
    SignInResponseType,
    AxiosResponse<SignInResponseType>,
    SignInRequestType
  >("/auth/sign-in", signInType);
}
