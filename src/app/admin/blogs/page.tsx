"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { blogColumns } from "@/components/custom/table/column/blog";
import { DataTable } from "@/components/custom/table/data-table";
import { blogItems } from "@/configs/objects/blog";

export default function BlogPage() {
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin/Blog" />
      <DataTable
        columns={blogColumns}
        data={blogItems}
        DialogContentComponent={<></>}
      />
    </aside>
  );
}
