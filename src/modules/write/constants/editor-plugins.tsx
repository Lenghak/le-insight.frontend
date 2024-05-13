import getCloudAuthToken from "@/modules/write/services/cloud-auth-api";

import { BlockquoteElement } from "@/common/components/plate-ui/blockquote-element";
import { CloudAttachmentElement } from "@/common/components/plate-ui/cloud-attachment-element";
import { CloudImageElement } from "@/common/components/plate-ui/cloud-image-element";
import { CodeBlockElement } from "@/common/components/plate-ui/code-block-element";
import { CodeLeaf } from "@/common/components/plate-ui/code-leaf";
import { CodeLineElement } from "@/common/components/plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "@/common/components/plate-ui/code-syntax-leaf";
import { CommentLeaf } from "@/common/components/plate-ui/comment-leaf";
import { EmojiCombobox } from "@/common/components/plate-ui/emoji-combobox";
import { HeadingElement } from "@/common/components/plate-ui/heading-element";
import { HighlightLeaf } from "@/common/components/plate-ui/highlight-leaf";
import { HrElement } from "@/common/components/plate-ui/hr-element";
import { ImageElement } from "@/common/components/plate-ui/image-element";
import { KbdLeaf } from "@/common/components/plate-ui/kbd-leaf";
import { LinkElement } from "@/common/components/plate-ui/link-element";
import { LinkFloatingToolbar } from "@/common/components/plate-ui/link-floating-toolbar";
import { MediaEmbedElement } from "@/common/components/plate-ui/media-embed-element";
import { MentionElement } from "@/common/components/plate-ui/mention-element";
import { MentionInputElement } from "@/common/components/plate-ui/mention-input-element";
import { ParagraphElement } from "@/common/components/plate-ui/paragraph-element";
import { withPlaceholders } from "@/common/components/plate-ui/placeholder";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "@/common/components/plate-ui/table-cell-element";
import { TableElement } from "@/common/components/plate-ui/table-element";
import { TableRowElement } from "@/common/components/plate-ui/table-row-element";
import { TodoListElement } from "@/common/components/plate-ui/todo-list-element";
import { ToggleElement } from "@/common/components/plate-ui/toggle-element";
import { withDraggables } from "@/common/components/plate-ui/with-draggables";

import { autoformatBlocks } from "@/common/lib/plate/auto-format-blocks";
import { autoformatIndentLists } from "@/common/lib/plate/auto-format-indent-list";
import { autoformatMarks } from "@/common/lib/plate/auto-format-mark";

import { withProps } from "@udecode/cn";
import {
  createAutoformatPlugin,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createComboboxPlugin,
  createDeletePlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createDeserializeMdPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontFamilyPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentListPlugin,
  createIndentPlugin,
  createKbdPlugin,
  createLineHeightPlugin,
  createLinkPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createPlugins,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createTabbablePlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTogglePlugin,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_LINK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TODO_LI,
  ELEMENT_TOGGLE,
  ELEMENT_TR,
  isCodeBlockEmpty,
  isSelectionAtCodeBlockStart,
  KEYS_HEADING,
  MARK_BOLD,
  MARK_CODE,
  MARK_COMMENT,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  PlateLeaf,
  unwrapCodeBlock,
} from "@udecode/plate";
import { createAlignPlugin } from "@udecode/plate-alignment";
import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  type AutoformatRule,
  autoformatSmartQuotes,
} from "@udecode/plate-autoformat";
import { createCaptionPlugin } from "@udecode/plate-caption";
import {
  createCloudAttachmentPlugin,
  createCloudImagePlugin,
  createCloudPlugin,
  ELEMENT_CLOUD_ATTACHMENT,
  ELEMENT_CLOUD_IMAGE,
} from "@udecode/plate-cloud";
import {
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  type RenderAfterEditable,
} from "@udecode/plate-common";
import { createDndPlugin } from "@udecode/plate-dnd";
import { createEmojiPlugin } from "@udecode/plate-emoji";
import { ELEMENT_EXCALIDRAW } from "@udecode/plate-excalidraw";
import {
  createHighlightPlugin,
  MARK_HIGHLIGHT,
} from "@udecode/plate-highlight";
import { createJuicePlugin } from "@udecode/plate-juice";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};

const resetBlockTypesCodeBlockRule = {
  types: [ELEMENT_CODE_BLOCK],
  defaultType: ELEMENT_PARAGRAPH,
  onReset: unwrapCodeBlock,
};

export const autoformatRules: AutoformatRule[] = [
  ...autoformatBlocks,
  ...autoformatIndentLists,
  ...autoformatMarks,
  ...autoformatSmartQuotes,
  ...autoformatPunctuation,
  ...autoformatLegal,
  ...autoformatLegalHtml,
  ...autoformatArrow,
  ...autoformatMath,
];

