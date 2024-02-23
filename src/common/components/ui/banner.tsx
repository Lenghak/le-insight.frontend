import { cn } from "@/common/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const bannerVariants = cva(
  "flex w-full items-center rounded-lg text-sm font-medium ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        successive: "bg-successive text-successive-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        informative: "bg-informative text-informative-foreground",
        warning: "bg-warning text-warning-foreground",
        outline: "border border-input bg-background",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "bg-transparent",
      },
      size: {
        default: "min-h-10 px-4 py-3",
        sm: "min-h-9 rounded-lg px-3 py-2",
        lg: "min-h-11 rounded-lg px-8 py-4",
        icon: "min-h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BannerProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  asChild?: boolean;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(bannerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Banner.displayName = "Banner";

export { Banner, bannerVariants };
