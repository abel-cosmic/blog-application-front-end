"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { SubscribersAction } from "../action/subscriber";

export const subscriberColumns: ColumnDef<subscriberTable>[] = [
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
    accessorKey: "email",
    header: () => <div className="text-left">email</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-left">created at</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("createdAt")}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: ({ row }) => {
      return <SubscribersAction row={row} />;
    },
  },
];
