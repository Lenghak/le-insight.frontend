import { map } from "nanostores";

export const $mediaDialogState = map<{
  id: string,
  isOpen: boolean
}>({
  id: "",
  isOpen: false,
})

export const setMediaDialogState = ({ id, isOpen }: { id: string, isOpen: boolean }) => $mediaDialogState.set({ id, isOpen }) 