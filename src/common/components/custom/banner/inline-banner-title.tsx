import { Muted, type MutedProps } from "@/common/components/ui/muted";

import { cn } from "@/common/lib/utils";

type InlineBannerTitleProps = MutedProps;

export default function InlineBannerTitle({
  className,
  children,
  ...props
}: InlineBannerTitleProps) {
  return (
    <Muted
      className={cn(className)}
      {...props}
    >
      {children}
    </Muted>
  );
}
