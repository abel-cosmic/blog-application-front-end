"use client";

import SignUpAdminForm from "@/components/custom/form/admin";
import { BlogForm } from "@/components/custom/form/blog";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { adminsColumns } from "@/components/custom/table/column/admins";
import { DataTable } from "@/components/custom/table/data-table";
import { blogItems } from "@/configs/objects/blog";
import { useGetAllUserQuery } from "@/hooks/user";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

export default function BlogPage() {
  const { data: users } = useGetAllUserQuery();
  const { setEntity, entity } = useUserStore();
  useEffect(() => {
    if (users) {
      setEntity(users);
    }
  }, [users, setEntity]);
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin/Blog" />
      <DataTable
        columns={adminsColumns}
        data={entity}
        DialogContentComponent={<SignUpAdminForm />}
      />
    </aside>
  );
}
