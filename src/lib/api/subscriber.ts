import { subscriptionSchema } from "@/types/schema/subscription";
import axios from "axios";
import { z } from "zod";

export const getAllSubscribers = async (): Promise<Subscription[]> => {
  try {
    const response = await axios.get("/api/subscriptions");
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
    const response = await axios.get(`/api/subscriptions/${id}`);
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
    const response = await axios.delete(`/api/subscriptions/${id}`);
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
    const response = await axios.post("/api/subscriptions", subscription);
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
    const response = await axios.put(`/api/subscriptions/${id}`, subscription);
    return response.data;
  } catch (error) {
    console.error("Error creating subscriptions:", error);
    return null;
  }
};
