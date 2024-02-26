import { buttonVariants } from "@/common/components/ui/button";
import { Muted } from "@/common/components/ui/muted";
import { Small } from "@/common/components/ui/small";

import { cn } from "@/common/lib/utils";

import { type TableOfContentsStorage } from "@tiptap-pro/extension-table-of-contents";
import { type Editor as CoreEditor } from "@tiptap/core";
import { type HTMLAttributes, memo, useEffect, useState } from "react";

export type TableOfContentsProps = {
  editor: CoreEditor;
  onItemClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;

const TableOfContents = memo(
  ({ editor, onItemClick, className, ...props }: TableOfContentsProps) => {
    const [data, setData] = useState<TableOfContentsStorage | null>(null);

    useEffect(() => {
      const handler = ({ editor: currentEditor }: { editor: CoreEditor }) => {
        setData({
          ...(currentEditor.extensionStorage
            .tableOfContents as TableOfContentsStorage),
        });
      };

      handler({ editor });

      editor.on("update", handler);
      editor.on("selectionUpdate", handler);

      return () => {
        editor.off("update", handler);
        editor.off("selectionUpdate", handler);
      };
    }, [editor]);

    return (
      <div
        className={cn(
          "w-full space-y-4 overflow-y-auto overflow-x-hidden",
          className,
        )}
        {...props}
      >
        <Small className="mb-4 text-nowrap text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Table of contents
        </Small>
        {data && data.content.length > 0 ? (
          <div className="flex w-full flex-col gap-1">
            {data.content.map((item) =>
              item.textContent ? (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onItemClick}
                  className={cn(
                    buttonVariants({ variant: "link", size: "sm" }),
                    "inline w-full justify-start overflow-hidden text-ellipsis p-1 text-left",
                    item.isActive && "font-extrabold",
                    `indent-${item.level}`,
                  )}
                >
                  {item.textContent}
                </a>
              ) : null,
            )}
          </div>
        ) : (
          <Muted className="italic">
            Headings you add to the documents will appear here.
          </Muted>
        )}
      </div>
    );
  },
);

TableOfContents.displayName = "TableOfContents";

export default TableOfContents;
