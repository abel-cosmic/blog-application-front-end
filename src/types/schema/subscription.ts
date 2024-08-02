import { z } from "zod";

export const subscriptionSchema = z.object({
  email:
    z.string().email({
      message: "Invalid email.",
    }) ||
    z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
});
