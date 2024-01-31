import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

export type MutedProps = HTMLAttributes<HTMLHeadingElement>;

export const Muted = forwardRef<HTMLHeadingElement, MutedProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
        ref={ref}
      >
        {children}
      </p>
    );
  },
);

Muted.displayName = "Muted";
