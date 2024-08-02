import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
  image: z.string().min(2, {
    message: "image must be at least 2 characters.",
  }),
  link: z.string().min(2, {
    message: "link must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  date: z.string().min(2, {
    message: "date must be at least 2 characters.",
  }),
});
