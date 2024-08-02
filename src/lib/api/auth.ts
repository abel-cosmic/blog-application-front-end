import {
  forgotPasswordSchema,
  loginSchema,
  passwordResetSchema,
  signUpSchema,
} from "@/types/schema/auth";
import axios from "axios";
import { z } from "zod";

interface mutateAuthResponse extends z.infer<typeof loginSchema> {}

export const signUp = async (data: mutateAuthResponse) => {
  try {
    const response = await axios.post("/api/auth/register", data);
    return response.data;
  } catch (error) {
    console.log("Error signing up:", error);
    return null;
  }
};

interface mutateUserResponse extends z.infer<typeof signUpSchema> {}
export const signIn = async (data: mutateUserResponse) => {
  try {
    const response = await axios.post("/api/auth/login", data);
    return response.data;
  } catch (error) {
    console.log("Error signing in:", error);
    return null;
  }
};

interface mutatePasswordResetResponse
  extends z.infer<typeof passwordResetSchema> {}
export const passwordReset = async (
  data: mutatePasswordResetResponse
): Promise<{
  message: string;
}> => {
  try {
    const response = await axios.post("/api/auth/reset-password", data);
    return response.data;
  } catch (error) {
    console.log("Error passwordReset in:", error);
    return null;
  }
};

interface mutateForgotPasswordResponse
  extends z.infer<typeof forgotPasswordSchema> {}

export const forgotPassword = async (
  data: mutateForgotPasswordResponse
): Promise<{
  message: string;
}> => {
  try {
    const response = await axios.post("/api/auth/forgot-password", data);
    return response.data;
  } catch (error) {
    console.log("Error forgotPassword in:", error);
    return null;
  }
};
