import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  date: z.string().min(2, {
    message: "date must be at least 2 characters.",
  }),
});
