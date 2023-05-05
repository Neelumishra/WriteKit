import { atom } from "recoil";

export const selectTag = atom({
  key: "selectTag",
  default: "",
});
export const contents = atom({
  key: "contents",
  default: "",
});
export const image = atom({
  key: "image",
  default: "",
});
