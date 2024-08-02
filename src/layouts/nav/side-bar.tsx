"use client";
import Link from "next/link";
import { Bell, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "/public/img/logo-dark.png";
import { usePathname, useRouter } from "next/navigation";
import { Key } from "react";
import sidebarItems from "@/configs/objects/side-bar";
import { Badge } from "@/components/ui/badge";

export function Sidebar() {
  const pathname = usePathname();
  const navigate = useRouter();

  return (
    <div className="hidden border-r max-w-md bg-muted md:block">
      <div className="flex h-full max-h-[85vh]  min-w-60 flex-col gap-2">
        <div className="flex h-14 gap-4 items-center border-b px-4 py-10 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex  flex-col justify-between items-start h-full pt-4">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 w-full">
            {sidebarItems.map(
              (
                item: {
                  href: string;
                  label: string;
                  icon: any;
                  badge?: number;
                },
                index: Key | null | undefined
              ) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all ease-linear ${
                      isActive
                        ? "dark:bg-white dark:text-black  bg-primary text-background"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {item.label}
                    {item.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              }
            )}
          </nav>

          <div className="flex flex-col w-full">
            <div className="grid items-start px-2s text-sm font-medium lg:px-4 w-full">
              <Link
                href="/admin/setting"
                className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all ease-linear ${
                  pathname === "/admin/setting"
                    ? "dark:bg-white dark:text-black  bg-primary text-background"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </div>
            <div className="grid items-start px-2s text-sm font-medium lg:px-4 w-full hover:cursor-pointer">
              <div
                className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all ease-linear text-muted-foreground hover:text-primary`}
                onClick={() => {
                  navigate.push("/");
                }}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </div>
            </div>
          </div>
        </div>
        s
      </div>
    </div>
  );
}
