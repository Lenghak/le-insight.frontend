import EmbedMediaDialog from "@/modules/write/composites/embed-media-dialog";
import UploadMediaDialog from "@/modules/write/composites/upload-media-dialog";
import {
  EDITOR_IMAGE_DIALOG_ID,
  EDITOR_MEDIA_DIALOG_ID,
} from "@/modules/write/constants/dailogs-keys";
import { setMediaDialogState } from "@/modules/write/stores/upload-dialog-store";

import { Icons } from "@/common/components/plate-ui/icons";

import { cn } from "@/common/lib/utils";

import { type DropdownMenuProps as PrimitiveDropdownMenuProps } from "@radix-ui/react-dropdown-menu";
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
import { toggleIndentList } from "@udecode/plate-indent-list";
import { ELEMENT_LINK, triggerFloatingLink } from "@udecode/plate-link";
import { ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED } from "@udecode/plate-media";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { ELEMENT_TABLE, insertTable } from "@udecode/plate-table";
import { ClapperboardIcon, MinusIcon } from "lucide-react";
import React, { Fragment } from "react";

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

interface DropdownMenuProps extends PrimitiveDropdownMenuProps {
  triggerClassName?: string;
  isDropdown?: boolean;
}

const items = [
  {
    label: "Basic blocks",
    items: [
      {
        value: ELEMENT_PARAGRAPH,
        label: "Paragraph",
        description: "Paragraph",
        icon: Icons.paragraph,
      },
      {
        value: ELEMENT_H1,
        label: "Heading 1",
        description: "Heading 1",
        icon: Icons.h1,
      },
      {
        value: ELEMENT_H2,
        label: "Heading 2",
        description: "Heading 2",
        icon: Icons.h2,
      },
      {
        value: ELEMENT_H3,
        label: "Heading 3",
        description: "Heading 3",
        icon: Icons.h3,
      },
      {
        value: ELEMENT_BLOCKQUOTE,
        label: "Quote",
        description: "Quote (⌘+⇧+.)",
        icon: Icons.blockquote,
      },
      {
        value: ELEMENT_TABLE,
        label: "Table",
        description: "Table",
        icon: Icons.table,
      },
      {
        value: "ul",
        label: "Bulleted list",
        description: "Bulleted list",
        icon: Icons.ul,
      },
      {
        value: "ol",
        label: "Numbered list",
        description: "Numbered list",
        icon: Icons.ol,
      },
      {
        value: ELEMENT_HR,
        label: "Divider",
        description: "Divider (---)",
        icon: MinusIcon,
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
        icon: Icons.codeblock,
      },
      {
        value: ELEMENT_IMAGE,
        label: "Image",
        description: "Image",
        icon: Icons.image,
      },
      {
        value: ELEMENT_MEDIA_EMBED,
        label: "Embed",
        description: "Embed",
        icon: ClapperboardIcon,
      },
      // {
      //   value: ELEMENT_EXCALIDRAW,
      //   label: "Excalidraw",
      //   description: "Excalidraw",
      //   icon: PencilLineIcon,
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
        icon: Icons.link,
      },
    ],
  },
];

export function InsertDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorRef();
  const openState = useOpenState();

  return (
    <Fragment>
      <DropdownMenu
        modal={false}
        {...openState}
        {...props}
      >
        <DropdownMenuTrigger asChild>
          <ToolbarButton
            className={cn(props.triggerClassName)}
            pressed={openState.open}
            tooltip="Insert"
            isDropdown={props.isDropdown ?? true}
          >
            <Icons.add />
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
                    onSelect={() => {
                      switch (type) {
                        case ELEMENT_CODE_BLOCK: {
                          insertEmptyCodeBlock(editor);
                          break;
                        }
                        case ELEMENT_IMAGE: {
                          setMediaDialogState({
                            id: EDITOR_IMAGE_DIALOG_ID,
                            isOpen: true,
                          });
                          break;
                        }
                        case ELEMENT_MEDIA_EMBED: {
                          setMediaDialogState({
                            id: EDITOR_MEDIA_DIALOG_ID,
                            isOpen: true,
                          });
                          break;
                        }
                        case "ul":
                        case "ol": {
                          insertEmptyElement(editor, ELEMENT_PARAGRAPH, {
                            select: true,
                            nextBlock: true,
                          });

                          toggleIndentList(editor, {
                            listStyleType: type === "ul" ? "disc" : "decimal",
                          });

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
                    <Icon className="mr-2 size-4" />
                    {itemLabel}
                  </DropdownMenuItem>
                ),
              )}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <UploadMediaDialog editor={editor} />
      <EmbedMediaDialog editor={editor} />
    </Fragment>
  );
}
