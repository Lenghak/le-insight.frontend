import { useColorsCustom, useColorsCustomState } from "@udecode/plate-font";

import { cn } from "@/common/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { buttonVariants } from "./button";

import type { TColor } from "@/common/constants/color-constants";
import { ColorDropdownMenuItems } from "./color-dropdown-menu-items";
import { ColorInput } from "./color-input";
import { DropdownMenuItem } from "./dropdown-menu";

type ColorsCustomProps = {
  color?: string;
  colors: TColor[];
  customColors: TColor[];
  updateCustomColor: (color: string) => void;
  updateColor: (color: string) => void;
};

export function ColorsCustom({
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
}: ColorsCustomProps) {
  const state = useColorsCustomState({
    color,
    colors,
    customColors,
    updateCustomColor,
  });
  const { inputProps, menuItemProps } = useColorsCustom(state);

  return (
    <div className="flex flex-col gap-4">
      <ColorInput {...inputProps}>
        <DropdownMenuItem
          className={cn(buttonVariants({
            variant: "outline",
            isMenu: true,
          }), "justify-between font-semibold")}
          {...menuItemProps}
        >
          <span>Custom Color</span>
          <ChevronRightIcon className="size-4" />
        </DropdownMenuItem>
      </ColorInput>

      <ColorDropdownMenuItems
        color={color}
        colors={state.computedColors}
        updateColor={updateColor}
      />
    </div>
  );
}
