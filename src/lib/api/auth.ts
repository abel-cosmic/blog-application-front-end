import {
  forgotPasswordSchema,
  loginSchema,
  passwordResetSchema,
  signUpSchema,
} from "@/types/schema/auth";
import { z } from "zod";
import axiosInstance from "../axios";

export interface mutateAuthResponse extends z.infer<typeof loginSchema> {}

export const signUp = async (data: mutateAuthResponse) => {
  try {
    const response = await axiosInstance.post("/api/auth/register", data);
    return response.data;
  } catch (error) {
    console.log("Error signing up:", error);
    return null;
  }
};

export interface mutateUserResponse extends z.infer<typeof signUpSchema> {}
export const signIn = async (data: mutateUserResponse) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", data);
    return response.data;
  } catch (error) {
    console.log("Error signing in:", error);
    return null;
  }
};

export interface mutatePasswordResetResponse
  extends z.infer<typeof passwordResetSchema> {}
export const passwordReset = async (
  data: mutatePasswordResetResponse
): Promise<{
  message: string;
}> => {
  try {
    const response = await axiosInstance.post("/api/auth/reset-password", data);
    return response.data;
  } catch (error) {
    console.log("Error passwordReset in:", error);
    return null;
  }
};

export interface mutateForgotPasswordResponse
  extends z.infer<typeof forgotPasswordSchema> {}

export const forgotPassword = async (
  data: mutateForgotPasswordResponse
): Promise<{
  message: string;
}> => {
  try {
    const response = await axiosInstance.post(
      "/api/auth/forgot-password",
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error forgotPassword in:", error);
    return null;
  }
};
