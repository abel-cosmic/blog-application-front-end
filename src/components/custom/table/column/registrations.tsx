"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import { RegistrationsAction } from "../action/registration";

export const registrationsColumns: ColumnDef<RegistrationsTable>[] = [
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
    accessorKey: "name",
    header: () => <div className="text-left">name</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left">email</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "event",
    header: () => <div className="text-left">event</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("event")}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      return <RegistrationsAction row={row} />;
    },
  },
];
