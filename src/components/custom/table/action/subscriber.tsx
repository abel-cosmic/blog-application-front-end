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
import { useDeleteSubscriberByIdMutation } from "@/hooks/subscriber";
import { toast } from "@/components/ui/use-toast";

export const SubscribersAction = ({ row }: { row: Row<any> }) => {
  const subscribers = row.original;
  const router = useRouter();
  const { mutate: deleteSubscriber } = useDeleteSubscriberByIdMutation(
    subscribers.id
  );

  const handleDelete = () => {
    deleteSubscriber(null, {
      onSuccess: () => {
        toast({
          title: "subscriber deleted",
          description: (
            <div>
              subscribers <strong>{subscribers.id}</strong> has been deleted
            </div>
          ),
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: (
            <div>
              An error occurred while deleting subscribers{" "}
              <strong>{subscribers.id}</strong>
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
          onClick={() =>
            router.push(`/dashboard/subscribers/view/${subscribers.id}`)
          }
        >
          <Eye className="mr-2 h-4 w-4 text-blue-500" />
          View
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            router.push(`/dashboard/subscribers/edit/${subscribers.id}`)
          }
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
