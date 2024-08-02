import { create } from "zustand";
export const useRegistrationStore = create<registrationStore>((set) => ({
  entity: {
    id: 0,
    userId: 0,
    eventId: 0,
    createdAt: "",
    updatedAt: "",
  },
  setEntity: (entity) => set({ entity }),
}));
