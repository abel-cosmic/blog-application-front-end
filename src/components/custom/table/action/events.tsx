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
import { useDeleteEventByIdMutation } from "@/hooks/event";
import { toast } from "@/components/ui/use-toast";

export const EventsAction = ({ row }: { row: Row<any> }) => {
  const event = row.original;
  const router = useRouter();
  const { mutate: deleteEvent } = useDeleteEventByIdMutation(event.id);

  const handleDelete = () => {
    deleteEvent(null, {
      onSuccess: () => {
        toast({
          title: "subscriber deleted",
          description: (
            <div>
              event <strong>{event.id}</strong> has been deleted
            </div>
          ),
        });
      },
      onError: () => {
        toast({
          title: "Error",
          description: (
            <div>
              An error occurred while deleting event <strong>{event.id}</strong>
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
          onClick={() => router.push(`/admin/events/view/${event.id}`)}
        >
          <Eye className="mr-2 h-4 w-4 text-blue-500" />
          View
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => router.push(`/admin/events/edit/${event.id}`)}
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
