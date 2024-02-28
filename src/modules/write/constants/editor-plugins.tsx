import { BlockquoteElement } from "@/common/components/plate-ui/blockquote-element";
import { CodeBlockElement } from "@/common/components/plate-ui/code-block-element";
import { CodeLeaf } from "@/common/components/plate-ui/code-leaf";
import { CodeLineElement } from "@/common/components/plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "@/common/components/plate-ui/code-syntax-leaf";
import { HeadingElement } from "@/common/components/plate-ui/heading-element";
import { HighlightLeaf } from "@/common/components/plate-ui/highlight-leaf";
import { HrElement } from "@/common/components/plate-ui/hr-element";
import { ImageElement } from "@/common/components/plate-ui/image-element";
import { KbdLeaf } from "@/common/components/plate-ui/kbd-leaf";
import { LinkElement } from "@/common/components/plate-ui/link-element";
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
  createPlugins,
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
  MARK_CODE,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  PlateLeaf,
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
import { createDndPlugin } from "@udecode/plate-dnd";
import {
  createHighlightPlugin,
  MARK_HIGHLIGHT,
} from "@udecode/plate-highlight";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";

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
    createBlockSelectionPlugin(),
    createCaptionPlugin({
      options: { pluginKeys: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED] },
    }),
    createDndPlugin(),
    createHighlightPlugin(),
    createNodeIdPlugin(),
    createNormalizeTypesPlugin({
      options: {
        rules: [{ path: [0], strictType: ELEMENT_H1 }],
      },
    }),
    createTrailingBlockPlugin({ options: { type: ELEMENT_PARAGRAPH } }),
  ],
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    components: withDraggables(
      withPlaceholders({
        [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
        [ELEMENT_CODE_BLOCK]: CodeBlockElement,
        [ELEMENT_CODE_LINE]: CodeLineElement,
        [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
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
        [MARK_CODE]: CodeLeaf,
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
