"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { SubscribersAction } from "../action/subscriber";
import { Badge } from "@/components/ui/badge";
import moment from "moment";

export const adminsColumns: ColumnDef<AdminsTable>[] = [
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
    accessorKey: "name",
    header: () => <div className="text-left">name</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: () => <div className="text-left">role</div>,
    cell: ({ row }) => {
      const role = row.getValue("role");
      let statusColor = "";
      switch (role) {
        case "ADMIN":
          statusColor = "bg-green-500";
          break;
        case "USER":
          statusColor = "bg-yellow-500";
          break;
      }
      return (
        <Badge variant="outline" className={statusColor}>
          {row.getValue("role")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-left">created at</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium line-clamp-1">
        {moment(row.getValue("createdAt")).format("YYYY-MM-DD")}
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
