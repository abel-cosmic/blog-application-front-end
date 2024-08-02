import { z } from "zod";

export const loginSchema = z.object({
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
export const signUpSchema = z.object({
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
  role: z.enum(["ADMIN", "USER"]).optional(),
});

export const passwordResetSchema = z.object({
  token: z.string().min(2, {
    message: "token must be at least 2 characters.",
  }),
  newPassword: z.string().min(8, {
    message: "password must be at least 2 characters.",
  }),
});

export const forgotPasswordSchema = z.object({
  email:
    z.string().email({
      message: "Invalid email.",
    }) ||
    z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
});
