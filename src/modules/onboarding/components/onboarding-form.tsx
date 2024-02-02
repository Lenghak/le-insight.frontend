import { Button, buttonVariants } from "@/common/components/ui/button";
import { Checkbox } from "@/common/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/common/components/ui/form";
import { Small } from "@/common/components/ui/small";

import { cn } from "@/common/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, MoveRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
] as const;

const FormSchema = z.object({
  items: z
    .array(z.string())
    .refine((value) => value.some((item) => item) && value.length >= 3, {
      message: "You have to select at least 3 items.",
    }),
});

export default function OnboardingForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex h-full w-full flex-wrap content-between items-center space-y-8 sm:px-8 md:content-normal md:justify-center"
        onSubmit={form.handleSubmit((values) => console.log(values))}
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="max-w-screen-md">
              <div className="flex h-full flex-wrap items-start justify-start gap-4 space-x-0 space-y-0 md:justify-center">
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className={"space-y-0"}
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id,
                                      ),
                                    );
                              }}
                              className="hidden"
                              tabIndex={-1}
                            />
                          </FormControl>
                          <FormLabel
                            tabIndex={0}
                            className={cn(
                              buttonVariants({
                                size: "default",
                                variant: field.value?.includes(item.id)
                                  ? "default"
                                  : "outline",
                              }),
                              "cursor-pointer gap-2 font-semibold transition-all hover:border-primary",
                              form.formState.errors.items &&
                                "border-destructive",
                            )}
                          >
                            {field.value?.includes(item.id) ? (
                              <CheckIcon className="h-4 w-4" />
                            ) : null}

                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />

        <div className="flex w-full flex-col items-start justify-center gap-4 md:items-center">
          <Small className="font-bold">
            {form.formState.errors.items?.message}
          </Small>
          <Button
            type="submit"
            className="w-full gap-4 font-bold xs:w-auto"
            size={"lg"}
          >
            <span>Continue</span>
            <MoveRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
