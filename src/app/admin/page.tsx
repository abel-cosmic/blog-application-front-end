"use client";

import Breadcrumbs from "@/components/custom/nav/bread-crumbs";

export default function DashboardPage() {
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin" />
    </aside>
  );
}
