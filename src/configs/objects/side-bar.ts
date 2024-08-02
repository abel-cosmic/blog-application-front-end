import { Files, Home, User, Users } from "lucide-react";

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
    href: "/admin/users",
    label: "Manage",
    icon: Users,
  },
  {
    href: "/admin/subscribers",
    label: "Subscribers",
    icon: User,
  },
];

export default sidebarItems;
