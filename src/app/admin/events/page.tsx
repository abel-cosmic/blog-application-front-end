"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { eventsColumns } from "@/components/custom/table/column/events";
import { DataTable } from "@/components/custom/table/data-table";
import { useGetAllEventsQuery } from "@/hooks/event";
import { useEventsStore } from "@/store/event";
import { useEffect } from "react";

export default function EventPage() {
  const { data: events } = useGetAllEventsQuery();
  const { setEntity, entity } = useEventsStore();
  useEffect(() => {
    if (events) {
      setEntity(events);
    }
  }, [events, setEntity]);
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin/Events" />
      <DataTable
        columns={eventsColumns}
        data={entity}
        DialogContentComponent={<></>}
      />
    </aside>
  );
}
