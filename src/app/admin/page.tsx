"use client";

import OverviewCard from "@/components/custom/card/overview";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { Clock, Edit3, FileText, XCircle } from "lucide-react";

const blogData = [
  {
    title: "Blog Post 1",
    value: "20",
    description: "Published Posts",
    icon: FileText,
  },
  {
    title: "Blog Post 2",
    value: "15",
    description: "Draft Posts",
    icon: Edit3,
  },
  {
    title: "Blog Post 3",
    value: "5",
    description: "Pending Reviews",
    icon: Clock,
  },
  {
    title: "Blog Post 4",
    value: "8",
    description: "Rejected Posts",
    icon: XCircle,
  },
];

export default function DashboardPage() {
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {blogData.map((blog, index) => (
          <OverviewCard
            key={index}
            title={blog.title}
            value={blog.value}
            description={blog.description}
            icon={blog.icon}
          />
        ))}
      </div>
    </aside>
  );
}
