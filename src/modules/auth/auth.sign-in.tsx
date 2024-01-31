import AuthLayout from "@/common/layouts/auth.layout.astro";

import { Button, buttonVariants } from "@/common/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";
import { H1 } from "@/common/components/ui/h1";
import { Input } from "@/common/components/ui/input";
import { Muted } from "@/common/components/ui/muted";

import { cn } from "@/common/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignInFormSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, {
    message: "Enter at least 8 characters password",
  }),
});

export default function SignInModule() {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPasswordShowed, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-4">
          <H1>Sign In</H1>
          <Muted className="max-w-xs text-center">
            Let&apos;s get started by enter some credential information below.
          </Muted>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => console.log(values))}
            className="w-full space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="font-semibold italic" />
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
                  <FormMessage className="font-semibold italic" />
                </FormItem>
              )}
            />

            <div className="flex w-full items-center justify-end">
              <a
                href={"/forgot-password"}
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
              type="submit"
              className="w-full rounded-md font-bold"
            >
              Sign In
            </Button>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
}
