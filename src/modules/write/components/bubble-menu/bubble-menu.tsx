import { BUBBLE_QUICK_ITEMS } from "@/modules/write/constants/bubble-quick-items";

import { Separator } from "@/common/components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/common/components/ui/toggle-group";

import { cn } from "@/common/lib/utils";

import { type Editor as CoreEditor } from "@tiptap/core";
import { BubbleMenu } from "@tiptap/react";

interface EditorBubbleMenuProps {
  editor: CoreEditor;
}

export default function EditorBubbleMenu({ editor }: EditorBubbleMenuProps) {
  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{
        animation: true,
        delay: 1000,
        interactive: true,
      }}
      className={cn(
        "relative flex items-center gap-1 rounded-lg border bg-card p-1 shadow",
        "flex h-auto w-fit items-center justify-center gap-1",
      )}
    >
      <div className="flex h-auto w-fit items-center justify-center gap-1"></div>

      <Separator className="h-4 w-[1px]" />

      <ToggleGroup type="multiple">
        {BUBBLE_QUICK_ITEMS.map((item, index) => (
          <ToggleGroupItem
            size={"sm"}
            value={item.label}
            key={index}
          >
            <span className="sr-only">{item.label}</span>
            <item.icon className="size-4" />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </BubbleMenu>
  );
}
