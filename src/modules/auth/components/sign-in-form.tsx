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
import { Muted } from "@/common/components/ui/muted";

import { cn } from "@/common/lib/utils";

import useSignInService from "@/modules/auth/hooks/use-sign-in-service";
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

  const { mutateAsync: signIn, isPending: isSigningIn } = useSignInService()

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit(async (values) => {
          await signIn(values)
        })}
        className="w-full space-y-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="someone@example.com"
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
              <FormLabel className="font-semibold">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Enter a password"
                    className="pr-12"
                    type={isPasswordShowed ? "text" : "password"}
                    autoComplete="on"
                    {...field}
                  />
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    type="button"
                    className="absolute right-0 top-0 rounded-md hover:bg-transparent"
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
          className={cn("w-full rounded-md font-bold transition-all gap-0", isSigningIn && "gap-4")}
        >
          <Loader2Icon className={cn("size-0 animate-spin", isSigningIn && "size-4")} />
          <span>Sign In</span>
        </Button>

        <Muted className="text-center">
          Don&apos;t have an account?{" "}
          <a
            href="/auth/sign-up"
            className={cn(
              buttonVariants({ size: "sm", variant: "link" }),
              "font-bold",
            )}
          >
            Create One
          </a>
        </Muted>
      </form>
    </Form>
  );
}
