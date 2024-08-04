"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { BlogAction } from "../action/blog";

import Image from "next/image";

export const blogColumns: ColumnDef<BlogTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: () => <div className="text-left">image</div>,
    cell: ({ row }) => (
      <Image
        className="text-left font-medium line-clamp-1 rounded-md w-12 h-12 object-cover"
        src={row.getValue("image")}
        alt={row.getValue("title")}
        width={1000}
        height={1000}
      />
    ),
  },
  {
    accessorKey: "title",
    header: () => <div className="text-left">title</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: () => <div className="text-left">description</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      return <BlogAction row={row} />;
    },
  },
];
