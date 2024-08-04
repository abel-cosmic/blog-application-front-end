import { blogSchema } from "@/types/schema/blog";
import { z } from "zod";
import axiosInstance from "../axios";
import { jwtDecode } from "jwt-decode";

export const getAllBlog = async (): Promise<Blog[]> => {
  try {
    const response = await axiosInstance.get("/api/blogs");
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const getBlogById = async (id: number): Promise<Blog | null> => {
  try {
    const response = await axiosInstance.get(`/api/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with id ${id}:`, error);
    return null;
  }
};

export const deleteBlogById = async (id: number): Promise<boolean> => {
  try {
    await axiosInstance.delete(`/api/blogs/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting blog with id ${id}:`, error);
    return false;
  }
};

export interface mutateBlogResponse extends z.infer<typeof blogSchema> {}
export const createBlog = async (formData: FormData): Promise<Blog | null> => {
  try {
    const token = localStorage.getItem("token") || "";
    const decodedToken: any = jwtDecode(token);
    // formData.append("authorId", decodedToken.id);
    const response = await axiosInstance.post("/api/blogs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error(error?.response?.data?.message || "An error occurred");
  }
};
export const updateBlog = async (
  id: number,
  data: mutateBlogResponse
): Promise<Blog | null> => {
  try {
    const response = await axiosInstance.put(`/api/blog/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    return null;
  }
};
