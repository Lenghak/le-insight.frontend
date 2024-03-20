import { persistentAtom } from '@nanostores/persistent';
import type { PlateStoreState } from '@udecode/plate-common';

export const $editorContent = persistentAtom<PlateStoreState['value']>("editor-content", [
  { type: "h1", children: [{ text: "" }] },
  {
    type: "p",
    children: [{ text: "" }],
  },
], {
  encode: JSON.stringify,
  decode: JSON.parse,
})