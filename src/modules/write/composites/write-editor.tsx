import HeaderMenu from "@/modules/write/components/header-menu";
import SideMenu from "@/modules/write/components/side-menu";
import { EDITOR_PLUGINS } from "@/modules/write/constants/editor-plugins";
import {
  $isCollapsed,
  setCollapsed,
} from "@/modules/write/stores/side-menu-store";

import { Editor } from "@/common/components/plate-ui/editor";
import { TooltipProvider } from "@/common/components/plate-ui/tooltip";
import { Button } from "@/common/components/ui/button";

import { useStore } from "@nanostores/react";
import { Plate } from "@udecode/plate-common";
import { ListTreeIcon } from "lucide-react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function WriteEditor() {
  const isCollapsed = useStore($isCollapsed);

  return (
    <section className="grid h-full min-h-dvh w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] divide-y overflow-x-hidden transition-all">
      <HeaderMenu className="col-span-full" />

      <SideMenu></SideMenu>

      <section className="relative z-50 w-full overflow-y-auto p-4 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/20">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="invisible fixed z-50 transition-all max-md:size-0 md:visible "
          onClick={() => setCollapsed(!isCollapsed)}
        >
          <span className="sr-only">Side Menu Toggle</span>
          <ListTreeIcon className="size-5" />
        </Button>

        <TooltipProvider>
          <DndProvider backend={HTML5Backend}>
            <Plate plugins={EDITOR_PLUGINS}>
              <Editor
                className="mx-auto mt-12 min-h-full w-full max-w-screen-md"
                variant={"ghost"}
                focusRing={false}
                size={"md"}
                autoFocus
              />
            </Plate>
          </DndProvider>
        </TooltipProvider>
      </section>
    </section>
  );
}
