import { atom } from "nanostores";

export const $isMediaDialogOpen = atom<boolean>(false)
export const setMediaDialogState = (isOpen: boolean) => $isMediaDialogOpen.set(isOpen) 