"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import { EventsAction } from "../action/events";

export const eventsColumns: ColumnDef<EventsTable>[] = [
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
    accessorKey: "location",
    header: () => <div className="text-left">location</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("location")}</div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      return <EventsAction row={row} />;
    },
  },
];
