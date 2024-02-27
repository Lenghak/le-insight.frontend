import HeaderMenu from "@/modules/write/components/header-menu";
import SideMenu from "@/modules/write/components/side-menu";
import TableOfContents from "@/extensions/table-of-contents";
import { EDITOR_EXTENSION } from "@/modules/write/constants/editor-extensions";
import {
  $isCollapsed,
  setCollapsed,
} from "@/modules/write/stores/side-menu-store";

import { Button } from "@/common/components/ui/button";

import { useStore } from "@nanostores/react";
import { EditorContent, useEditor } from "@tiptap/react";
import { ListTreeIcon } from "lucide-react";
import { memo } from "react";

import EditorBubbleMenu from "../components/bubble-menu/bubble-menu";
import EditorSkeletons from "./editor-skeleton";

export default memo(function WriteEditor() {
  const editor = useEditor({
    autofocus: true,
    extensions: EDITOR_EXTENSION,
    editable: true,
    injectCSS: true,
  });

  const isCollapsed = useStore($isCollapsed);

  if (!editor) return <EditorSkeletons />;

  return (
    <section className="grid h-full min-h-dvh w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] divide-x divide-y overflow-x-hidden transition-all">
      <HeaderMenu className="col-span-full" />

      <SideMenu>
        <TableOfContents editor={editor} />
      </SideMenu>

      <section className="relative z-50 w-full overflow-y-auto bg-card p-4">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="fixed transition-all max-md:size-0"
          onClick={() => setCollapsed(!isCollapsed)}
        >
          <span className="sr-only">Side Menu Toggle</span>
          <ListTreeIcon className="size-5" />
        </Button>

        <EditorContent
          content={undefined}
          editor={editor}
          className="mx-auto my-12 h-full w-full max-w-screen-md whitespace-pre-wrap rounded-lg focus-visible:outline-none [&>*]:outline-none"
        />
      </section>
      <EditorBubbleMenu editor={editor} />
    </section>
  );
});
