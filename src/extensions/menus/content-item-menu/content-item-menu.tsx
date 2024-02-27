import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/components/ui/dropdown-menu";
import { Icon } from "@/common/components/ui/icon";
import { Toolbar } from "@/common/components/ui/toolbar";

import DragHandle from "@tiptap-pro/extension-drag-handle-react";
import { type Editor } from "@tiptap/react";
import { useEffect, useState } from "react";

import useContentItemActions from "./hooks/use-content-item-actions";
import { useData } from "./hooks/use-data";

export type ContentItemMenuProps = {
  editor: Editor;
};

export const ContentItemMenu = ({ editor }: ContentItemMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = useData();
  const actions = useContentItemActions(
    editor,
    data.currentNode,
    data.currentNodePos,
  );

  useEffect(() => {
    if (menuOpen) {
      editor.commands.setMeta("lockDragHandle", true);
    } else {
      editor.commands.setMeta("lockDragHandle", false);
    }
  }, [editor, menuOpen]);

  return (
    <DragHandle
      pluginKey="ContentItemMenu"
      editor={editor}
      onNodeChange={data.handleNodeChange}
      tippyOptions={{
        offset: [-2, 16],
        zIndex: 99,
      }}
    >
      <div className="flex items-center gap-0.5">
        <Toolbar.Button onClick={actions.handleAdd}>
          <Icon name="Plus" />
        </Toolbar.Button>
        <DropdownMenu
          open={menuOpen}
          onOpenChange={setMenuOpen}
        >
          <DropdownMenuTrigger asChild>
            <Toolbar.Button>
              <Icon name="GripVertical" />
            </Toolbar.Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="start"
            sideOffset={8}
          >
            <DropdownMenuItem onClick={actions.resetTextFormatting}>
              <Icon name="RemoveFormatting" />
              Clear formatting
            </DropdownMenuItem>

            <DropdownMenuItem onClick={actions.copyNodeToClipboard}>
              <Icon name="Clipboard" />
              Copy to clipboard
            </DropdownMenuItem>

            <DropdownMenuItem onClick={actions.duplicateNode}>
              <Icon name="Copy" />
              Duplicate
            </DropdownMenuItem>

            <Toolbar.Divider horizontal />

            <DropdownMenuItem
              onClick={actions.deleteNode}
              className="bg-red-500 bg-opacity-10 text-red-500 hover:bg-red-500 hover:bg-opacity-20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:bg-opacity-20 dark:hover:text-red-500"
            >
              <Icon name="Trash2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DragHandle>
  );
};
