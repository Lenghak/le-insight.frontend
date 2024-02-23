import {
  ConfirmEmailRequestSchema,
  type ConfirmEmailRequestType,
} from "@/modules/auth/types/confirm-email-schema";

import { queryInstance } from "@/common/stores/api-store";
import type { AxiosResponse } from "axios";

export default async function postConfirmEmail(
  confirmEmailRequest: ConfirmEmailRequestType,
) {
  return queryInstance.post<
    unknown,
    AxiosResponse<unknown>,
    ConfirmEmailRequestType
  >("/auth/confirm", ConfirmEmailRequestSchema.parse(confirmEmailRequest));
}
