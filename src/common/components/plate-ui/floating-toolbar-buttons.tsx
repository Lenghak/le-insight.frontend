import { Icons } from "@/common/components/plate-ui/icons";

import { MARK_BG_COLOR, MARK_COLOR } from "@udecode/plate";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { IndentToolbarButton } from "@/common/components/plate-ui/indent-toolbar-button";
import { OutdentToolbarButton } from "@/common/components/plate-ui/outdent-toolbar-button";
import { AlignDropdownMenu } from "./align-dropdown-menu";
import { ColorDropdownMenu } from "./color-dropdown-menu";
import { LineHeightDropdownMenu } from "./line-height-dropdown-menu";
import { LinkToolbarButton } from "./link-toolbar-button";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { Separator } from "./separator";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";

export function FloatingToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <>
      {!readOnly && (
        <>
          <TurnIntoDropdownMenu />

          <Separator className="h-6 w-[0.5px]" />

          <AlignDropdownMenu />
          <LineHeightDropdownMenu />
          <IndentToolbarButton />
          <OutdentToolbarButton />

          <Separator className="h-6 w-[0.5px]" />

          <MarkToolbarButton
            nodeType={MARK_BOLD}
            tooltip="Bold (⌘+B)"
          >
            <Icons.bold />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_ITALIC}
            tooltip="Italic (⌘+I)"
          >
            <Icons.italic />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_UNDERLINE}
            tooltip="Underline (⌘+U)"
          >
            <Icons.underline />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_STRIKETHROUGH}
            tooltip="Strikethrough (⌘+⇧+M)"
          >
            <Icons.strikethrough />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_CODE}
            tooltip="Code (⌘+E)"
          >
            <Icons.code />
          </MarkToolbarButton>

          <LinkToolbarButton />

          <ColorDropdownMenu
            nodeType={MARK_COLOR}
            tooltip="Text Color"
          >
            <Icons.color />
          </ColorDropdownMenu>

          <ColorDropdownMenu
            nodeType={MARK_BG_COLOR}
            tooltip="Highlight Color"
          >
            <Icons.bg />
          </ColorDropdownMenu>

          <Separator className="h-6 w-[0.5px]" />
        </>
      )}

      <MoreDropdownMenu />
    </>
  );
}
