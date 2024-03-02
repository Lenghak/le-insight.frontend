import { authKeys } from "@/modules/auth/constants/query-keys";
import postResetPassword from "@/modules/auth/services/reset-password-api";
import { type ResetPasswordRequestType } from "@/modules/auth/types/reset-password-schema";

import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useResetPasswordService = () => {

  return useMutation(
    {
      mutationKey: authKeys.operation("reset-password"),
      mutationFn: async (resetPasswordRequest: ResetPasswordRequestType) =>
        await postResetPassword(resetPasswordRequest),
      onError: (err) => {
        if (err instanceof AxiosError && err.status === 400) {
          toast.error("Invalid Token", {
            closeButton: true,
            duration: 10 * 1000,
            description:
              "The token for the reset password is invalid or already expired. Please try request the token to your email again.",
          });
        } else {
          toast.error("Internal Server Error", {
            closeButton: true,
            duration: 10 * 1000,
            description:
              "There was a technical problem on our end while resetting your password. Please try again later.",
          });
        }
      },
      onSuccess: () => {
        toast.success("Password Reset Successfully", {
          closeButton: true,
          duration: 10 * 1000,
          description:
            "Your password has been reset. You can sign out and test them if you want.",
        });
      },
    },
    queryClient,
  );
};
