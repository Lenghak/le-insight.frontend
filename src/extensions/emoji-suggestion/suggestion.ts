/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type Editor } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import {
  type SuggestionKeyDownProps,
  type SuggestionProps,
} from "@tiptap/suggestion";
import tippy, { type GetReferenceClientRect, type Instance } from "tippy.js";

import EmojiList from "./components/emoji-ist";

export const emojiSuggestion = {
  items: ({ editor, query }: { editor: Editor; query: string }) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    editor.storage.emoji.emojis
      .filter(
        ({ shortcodes, tags }: { shortcodes: string[]; tags: string[] }) =>
          shortcodes.find((shortcode) =>
            shortcode.startsWith(query.toLowerCase()),
          ) || tags.find((tag) => tag.startsWith(query.toLowerCase())),
      )
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .slice(0, 250),

  allowSpaces: false,

  render: () => {
    let component: ReactRenderer;
    let popup: Instance;

    return {
      onStart: (props: SuggestionProps) => {
        component = new ReactRenderer(EmojiList, {
          props,
          editor: props.editor,
        });

        // @ts-expect-error the config is missing some of the attributes
        popup = tippy("body", {
          getReferenceClientRect: props.clientRect as GetReferenceClientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        });
      },

      onUpdate(props: SuggestionProps) {
        component.updateProps(props);

        popup.setProps({
          getReferenceClientRect: props.clientRect as GetReferenceClientRect,
        });
      },

      onKeyDown(props: SuggestionKeyDownProps) {
        if (props.event.key === "Escape") {
          popup.hide();
          component.destroy();

          return true;
        }

        // @ts-expect-error unsafe accessing keys
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup.destroy();
        component.destroy();
      },
    };
  },
};

export default emojiSuggestion;
