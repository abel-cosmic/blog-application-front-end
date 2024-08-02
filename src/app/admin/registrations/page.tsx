"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { blogColumns } from "@/components/custom/table/column/blog";
import { registrationsColumns } from "@/components/custom/table/column/registrations";
import { DataTable } from "@/components/custom/table/data-table";

export default function RegistrationPage() {
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin/Registrations" />
      <DataTable
        columns={registrationsColumns}
        data={[]}
        DialogContentComponent={<></>}
      />
    </aside>
  );
}
