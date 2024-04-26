import { cn } from "@/common/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        fair: "bg-opacity-15 hover:bg-opacity-25",
        dot: "relative flex items-center border-none bg-opacity-0 hover:bg-opacity-0 before:absolute before:-left-2 before:z-10 before:h-1 before:w-1 before:rounded-full before:content-['']",
      },
      colored: {
        red: "border-red-600 bg-red-600 text-red-600 before:bg-red-600",
        orange:
          "border-orange-600 bg-orange-600 text-orange-600 before:bg-orange-600",
        amber:
          "border-amber-600 bg-amber-600 text-amber-600 before:bg-amber-600",
        yellow:
          "border-yellow-600 bg-yellow-600 text-yellow-600 before:bg-yellow-600",
        lime: "border-lime-600 bg-lime-600 text-lime-600 before:bg-lime-600",
        green:
          "border-green-600 bg-green-600 text-green-600 before:bg-green-600",
        emerald:
          "border-emerald-600 bg-emerald-600 text-emerald-600 before:bg-emerald-600",
        teal: "border-teal-600 bg-teal-600 text-teal-600 before:bg-teal-600",
        cyan: "border-cyan-600 bg-cyan-600 text-cyan-600 before:bg-cyan-600",
        sky: "border-sky-600 bg-sky-600 text-sky-600 before:bg-sky-600",
        blue: "border-blue-600 bg-blue-600 text-blue-600 before:bg-blue-600",
        indigo:
          "border-indigo-600 bg-indigo-600 text-indigo-600 before:bg-indigo-600",
        violet:
          "border-violet-600 bg-violet-600 text-violet-600 before:bg-violet-600",
        purple:
          "border-purple-600 bg-purple-600 text-purple-600 before:bg-purple-600",
        fuchsia:
          "border-fuchsia-600 bg-fuchsia-600 text-fuchsia-600 before:bg-fuchsia-600",
        pink: "border-pink-600 bg-pink-600 text-pink-600 before:bg-pink-600",
        rose: "border-rose-600 bg-rose-600 text-rose-600 before:bg-rose-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, colored, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, colored }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
