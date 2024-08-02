import { Files, Home, Users } from "lucide-react";

const sidebarItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/admin/blogs",
    label: "Blogs",
    icon: Files,
  },
  {
    href: "/admin/subscribers",
    label: "Subscribers",
    icon: Users,
  },
];

export default sidebarItems;
