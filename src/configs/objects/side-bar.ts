import { BookCopy, Files, Home, PartyPopper, User, Users } from "lucide-react";

const sidebarItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/admin/admins",
    label: "Admins",
    icon: User,
  },
  {
    href: "/admin/subscribers",
    label: "Subscribers",
    icon: Users,
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
];

export default sidebarItems;
