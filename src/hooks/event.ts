import {
  createEvent,
  deleteEventById,
  getAllEvents,
  getEventById,
  MutateEvent,
  updateEvent,
} from "@/lib/api/event";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllEventsQuery = () =>
  useQuery({
    queryKey: ["getAllEvents"],
    queryFn: getAllEvents,
  });

export const useGetEventByIdQuery = (id: number) =>
  useQuery({
    queryKey: ["getEventById", id],
    queryFn: () => getEventById(id),
  });

export const useCreateEventMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createEvent"],
    mutationFn: createEvent,
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllEvents"] }),
      queryClient.invalidateQueries({ queryKey: ["getEventById"] })
    ),
  });
};

export const useUpdateEventMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateEvent", id],
    mutationFn: (data: MutateEvent) => updateEvent(id, data),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllEvents"] }),
      queryClient.invalidateQueries({ queryKey: ["getEventById"] })
    ),
  });
};

export const useDeleteEventByIdMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteEventById", id],
    mutationFn: () => deleteEventById(id),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllEvents"] }),
      queryClient.invalidateQueries({ queryKey: ["getAllEvent"] })
    ),
  });
};
