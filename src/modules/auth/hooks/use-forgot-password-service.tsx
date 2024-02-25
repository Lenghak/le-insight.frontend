import { authKeys } from "@/modules/auth/constants/query-keys";
import postForgotPassword from "@/modules/auth/services/forgot-password-api";
import { type ForgotPasswordRequestType } from "@/modules/auth/types/forgot-password-schema";

import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export default function useForgotPasswordService() {
  const mutation = useMutation(
    {
      mutationKey: authKeys.operation("forgot-password"),
      mutationFn: async (forgotPasswordRequest: ForgotPasswordRequestType) =>
        await postForgotPassword(forgotPasswordRequest),
      onError: (err) => {
        if (err instanceof AxiosError)
          return toast.error(
            err.response?.status === 429
              ? "Too many request"
              : "Request Failed",
            {
              closeButton: true,
              duration: 10 * 1000,
              description:
                err.response?.status === 429
                  ? "You have sent many request recently, you need to wait for a while in order to request again."
                  : "There was a technical problem while sending the link. Please try again later.",
            },
          );

        return toast.error("Request Failed", {
          closeButton: true,
          duration: 10 * 1000,
          description:
            "There was a technical problem while sending the link. Please try again later.",
        });
      },
    },
    queryClient,
  );

  return { ...mutation };
}
