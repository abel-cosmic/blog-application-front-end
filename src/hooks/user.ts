import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  mutateUserResponse,
  updateUser,
} from "@/lib/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllUserQuery = () =>
  useQuery({
    queryKey: ["getAllUser"],
    queryFn: getAllUsers,
  });

export const useGetUserByIdQuery = (id: number) =>
  useQuery({
    queryKey: ["getUserById", id],
    queryFn: () => getUserById(id),
  });

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUser,
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllUser"] }),
      queryClient.invalidateQueries({ queryKey: ["getAllUser"] })
    ),
  });
};

export const useUpdateUserMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateUser", id],
    mutationFn: (data: mutateUserResponse) => updateUser(id, data),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllUser"] }),
      queryClient.invalidateQueries({ queryKey: ["getAllUser"] })
    ),
  });
};

export const useDeleteUserByIdMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteUserById", id],
    mutationFn: () => deleteUserById(id),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllUser"] }),
      queryClient.invalidateQueries({ queryKey: ["getAllUser"] })
    ),
  });
};
