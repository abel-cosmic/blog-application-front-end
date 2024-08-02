"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { subscriberColumns } from "@/components/custom/table/column/subscribers";
import { DataTable } from "@/components/custom/table/data-table";
import { useGetAllSubscribersQuery } from "@/hooks/subscriber";
import { useSubscriptionStore } from "@/store/subscriber";
import { useEffect } from "react";

export default function SubscribersPage() {
  const { data: subscribers } = useGetAllSubscribersQuery();
  const { setEntity, entity } = useSubscriptionStore();
  useEffect(() => {
    if (subscribers) {
      setEntity(subscribers);
    }
  }, [subscribers, setEntity]);
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin/Subscribers" />
      <DataTable columns={subscriberColumns} data={entity} />
    </aside>
  );
}
