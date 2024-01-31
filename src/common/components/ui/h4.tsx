import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

export type H4Props = HTMLAttributes<HTMLHeadingElement>;

export const H4 = forwardRef<HTMLHeadingElement, H4Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </h4>
    );
  },
);

H4.displayName = "H4";
