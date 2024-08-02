"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { jwtDecode } from "jwt-decode";

const AuthRedirect = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuthorization = () => {
      // Retrieve token from local storage or cookies
      const token = localStorage.getItem("token") || ""; // Adjust based on how you store the token

      if (!token) {
        // No token exists
        toast({
          title: "Authorization Error",
          description: "You are not authorized to view this page.",
          variant: "destructive",
        });
        router.push("/");
        return;
      }

      try {
        // Decode the token
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
        // Handle token decoding errors
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
