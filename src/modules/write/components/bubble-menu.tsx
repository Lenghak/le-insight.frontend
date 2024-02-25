import { BubbleMenu } from "@tiptap/react";

export default function EditorBubbleMenu() {
  return (
    <BubbleMenu
      tippyOptions={{
        animation: true,
        delay: 1000,
        followCursor: true,
        interactive: true,
      }}
      className="flex items-center gap-2 rounded-lg"
    >
      {""}
    </BubbleMenu>
  );
}
