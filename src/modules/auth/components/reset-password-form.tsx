import { useResetPasswordService } from "@/modules/auth/hooks/use-reset-password-service";

import { Button } from "@/common/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";

import { cn } from "@/common/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ResetPasswordFormSchema = z
  .object({
    newPassword: z.string().min(8, {
      message: "Enter a new passowrd",
    }),
    confirmPassword: z.string().min(8, {
      message: "Enter at least 8 characters password",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const form = useForm<z.infer<typeof ResetPasswordFormSchema>>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [isPasswordShowed, setShowPassword] = useState(false);

  const { mutate: resetPassword, isPending: isResettingPassword } =
    useResetPasswordService();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => {
          resetPassword({
            token: token?.length > 0 ? token : new URLSearchParams(window.location.search).get("token") ?? "",
            password: values.newPassword,
            confirmPassword: values.confirmPassword,
          });

        })}
        className="flex w-full flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="font-semibold"
                htmlFor="new-password-field"
              >
                New Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    id="new-password-field"
                    placeholder="Enter a new password"
                    className="pr-12"
                    type={isPasswordShowed ? "text" : "password"}
                    autoComplete="on"
                    {...field}
                  />
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    type="button"
                    className="absolute right-0 top-0"
                    onClick={() => setShowPassword(!isPasswordShowed)}
                  >
                    {isPasswordShowed ? (
                      <EyeIcon size={18} />
                    ) : (
                      <EyeOffIcon size={18} />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="ml-4 list-item text-xs font-semibold" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="font-semibold"
                htmlFor="confirm-new-password"
              >
                Confirm Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    id="confirm-new-password"
                    placeholder="Re-type your password"
                    className="pr-12"
                    type={isPasswordShowed ? "text" : "password"}
                    autoComplete="on"
                    {...field}
                  />
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    type="button"
                    className="absolute right-0 top-0"
                    onClick={() => setShowPassword(!isPasswordShowed)}
                  >
                    {isPasswordShowed ? (
                      <EyeIcon size={18} />
                    ) : (
                      <EyeOffIcon size={18} />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="ml-4 list-item text-xs font-semibold" />
            </FormItem>
          )}
        />

        <Button
          type={isResettingPassword ? "button" : "submit"}
          disabled={isResettingPassword}
          className={cn(
            "w-full gap-0 rounded-md font-bold transition-all",
            isResettingPassword && "gap-4",
          )}
        >
          <Loader2Icon
            className={cn(
              "size-0 animate-spin",
              isResettingPassword && "size-4",
            )}
          />
          <span>Reset Password</span>
        </Button>
      </form>
    </Form>
  );
}
