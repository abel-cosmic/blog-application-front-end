import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email:
    z.string().email({
      message: "Invalid email.",
    }) ||
    z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
  password: z.string().min(8, {
    message: "password must be at least 2 characters.",
  }),
});
