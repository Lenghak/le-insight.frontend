import { authKeys } from "@/modules/auth/constants/query-keys";
import postConfirmEmail from "@/modules/auth/services/confirm-email-api";
import { type ConfirmEmailRequestType } from "@/modules/auth/types/confirm-email-schema";

import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";

export default function useConfirmEmailService() {
  return useMutation(
    {
      mutationKey: authKeys.operation("verify-email"),
      mutationFn: async (confirmEmailRequest: ConfirmEmailRequestType) =>
        await postConfirmEmail(confirmEmailRequest),
    },
    queryClient,
  );
}
