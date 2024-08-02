"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { subscriberColumns } from "@/components/custom/table/column/subscribers";
import { DataTable } from "@/components/custom/table/data-table";
import { subscribeItems } from "@/configs/objects/subscriber";

export default function SubscribersPage() {
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin/Subscribers" />
      <DataTable
        columns={subscriberColumns}
        data={subscribeItems}
        DialogContentComponent={<></>}
      />
    </aside>
  );
}
