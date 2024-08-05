"use client";

import { CreateBlogForm } from "@/components/custom/form/blog/create";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { blogColumns } from "@/components/custom/table/column/blog";
import { DataTable } from "@/components/custom/table/data-table";
import { useGetAllBlogQuery } from "@/hooks/blog";
import { useBlogStore } from "@/store/blog";
import { useEffect } from "react";

export default function BlogPage() {
  const { data: blogs } = useGetAllBlogQuery();
  const { setEntity, entity } = useBlogStore();
  useEffect(() => {
    if (blogs) {
      setEntity(blogs);
    }
  }, [blogs, setEntity]);
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin/Blog" />
      <DataTable
        columns={blogColumns}
        data={entity}
        DialogContentComponent={<CreateBlogForm />}
      />
    </aside>
  );
}
