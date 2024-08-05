"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { jwtDecode } from "jwt-decode";

const AuthRedirect = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuthorization = () => {
      // Only perform the check if the current route is an admin route
      if (!pathname.startsWith("/admin")) {
        return;
      }

      const token = localStorage.getItem("token") || "";
      if (!token) {
        router.push("/");
        return;
      }

      try {
        const decodedToken: any = jwtDecode(token);
        if (decodedToken.role !== "ADMIN") {
          toast({
            title: "Authorization Error",
            description: "You are not authorized to view this page.",
            variant: "destructive",
          });
          router.push("/");
        }
      } catch (error) {
        toast({
          title: "Authorization Error",
          description: "Invalid token.",
          variant: "destructive",
        });
        router.push("/");
      }
    };
    checkAuthorization();
  }, [pathname, router]);

  return <>{children}</>;
};

export default AuthRedirect;
