import useForgotPasswordService from "@/modules/auth/hooks/use-forgot-password-service";
import { ForgotPasswordRequestSchema } from "@/modules/auth/types/forgot-password-schema";

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
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof ForgotPasswordRequestSchema>>({
    resolver: zodResolver(ForgotPasswordRequestSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    mutate: requestRecovery,
    isSuccess,
    isPending,
  } = useForgotPasswordService();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          requestRecovery({ email: values.email }),
        )}
        className="w-full max-w-screen-xs space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="font-bold"
                htmlFor="email-field"
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  id="email-field"
                  placeholder="Enter email address"
                  autoComplete="on"
                  className="rounded-full px-4 font-medium"
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-4 list-item text-xs font-semibold" />
            </FormItem>
          )}
        />

        {isSuccess && !isPending ? (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            Have not received the recovery link yet?
            <Button
              variant={"link"}
              className="font-bold"
            >
              Resend
            </Button>
          </div>
        ) : (
          ""
        )}

        {!isSuccess && (
          <Button
            type={isPending ? "button" : "submit"}
            disabled={isPending}
            className={cn(
              "w-full gap-0 font-bold transition-all",
              isPending && "gap-4",
            )}
          >
            <Loader2Icon
              className={cn("size-0 animate-spin", isPending && "size-4")}
            />
            <span>Reset Password</span>
          </Button>
        )}
      </form>
    </Form>
  );
}
