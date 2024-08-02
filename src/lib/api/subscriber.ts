import { subscriptionSchema } from "@/types/schema/subscription";
import { z } from "zod";
import axiosInstance from "../axios";

export const getAllSubscribers = async (): Promise<Subscription[]> => {
  try {
    const response = await axiosInstance.get("/api/subscriptions");
    return response.data;
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return [];
  }
};

export const getSubscriberById = async (
  id: number
): Promise<Subscription | null> => {
  try {
    const response = await axiosInstance.get(`/api/subscriptions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching subscriptions with id ${id}:`, error);
    return null;
  }
};

export const deleteSubscribersById = async (
  id: number
): Promise<string | null> => {
  try {
    const response = await axiosInstance.delete(`/api/subscriptions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting subscriptions with id ${id}:`, error);
    return null;
  }
};

export interface mutateSubscriptionResponse
  extends z.infer<typeof subscriptionSchema> {}
export const createSubscriber = async (
  subscription: mutateSubscriptionResponse
): Promise<Subscription | null> => {
  try {
    const response = await axiosInstance.post(
      "/api/subscriptions",
      subscription
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating subscriptions:", error);
    return null;
  }
};

export const updateSubscriber = async (
  id: number,
  subscription: mutateSubscriptionResponse
): Promise<Subscription | null> => {
  try {
    const response = await axiosInstance.put(
      `/api/subscriptions/${id}`,
      subscription
    );
    return response.data;
  } catch (error) {
    console.error("Error creating subscriptions:", error);
    return null;
  }
};
