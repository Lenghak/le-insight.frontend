import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

export type H2Props = HTMLAttributes<HTMLHeadingElement>;

export const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </h2>
    );
  },
);

H2.displayName = "H2";
