import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/common/lib/utils";

type PProps = HTMLAttributes<HTMLParagraphElement>;

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
        ref={ref}
      >
        {children}
      </p>
    );
  },
);

P.displayName = "P";
