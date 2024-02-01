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
import { useForm } from "react-hook-form";
import { z } from "zod";

const ForgotPasswordFormSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

export default function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof ForgotPasswordFormSchema>>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
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
              <FormMessage className="ml-4 list-item text-xs font-semibold" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full rounded-md font-bold"
        >
          Send Link to Email
        </Button>
      </form>
    </Form>
  );
}
