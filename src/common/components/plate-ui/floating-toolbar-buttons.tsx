import { Icons } from "@/common/components/ui/icons";

import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { MarkToolbarButton } from "./mark-toolbar-button";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";

export function FloatingToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <>
      {!readOnly && (
        <>
          <TurnIntoDropdownMenu />

          <MarkToolbarButton
            nodeType={MARK_BOLD}
            tooltip="Bold (⌘+B)"
          >
            <Icons name="Bold" />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_ITALIC}
            tooltip="Italic (⌘+I)"
          >
            <Icons name="Italic" />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_UNDERLINE}
            tooltip="Underline (⌘+U)"
          >
            <Icons name="Underline" />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_STRIKETHROUGH}
            tooltip="Strikethrough (⌘+⇧+M)"
          >
            <Icons name="Strikethrough" />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_CODE}
            tooltip="Code (⌘+E)"
          >
            <Icons name="Code2" />
          </MarkToolbarButton>
        </>
      )}

      <MoreDropdownMenu />
    </>
  );
}