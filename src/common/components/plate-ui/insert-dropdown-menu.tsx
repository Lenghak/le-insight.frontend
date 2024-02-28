import { Icons } from "@/common/components/ui/icons";

import { type DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
  ELEMENT_CODE_BLOCK,
  insertEmptyCodeBlock,
} from "@udecode/plate-code-block";
import {
  focusEditor,
  insertEmptyElement,
  useEditorRef,
} from "@udecode/plate-common";
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate-heading";
import { ELEMENT_HR } from "@udecode/plate-horizontal-rule";
import { ELEMENT_LINK, triggerFloatingLink } from "@udecode/plate-link";
import {
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  insertMedia,
} from "@udecode/plate-media";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { ELEMENT_TABLE, insertTable } from "@udecode/plate-table";
import {
  AppWindow,
  Code2Icon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  HeadingIcon,
  ImageIcon,
  Link2Icon,
  List,
  ListOrderedIcon,
  Table2Icon,
  TextQuoteIcon,
  TypeIcon,
} from "lucide-react";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from "./dropdown-menu";
import { ToolbarButton } from "./toolbar";

const items = [
  {
    label: "Basic blocks",
    items: [
      {
        value: ELEMENT_PARAGRAPH,
        label: "Paragraph",
        description: "Paragraph",
        icon: TypeIcon,
      },
      {
        value: ELEMENT_H1,
        label: "Heading 1",
        description: "Heading 1",
        icon: Heading1Icon,
      },
      {
        value: ELEMENT_H2,
        label: "Heading 2",
        description: "Heading 2",
        icon: Heading2Icon,
      },
      {
        value: ELEMENT_H3,
        label: "Heading 3",
        description: "Heading 3",
        icon: Heading3Icon,
      },
      {
        value: ELEMENT_BLOCKQUOTE,
        label: "Quote",
        description: "Quote (⌘+⇧+.)",
        icon: TextQuoteIcon,
      },
      {
        value: ELEMENT_TABLE,
        label: "Table",
        description: "Table",
        icon: Table2Icon,
      },
      {
        value: "ul",
        label: "Bulleted list",
        description: "Bulleted list",
        icon: List,
      },
      {
        value: "ol",
        label: "Numbered list",
        description: "Numbered list",
        icon: ListOrderedIcon,
      },
      {
        value: ELEMENT_HR,
        label: "Divider",
        description: "Divider (---)",
        icon: HeadingIcon,
      },
    ],
  },
  {
    label: "Media",
    items: [
      {
        value: ELEMENT_CODE_BLOCK,
        label: "Code",
        description: "Code (```)",
        icon: Code2Icon,
      },
      {
        value: ELEMENT_IMAGE,
        label: "Image",
        description: "Image",
        icon: ImageIcon,
      },
      {
        value: ELEMENT_MEDIA_EMBED,
        label: "Embed",
        description: "Embed",
        icon: AppWindow,
      },
      // {
      //   value: ELEMENT_EXCALIDRAW,
      //   label: "Excalidraw",
      //   description: "Excalidraw",
      //   icon: Icons.excalidraw,
      // },
    ],
  },
  {
    label: "Inline",
    items: [
      {
        value: ELEMENT_LINK,
        label: "Link",
        description: "Link",
        icon: Link2Icon,
      },
    ],
  },
];

export function InsertDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef();
  const openState = useOpenState();

  return (
    <DropdownMenu
      modal={false}
      {...openState}
      {...props}
    >
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip="Insert"
          isDropdown
        >
          <Icons name="Plus" />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto"
      >
        {items.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(
              ({ value: type, label: itemLabel, icon: Icon }) => (
                <DropdownMenuItem
                  key={type}
                  className="min-w-[180px]"
                  onSelect={async () => {
                    switch (type) {
                      case ELEMENT_CODE_BLOCK: {
                        insertEmptyCodeBlock(editor);

                        break;
                      }
                      case ELEMENT_IMAGE: {
                        await insertMedia(editor, { type: ELEMENT_IMAGE });

                        break;
                      }
                      case ELEMENT_MEDIA_EMBED: {
                        await insertMedia(editor, {
                          type: ELEMENT_MEDIA_EMBED,
                        });

                        break;
                      }
                      case "ul":
                      case "ol": {
                        insertEmptyElement(editor, ELEMENT_PARAGRAPH, {
                          select: true,
                          nextBlock: true,
                        });

                        // if (settingsStore.get.checkedId(KEY_LIST_STYLE_TYPE)) {
                        //   toggleIndentList(editor, {
                        //     listStyleType: type === "ul" ? "disc" : "decimal",
                        //   });
                        // } else if (settingsStore.get.checkedId("list")) {
                        //   toggleList(editor, { type });
                        // }

                        break;
                      }
                      case ELEMENT_TABLE: {
                        insertTable(editor);

                        break;
                      }
                      case ELEMENT_LINK: {
                        triggerFloatingLink(editor, { focused: true });

                        break;
                      }
                      default: {
                        insertEmptyElement(editor, type, {
                          select: true,
                          nextBlock: true,
                        });
                      }
                    }

                    focusEditor(editor);
                  }}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {itemLabel}
                </DropdownMenuItem>
              ),
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}