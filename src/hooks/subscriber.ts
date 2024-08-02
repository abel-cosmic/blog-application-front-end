import {
  createSubscriber,
  deleteSubscribersById,
  getAllSubscribers,
  getSubscriberById,
  mutateSubscriptionResponse,
  updateSubscriber,
} from "@/lib/api/subscriber";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllSubscribersQuery = () =>
  useQuery({
    queryKey: ["getAllSubscribers"],
    queryFn: getAllSubscribers,
  });

export const useGetSubscriberByIdQuery = (id: number) =>
  useQuery({
    queryKey: ["getSubscriberById", id],
    queryFn: () => getSubscriberById(id),
  });

export const useCreateSubscriberMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createSubscriber"],
    mutationFn: createSubscriber,
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllSubscribers"] }),
      queryClient.invalidateQueries({ queryKey: ["getSubscriberById"] })
    ),
  });
};

export const useUpdateSubscriberMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateSubscriber", id],
    mutationFn: (data: mutateSubscriptionResponse) =>
      updateSubscriber(id, data),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllSubscribers"] }),
      queryClient.invalidateQueries({ queryKey: ["getSubscriberById"] })
    ),
  });
};

export const useDeleteSubscriberByIdMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteSubscriberById", id],
    mutationFn: () => deleteSubscribersById(id),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllSubscribers"] }),
      queryClient.invalidateQueries({ queryKey: ["getSubscriberById"] })
    ),
  });
};
