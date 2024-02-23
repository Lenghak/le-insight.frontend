import useSignUp from "@/modules/auth/hooks/use-sign-up";

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

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpFormSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"),
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, {
    message: "Enter at least 8 characters password",
  }),
});

export default function SignUpForm() {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const [isPasswordShowed, setShowPassword] = useState(false);
  const { mutate: signUp } = useSignUp();

  return (
    <Form {...form}>
      <form
        method="POST"
        onSubmit={form.handleSubmit((values) => signUp(values))}
        className="w-full space-y-2"
      >
        <div className="flex w-full items-start justify-between gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e. g. John"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-4 list-item text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-4 list-item text-xs font-semibold" />
              </FormItem>
            )}
          />
        </div>

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

        <Muted className="text-center">
          Already have an account?
          <a
            href="/auth/sign-in"
            className={cn(
              buttonVariants({ size: "sm", variant: "link" }),
              "font-bold",
            )}
          >
            Sign In
          </a>
        </Muted>

        <Button
          type="submit"
          className="w-full rounded-md font-bold"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
