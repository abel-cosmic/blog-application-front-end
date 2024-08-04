"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { jwtDecode } from "jwt-decode";

const AuthRedirect = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuthorization = () => {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        router.push("/");
        return;
      }

      try {
        const decodedToken: any = jwtDecode(token);
        console.log(decodedToken);
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
  }, [router]);

  return <>{children}</>;
};
export default AuthRedirect;
