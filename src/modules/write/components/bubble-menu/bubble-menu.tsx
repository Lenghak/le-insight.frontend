import { Separator } from "@/common/components/ui/separator";
import { Toggle } from "@/common/components/ui/toggle";

import { cn } from "@/common/lib/utils";

import { type Editor as CoreEditor } from "@tiptap/core";
import { BubbleMenu } from "@tiptap/react";

import { BUBBLE_QUICK_ITEMS } from "../../constants/bubble-quick-items";

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
        followCursor: true,
        interactive: true,
      }}
      className={cn(
        "relative flex items-center gap-1 rounded-lg border bg-card p-1 shadow",
        "flex h-auto w-fit items-center justify-center gap-1",
      )}
    >
      <div className="flex h-auto w-fit items-center justify-center gap-1"></div>

      <Separator className="h-4 w-[1px]" />

      <div className="flex h-auto w-fit items-center justify-center gap-1">
        {BUBBLE_QUICK_ITEMS.map((item, index) => (
          <Toggle
            key={index}
            size={"sm"}
          >
            <span className="sr-only">{item.label}</span>
            <item.icon className="size-4"></item.icon>
          </Toggle>
        ))}
      </div>
    </BubbleMenu>
  );
}
