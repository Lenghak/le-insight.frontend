import Logo from "@/common/components/logo";
import ProfileDropdown from "@/common/components/profile";
import { Button } from "@/common/components/ui/button";
import { Separator } from "@/common/components/ui/separator";

import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> {}

export default function HeaderMenu({ className, ...props }: HeaderMenuProps) {
  return (
    <section
      className={cn(
        className,
        "flex min-h-16 items-center justify-between gap-4 bg-card px-4 transition-all",
      )}
      {...props}
    >
      <a
        href="/"
        className="rounded-full"
      >
        <Logo />
        <span className="sr-only">Home</span>
      </a>

      <div className="flex w-fit items-center justify-end gap-4 pl-4">
        <Button
          variant={"outline"}
          className="bg-card font-semibold"
        >
          Preview
        </Button>

        <Button className="font-semibold">Publish</Button>

        <Separator className="h-4 w-[1px]" />

        <ProfileDropdown />
      </div>

      {/* Side Menu Toggle */}
    </section>
  );
}