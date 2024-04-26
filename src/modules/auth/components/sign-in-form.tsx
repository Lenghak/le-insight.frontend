import useSignInService from "@/modules/auth/hooks/use-sign-in-service";
import { SignInRequestSchema } from "@/modules/auth/types/sign-in-schema";

import { Button, buttonVariants } from "@/common/components/ui/button";
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
import { type z } from "zod";

export default function SignInForm() {
  const form = useForm<z.infer<typeof SignInRequestSchema>>({
    resolver: zodResolver(SignInRequestSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPasswordShowed, setShowPassword] = useState(false);

  const { mutateAsync: signIn, isPending: isSigningIn } = useSignInService();

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit(async (values) => {
          await signIn(values);
        })}
        className="w-full space-y-2"
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
                  placeholder="someone@example.com"
                  autoComplete="on"
                  className="rounded-full px-4 font-medium"
                  {...field}
                />
              </FormControl>
              <FormMessage className="ml-4 list-item text-xs font-semibold" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className="font-bold"
                htmlFor="password-field"
              >
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    id="password-field"
                    placeholder="Enter a password"
                    className="rounded-full px-4 pr-16 font-medium"
                    type={isPasswordShowed ? "text" : "password"}
                    autoComplete="on"
                    {...field}
                  />
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    type="button"
                    className="absolute right-1 top-0 hover:bg-transparent"
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

        <div className="flex w-full items-center justify-end">
          <a
            href={"/auth/forgot-password"}
            className={cn(
              buttonVariants({
                variant: "link",
                size: "sm",
              }),
              "font-bold",
            )}
          >
            Forgot Password?
          </a>
        </div>

        <Button
          type={isSigningIn ? "button" : "submit"}
          disabled={isSigningIn}
          className={cn(
            "w-full gap-0 font-bold transition-all",
            isSigningIn && "gap-4",
          )}
        >
          <Loader2Icon
            className={cn("size-0 animate-spin", isSigningIn && "size-4")}
          />
          <span>Sign In</span>
        </Button>
      </form>
    </Form>
  );
}
