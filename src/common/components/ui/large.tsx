import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

type LargeProps = HTMLAttributes<HTMLSpanElement>;

export const Large = forwardRef<HTMLSpanElement, LargeProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        className={cn("text-lg font-semibold", className)}
        {...props}
        ref={ref}
      >
        {children}
      </span>
    );
  },
);

Large.displayName = "Large";
