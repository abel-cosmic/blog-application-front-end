import { create } from "zustand";
export const useEventsStore = create<eventStore>((set) => ({
  entity: [
    {
      id: 0,
      title: "",
      location: "",
      description: "",
      date: "",
      createdAt: "",
      updatedAt: "",
    },
  ],
  setEntity: (entity) => set({ entity }),
}));
