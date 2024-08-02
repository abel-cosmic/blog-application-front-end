"use client";

import OverviewCard from "@/components/custom/card/overview";
import Breadcrumbs from "@/components/custom/nav/bread-crumbs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Clock, Edit3, FileText, XCircle } from "lucide-react";

const blogData = [
  {
    title: "Publish",
    value: "20",
    description: "Published Posts",
    icon: FileText,
  },
  {
    title: "Draft",
    value: "15",
    description: "Draft Posts",
    icon: Edit3,
  },
  {
    title: "Pending",
    value: "5",
    description: "Pending Reviews",
    icon: Clock,
  },
  {
    title: "Rejected",
    value: "8",
    description: "Rejected Posts",
    icon: XCircle,
  },
];

export default function DashboardPage() {
  return (
    <aside className="flex flex-col w-full h-full gap-6 pt-4 max-md:pt-32">
      <Breadcrumbs path="Admin" />
      <ScrollArea className="flex flex-col h-full gap-6  max-md:w-[40rem] ml-8">
        <ScrollBar orientation="horizontal" />
        <div className="flex flex-row gap-6 w-full">
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
      </ScrollArea>
    </aside>
  );
}
