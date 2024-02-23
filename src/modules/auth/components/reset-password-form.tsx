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

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useEffect, useState } from "react";
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
  email: string;
  token: string;
}

export default function ResetPasswordForm({
  email,
  token,
}: ResetPasswordFormProps) {
  const form = useForm<z.infer<typeof ResetPasswordFormSchema>>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [isPasswordShowed, setShowPassword] = useState(false);

  const { mutate: resetPassword, isSuccess } = useResetPasswordService();

  useEffect(() => {
    if (isSuccess) {
      window.location.replace("/");
    }
  }, [isSuccess]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          resetPassword({
            email,
            token,
            password: values.newPassword,
            confirmPassword: values.confirmPassword,
          }),
        )}
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
          type="submit"
          className="mt-4 w-full rounded-md font-bold"
        >
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
