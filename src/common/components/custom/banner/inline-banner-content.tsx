import { cn } from "@/common/lib/utils";

import type { HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export default function InlineBannerContent({
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-center gap-1 text-sm italic",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
