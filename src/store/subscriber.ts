import { create } from "zustand";
export const useSubscriptionStore = create<subscriptionStore>((set) => ({
  entity: {
    id: 0,
    email: "",
    createdAt: "",
    updatedAt: "",
  },
  setEntity: (entity) => set({ entity }),
}));
