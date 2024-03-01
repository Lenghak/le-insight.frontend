import { Icons } from "@/common/components/plate-ui/icons";

import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { AlignDropdownMenu } from "./align-dropdown-menu";
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

          <Separator className="h-6 w-[0.5px]" />
        </>
      )}

      <MoreDropdownMenu />
    </>
  );
}
