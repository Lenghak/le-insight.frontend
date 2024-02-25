import Document from "@tiptap/extension-document";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import { BubbleMenu, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [
  StarterKit.configure({
    document: false,
  }),
  Document.extend({
    content: "heading block*",
  }),
  FontFamily,
  Highlight,
  Placeholder.configure({
    placeholder: ({ node }) => {
      if (node.type.name === "heading") {
        return "What's the title?";
      }

      return "Describe your context.";
    },
  }),
  Typography,
];

export default function WriteEditor() {
  return (
    <EditorProvider
      extensions={extensions}
      slotAfter={<BubbleMenu>This is the bubble menu</BubbleMenu>}
      autofocus="start"
      editable
      injectCSS
      children={undefined}
    />
  );
}
