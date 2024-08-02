import { create } from "zustand";
export const useRegistrationStore = create<registrationStore>((set) => ({
  entity: [
    {
      id: 0,
      userId: 0,
      eventId: 0,
      createdAt: "",
      updatedAt: "",
      user: {
        id: 0,
        email: "",
        name: "",
        role: "USER",
        createdAt: "",
        updatedAt: "",
      },
      event: {
        id: 0,
        title: "",
        description: "",
        location: "",
        date: "",
        createdAt: "",
        updatedAt: "",
      },
    },
  ],
  setEntity: (entity) => set({ entity }),
}));
