"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";

export default function UsersPage() {
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Dashboard/Users" />
    </aside>
  );
}
