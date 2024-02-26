import {
  BoldIcon,
  Code2Icon,
  ItalicIcon,
  type LucideIcon,
  StrikethroughIcon,
  TextQuoteIcon,
  UnderlineIcon,
} from "lucide-react";

interface BubbleQuickItemType {
  label: string;
  icon: LucideIcon;
  action?: () => void;
}

export const BUBBLE_QUICK_ITEMS: BubbleQuickItemType[] = [
  {
    label: "Bold",
    icon: BoldIcon,
  },
  {
    label: "Italic",
    icon: ItalicIcon,
  },
  {
    label: "Underline",
    icon: UnderlineIcon,
  },
  {
    label: "Strikethrough",
    icon: StrikethroughIcon,
  },
  {
    label: "Code Block",
    icon: Code2Icon,
  },
  {
    label: "Quote",
    icon: TextQuoteIcon,
  },
];
