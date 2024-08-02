import { userSchema } from "@/types/schema/user";
import { z } from "zod";
import axiosInstance from "../axios";

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get("/api/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching Users:", error);
    return [];
  }
};

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const response = await axiosInstance.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching User with id ${id}:`, error);
    return null;
  }
};

export const deleteUserById = async (id: number): Promise<boolean> => {
  try {
    await axiosInstance.delete(`/api/users/${id}`);
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
    const response = await axiosInstance.post("/api/users", User);
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
    const response = await axiosInstance.put(`/api/users/${id}`, User);
    return response.data;
  } catch (error) {
    console.error("Error creating User:", error);
    return null;
  }
};
