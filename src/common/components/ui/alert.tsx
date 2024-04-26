import { cn } from "@/common/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        fair: "bg-opacity-15 hover:bg-opacity-25",
      },
      colored: {
        amber:
          "border-amber-600 bg-amber-600 text-amber-600 focus-visible:ring-amber-600",
        emerald:
          "border-emerald-600 bg-emerald-600 text-emerald-600 focus-visible:ring-emerald-600",
        cyan: "border-cyan-600 bg-cyan-600 text-cyan-600 focus-visible:ring-cyan-600",
        pink: "border-pink-600 bg-pink-600 text-pink-600 focus-visible:ring-pink-600",
        rose: "border-rose-600 bg-rose-600 text-rose-600 focus-visible:ring-rose-600",
        purple:
          "border-purple-600 bg-purple-600 text-purple-600 ring-purple-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
