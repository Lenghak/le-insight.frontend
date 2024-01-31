import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

export type H1Props = HTMLAttributes<HTMLHeadingElement>;

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </h1>
    );
  },
);

H1.displayName = "H1";
