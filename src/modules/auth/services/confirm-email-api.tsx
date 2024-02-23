import type { ConfirmEmailRequestType } from "@/modules/auth/types/confirm-email";

import { queryInstance } from "@/common/stores/api-store";
import type { AxiosResponse } from "axios";

export default async function postConfrimEmail(
  confirmEmailRequest: ConfirmEmailRequestType,
) {
  return queryInstance.post<
    unknown,
    AxiosResponse<unknown>,
    ConfirmEmailRequestType
  >("/confirm", confirmEmailRequest);
}
