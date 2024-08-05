"use client";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDeleteBlogByIdMutation } from "@/hooks/blog";
import { toast } from "@/components/ui/use-toast";

export const BlogAction = ({ row }: { row: Row<any> }) => {
  const blog = row.original;
  const router = useRouter();
  const { mutate: deleteBlog } = useDeleteBlogByIdMutation(blog.id);

  const handleDelete = () => {
    deleteBlog(null, {
      onSuccess: () => {
        toast({
          title: "Blog deleted",
          description: (
            <div>
              blog <strong>{blog.id}</strong> has been deleted
            </div>
          ),
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: (
            <div>
              An error occurred while deleting blog <strong>{blog.id}</strong>
            </div>
          ),
        });
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => router.push(`/admin/blogs/view/${blog.id}`)}
        >
          <Eye className="mr-2 h-4 w-4 text-blue-500" />
          View
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => router.push(`/admin/blogs/edit/${blog.id}`)}
        >
          <Edit className="mr-2 h-4 w-4 text-green-500" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>
          <Trash className="mr-2 h-4 w-4 text-red-500" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
