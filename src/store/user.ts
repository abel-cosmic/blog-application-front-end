import { create } from "zustand";
export const useUserStore = create<userStore>((set) => ({
  entity: {
    id: 0,
    email: "",
    name: "",
    createdAt: "",
    updatedAt: "",
  },
  setEntity: (entity) => set({ entity }),
}));
