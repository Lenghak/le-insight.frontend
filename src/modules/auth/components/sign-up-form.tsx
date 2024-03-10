import useSignUpService from "@/modules/auth/hooks/use-sign-up-service";

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
import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import useSignInService from "../hooks/use-sign-in-service";

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
  const {
    mutate: signUp,
    isPending: isSigningUp,
    isSuccess: isSignUpSuccess,
  } = useSignUpService();
  const { mutate: signIn } = useSignInService();

  useEffect(() => {
    if (isSignUpSuccess) {
      signIn({
        email: form.getValues().email,
        password: form.getValues().password,
      });
    }
  }, [isSignUpSuccess]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => signUp(values))}
        className="w-full space-y-2"
      >
        <div className="flex w-full items-start justify-between gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="font-semibold"
                  htmlFor="firstname-field"
                >
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    id="firstname-field"
                    placeholder="e. g. John"
                    autoComplete="on"
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
                <FormLabel
                  className="font-semibold"
                  htmlFor="lastname-field"
                >
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    id="lastname-field"
                    placeholder="e.g. Doe"
                    autoComplete="on"
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
              <FormLabel
                className="font-semibold"
                htmlFor="email-field"
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  id="email-field"
                  placeholder="someone@example.com"
                  autoComplete="on"
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
              <FormLabel className="font-semibold" htmlFor="password-field">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    id="password-field"
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
          type={isSigningUp ? "button" : "submit"}
          disabled={isSigningUp}
          className={cn(
            "w-full gap-0 rounded-md font-bold transition-all",
            isSigningUp && "gap-4",
          )}
        >
          <Loader2Icon
            className={cn("size-0 animate-spin", isSigningUp && "size-4")}
          />
          <span>Sign Up</span>
        </Button>
      </form>
    </Form>
  );
}
