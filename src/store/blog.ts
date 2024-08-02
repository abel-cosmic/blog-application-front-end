import { create } from "zustand";
export const useBlogStore = create<blogStore>((set) => ({
  entity: {
    id: 0,
    title: "",
    link: "",
    image: "",
    content: "",
    description: "",
    date: "",
    createdAt: "",
    updatedAt: "",
  },
  setEntity: (entity) => set({ entity }),
}));