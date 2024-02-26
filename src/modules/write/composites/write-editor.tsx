import HeaderMenu from "@/modules/write/components/header-menu";
import SideMenu from "@/modules/write/components/side-menu";
import TableOfContents from "@/modules/write/components/table-of-contents";
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
    extensions: EDITOR_EXTENSION,
    autofocus: "start",
    editable: true,
    injectCSS: false,
  });

  const isCollapsed = useStore($isCollapsed);

  if (!editor) return <EditorSkeletons />;

  return (
    <section className="grid h-full min-h-dvh w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] divide-x divide-y overflow-hidden transition-all">
      <HeaderMenu className="col-span-full" />

      <SideMenu>
        <TableOfContents editor={editor} />
      </SideMenu>

      <section className="relative w-full overflow-y-auto bg-card p-4">
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
          editor={editor}
          className="mx-auto my-12 h-full w-full max-w-screen-md rounded-lg focus-visible:outline-none [&>*]:outline-none"
        />
        <EditorBubbleMenu editor={editor} />
      </section>
    </section>
  );
});
