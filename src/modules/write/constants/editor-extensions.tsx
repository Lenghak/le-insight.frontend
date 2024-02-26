import TableOfContents from "@tiptap-pro/extension-table-of-contents";
import Document from "@tiptap/extension-document";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";

export const EDITOR_EXTENSION = [
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
    considerAnyAsEmpty: true,
  }),
  TableOfContents,
  Typography,
];
