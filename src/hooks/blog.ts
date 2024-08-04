import {
  createBlog,
  deleteBlogById,
  getAllBlog,
  getBlogById,
  mutateBlogResponse,
  updateBlog,
} from "@/lib/api/blog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllBlogQuery = () =>
  useQuery({
    queryKey: ["getAllBlog"],
    queryFn: getAllBlog,
  });

export const useGetBlogByIdQuery = (id: number) =>
  useQuery({
    queryKey: ["getBlogById", id],
    queryFn: () => getBlogById(id),
  });

export const useCreateBlogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createBlog"],
    mutationFn: createBlog,
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllBlog"] }),
      queryClient.invalidateQueries({ queryKey: ["getBlogById"] })
    ),
  });
};

export const useUpdateBlogMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateBlog", id],
    mutationFn: (data: mutateBlogResponse) => updateBlog(id, data),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllBlog"] }),
      queryClient.invalidateQueries({ queryKey: ["getBlogById"] })
    ),
  });
};

export const useDeleteBlogByIdMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteBlogById", id],
    mutationFn: () => deleteBlogById(id),
    onSuccess: () => (
      queryClient.invalidateQueries({ queryKey: ["getAllBlog"] }),
      queryClient.invalidateQueries({ queryKey: ["getBlogById"] })
    ),
  });
};
