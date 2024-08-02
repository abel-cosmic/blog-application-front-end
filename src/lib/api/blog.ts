import { blogSchema } from "@/types/schema/blog";
import axios from "axios";
import { z } from "zod";

export const getAllBlog = async (): Promise<Blog[]> => {
  try {
    const response = await axios.get("/api/blogs");
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const getBlogById = async (id: number): Promise<Blog | null> => {
  try {
    const response = await axios.get(`/api/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    return null;
  }
};

export const deleteBlogById = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/blogs/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting blog with id ${id}:`, error);
    return false;
  }
};

export interface mutateBlogResponse extends z.infer<typeof blogSchema> {}
export const createBlog = async (
  blog: mutateBlogResponse
): Promise<Blog | null> => {
  try {
    const response = await axios.post("/api/blogs", blog);
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    return null;
  }
};

export const updateBlog = async (
  id: number,
  data: mutateBlogResponse
): Promise<Blog | null> => {
  try {
    const response = await axios.put(`/api/blog/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    return null;
  }
};
