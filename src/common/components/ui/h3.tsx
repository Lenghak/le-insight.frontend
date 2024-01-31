import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

export type H3Props = HTMLAttributes<HTMLHeadingElement>;

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </h3>
    );
  },
);

H3.displayName = "H3";