export const EDITOR_PLUGINS = createPlugins(
  [
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_H4,
            ELEMENT_H5,
            ELEMENT_H6,
          ],
        },
      },
    }),
    createAutoformatPlugin({
      options: {
        rules: [...autoformatRules] as AutoformatRule[],
        enableUndoOnDelete: true,
      },
    }),
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),
    createBlockSelectionPlugin({
      options: {
        sizes: {
          top: 0,
          bottom: 0,
        },
      },
    }),
    createCaptionPlugin({
      options: { pluginKeys: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED] },
    }),
    createCloudPlugin({
      options: {
        authToken: async () => {
          const { data: res } = await getCloudAuthToken();
          return res.data.attributes.token;
        },
      },
    }),
    createCloudAttachmentPlugin(),
    createCloudImagePlugin({
      options: {
        maxInitialWidth: 320,
        maxInitialHeight: 320,
        minResizeWidth: 100,
        maxResizeWidth: 720,
      },
    }),
    createCaptionPlugin({
      options: { pluginKeys: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED] },
    }),
    createComboboxPlugin(),
    createDndPlugin({ options: { enableScroller: true } }),
    createDeletePlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeDocxPlugin(),
    createDeserializeMdPlugin(),
    createEmojiPlugin({
      renderAfterEditable: EmojiCombobox as RenderAfterEditable,
    }),
    // createExcalidrawPlugin(),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: "mod+enter",
          },
          {
            hotkey: "mod+shift+enter",
            before: true,
          },
          {
            hotkey: "enter",
            query: {
              start: true,
              end: true,
              allow: KEYS_HEADING,
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createFontBackgroundColorPlugin(),
    createFontColorPlugin(),
    createFontFamilyPlugin(),
    createFontSizePlugin(),
    createFontWeightPlugin(),
    createHighlightPlugin(),
    createHorizontalRulePlugin(),
    createImagePlugin(),
    createIndentPlugin({
      inject: {
        props: {
          validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1],
        },
      },
    }),
    createIndentListPlugin({
      inject: {
        props: {
          validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1],
        },
      },
    }),
    createJuicePlugin(),
    createKbdPlugin(),
    createLineHeightPlugin({
      inject: {
        props: {
          defaultNodeValue: 1.5,
          validNodeValues: [1, 1.2, 1.5, 2, 3],
          validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
        },
      },
    }),
    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),
    createMediaEmbedPlugin(),
    createMentionPlugin(),
    createNodeIdPlugin(),
    createNormalizeTypesPlugin({
      options: {
        rules: [{ path: [0], strictType: ELEMENT_H1 }],
      },
    }),
    createResetNodePlugin({
      options: {
        rules: [
          {
            ...resetBlockTypesCommonRule,
            hotkey: "Enter",
            predicate: isBlockAboveEmpty,
          },
          {
            ...resetBlockTypesCommonRule,
            hotkey: "Backspace",
            predicate: isSelectionAtBlockStart,
          },
          {
            ...resetBlockTypesCodeBlockRule,
            hotkey: "Enter",
            predicate: isCodeBlockEmpty,
          },
          {
            ...resetBlockTypesCodeBlockRule,
            hotkey: "Backspace",
            predicate: isSelectionAtCodeBlockStart,
          },
        ],
      },
    }),
    createSelectOnBackspacePlugin({
      options: {
        query: {
          allow: [
            ELEMENT_IMAGE,
            ELEMENT_MEDIA_EMBED,
            ELEMENT_HR,
            ELEMENT_EXCALIDRAW,
          ],
        },
      },
    }),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: "shift+enter" },
          {
            hotkey: "enter",
            query: {
              allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
            },
          },
        ],
      },
    }),
    createTablePlugin(),
    createTabbablePlugin(),
    createTodoListPlugin(),
    createTogglePlugin(),
    createTrailingBlockPlugin({ options: { type: ELEMENT_PARAGRAPH } }),
  ],
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    components: withDraggables(
      withPlaceholders({
        [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
        [ELEMENT_CLOUD_ATTACHMENT]: CloudAttachmentElement,
        [ELEMENT_CLOUD_IMAGE]: CloudImageElement,
        [ELEMENT_CODE_BLOCK]: CodeBlockElement,
        [ELEMENT_CODE_LINE]: CodeLineElement,
        [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
        // [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
        [ELEMENT_HR]: HrElement,
        [ELEMENT_IMAGE]: ImageElement,
        [ELEMENT_LINK]: LinkElement,
        [ELEMENT_TOGGLE]: ToggleElement,
        [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
        [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
        [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
        [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
        [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
        [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
        [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
        [ELEMENT_MENTION]: MentionElement,
        [ELEMENT_MENTION_INPUT]: MentionInputElement,
        [ELEMENT_PARAGRAPH]: ParagraphElement,
        [ELEMENT_TABLE]: TableElement,
        [ELEMENT_TR]: TableRowElement,
        [ELEMENT_TD]: TableCellElement,
        [ELEMENT_TH]: TableCellHeaderElement,
        [ELEMENT_TODO_LI]: TodoListElement,
        [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
        [MARK_CODE]: CodeLeaf,
        [MARK_COMMENT]: CommentLeaf,
        [MARK_HIGHLIGHT]: HighlightLeaf,
        [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
        [MARK_KBD]: KbdLeaf,
        [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
        [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
        [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
        [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
      }),
    ),
  },
);
