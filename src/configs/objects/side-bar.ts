import { BookCopy, Files, Home, PartyPopper, Users } from "lucide-react";

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
    href: "/admin/events",
    label: "Events",
    icon: PartyPopper,
  },
  {
    href: "/admin/registrations",
    label: "Registrations",
    icon: BookCopy,
  },
  {
    href: "/admin/subscribers",
    label: "Subscribers",
    icon: Users,
  },
];

export default sidebarItems;
