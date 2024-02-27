import HeaderMenu from "@/modules/write/components/header-menu";
import SideMenu from "@/modules/write/components/side-menu";
import {
  $isCollapsed,
  setCollapsed,
} from "@/modules/write/stores/side-menu-store";

import { Editor } from "@/common/components/plate-ui/editor";
import { Button } from "@/common/components/ui/button";

import { useStore } from "@nanostores/react";
import { Plate } from "@udecode/plate-common";
import { ListTreeIcon } from "lucide-react";

const initialValue = [
  {
    type: "p",
    children: [
      {
        text: "This is editable plain text with react and history plugins, just like a <textarea>!",
      },
    ],
  },
];

export default function WriteEditor() {
  const isCollapsed = useStore($isCollapsed);

  return (
    <section className="grid h-full min-h-dvh w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] divide-y overflow-x-hidden transition-all">
      <HeaderMenu className="col-span-full" />

      <SideMenu></SideMenu>

      <section className="relative z-50 w-full overflow-y-auto p-4">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="fixed z-50 transition-all max-md:size-0"
          onClick={() => setCollapsed(!isCollapsed)}
        >
          <span className="sr-only">Side Menu Toggle</span>
          <ListTreeIcon className="size-5" />
        </Button>

        <Plate initialValue={initialValue}>
          <Editor
            variant="ghost"
            className="mx-auto max-w-screen-sm"
          />
        </Plate>
      </section>
    </section>
  );
}
