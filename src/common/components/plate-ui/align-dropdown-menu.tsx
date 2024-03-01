import { type DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import {
  useAlignDropdownMenu,
  useAlignDropdownMenuState,
} from "@udecode/plate-alignment";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  useOpenState,
} from "./dropdown-menu";
import { ToolbarButton } from "./toolbar";

const items = [
  {
    value: "left",
    icon: AlignLeftIcon,
  },
  {
    value: "center",
    icon: AlignCenterIcon,
  },
  {
    value: "right",
    icon: AlignRightIcon,
  },
  {
    value: "justify",
    icon: AlignJustifyIcon,
  },
];

export function AlignDropdownMenu({ ...props }: DropdownMenuProps) {
  const state = useAlignDropdownMenuState();
  const { radioGroupProps } = useAlignDropdownMenu(state);

  const openState = useOpenState();
  const IconValue =
    items.find((item) => item.value === radioGroupProps.value)?.icon ??
    AlignLeftIcon;

  return (
    <DropdownMenu
      modal={false}
      {...openState}
      {...props}
    >
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip="Align"
          isDropdown
        >
          <IconValue />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="min-w-0"
      >
        <DropdownMenuRadioGroup
          className="flex flex-col gap-0.5"
          {...radioGroupProps}
        >
          {items.map(({ value: itemValue, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={itemValue}
              value={itemValue}
              hideIcon
            >
              <Icon className="size-4" />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
