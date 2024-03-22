import ProfileDropdown from "@/common/components/custom/profile";
import { CloudToolbarButtons } from "@/common/components/plate-ui/cloud-toolbar-buttons";
import { buttonVariants } from "@/common/components/ui/button";
import { Separator } from "@/common/components/ui/separator";

import { cn } from "@/common/lib/utils";

import { type HTMLAttributes } from "react";

interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> { }

export default function HeaderMenu({ className, ...props }: HeaderMenuProps) {
  return (
    <section
      className={cn(
        className,
        "flex min-h-16 items-center justify-between gap-4 px-4 transition-all",
      )}
      {...props}
    >
      <a
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "bg-card font-semibold",
        )}
      >
        Cancel
      </a>

      <div className="flex w-fit items-center justify-end gap-4 pl-4">

        <CloudToolbarButtons />

        <Separator className="h-4 w-[1px]" />

        <ProfileDropdown />
      </div>
    </section>
  );
}
