import { userSchema } from "@/types/schema/user";
import axios from "axios";
import { z } from "zod";

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching Users:", error);
    return [];
  }
};

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const response = await axios.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching User with id ${id}:`, error);
    return null;
  }
};

export const deleteUserById = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/users/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting User with id ${id}:`, error);
    return false;
  }
};

export interface mutateUserResponse extends z.infer<typeof userSchema> {}
export const createUser = async (
  User: mutateUserResponse
): Promise<User | null> => {
  try {
    const response = await axios.post("/api/users", User);
    return response.data;
  } catch (error) {
    console.error("Error creating User:", error);
    return null;
  }
};

export const updateUser = async (
  id: number,
  User: mutateUserResponse
): Promise<User | null> => {
  try {
    const response = await axios.put(`/api/users/${id}`, User);
    return response.data;
  } catch (error) {
    console.error("Error creating User:", error);
    return null;
  }
};
