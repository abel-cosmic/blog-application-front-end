import { forgotPassword, passwordReset, signIn, signUp } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignUpMutation = () => {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUp,
  });
};

export const useSignInMutation = () => {
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: signIn,
  });
};

export const usePasswordResetMutation = () => {
  return useMutation({
    mutationKey: ["passwordReset"],
    mutationFn: passwordReset,
  });
};
export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: forgotPassword,
  });
};
