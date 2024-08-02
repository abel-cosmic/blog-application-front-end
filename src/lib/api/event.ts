import { eventSchema } from "@/types/schema/event";
import axios from "axios";
import { z } from "zod";

export const getAllEvents = async (): Promise<Events[]> => {
  try {
    const response = await axios.get("/api/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const getEventById = async (id: number): Promise<Event | null> => {
  try {
    const response = await axios.get(`/api/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with id ${id}:`, error);
    return null;
  }
};

export const deleteEventById = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/events/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting event with id ${id}:`, error);
    return false;
  }
};

export interface MutateEvent extends z.infer<typeof eventSchema> {}
export const createEvent = async (
  event: MutateEvent
): Promise<Events | null> => {
  try {
    const response = await axios.post("/api/events", event);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    return null;
  }
};

export const updateEvent = async (
  id: number,
  blog: MutateEvent
): Promise<Blog | null> => {
  try {
    const response = await axios.put(`/api/events/${id}`, blog);
    return response.data;
  } catch (error) {
    console.error("Error creating events:", error);
    return null;
  }
};
