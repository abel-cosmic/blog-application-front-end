import {
  createRegistration,
  deleteRegistrationById,
  getAllRegistrations,
  getRegistrationById,
  getRegistrationByUserIdAndEventId,
  updateRegistration,
} from "@/lib/api/registration";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllRegistrationsQuery = () =>
  useQuery({
    queryKey: ["getAllRegistrations"],
    queryFn: getAllRegistrations,
  });

export const useGetRegistrationByIdQuery = (id: number) =>
  useQuery({
    queryKey: ["getRegistrationById", id],
    queryFn: () => getRegistrationById(id),
  });

export const useGetRegistrationByUserIdAndEventIdQuery = (
  userId: number,
  eventId: number
) =>
  useQuery({
    queryKey: ["getRegistrationByUserIdAndEventId", userId, eventId],
    queryFn: () => getRegistrationByUserIdAndEventId(userId, eventId),
  });

export const useCreateRegistrationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createRegistration"],
    mutationFn: createRegistration,
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllRegistrations"] }),
      queryClient.invalidateQueries({ queryKey: ["getRegistrationById"] })
    ),
  });
};

export const useUpdateRegistrationMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateRegistration", id],
    mutationFn: (data: MutateRegistration) => updateRegistration(id, data),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllRegistrations"] }),
      queryClient.invalidateQueries({ queryKey: ["getRegistrationById"] })
    ),
  });
};

export const useDeleteRegistrationByIdMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteRegistrationById", id],
    mutationFn: () => deleteRegistrationById(id),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllRegistrations"] }),
      queryClient.invalidateQueries({ queryKey: ["getRegistrationById"] })
    ),
  });
};
