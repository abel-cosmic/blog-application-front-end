"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { jwtDecode } from "jwt-decode";

const AuthRedirect = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuthorization = () => {
      const tokenString = localStorage.getItem("token");

      if (!tokenString) {
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
        console.log(
          "🚀 ~ file: authenticated.tsx ~ line 31 ~ checkAuthorization ~ tokenString",
          tokenString
        );
        if (tokenString) {
          const tokenObject = JSON.parse(tokenString);
          const token = tokenObject.token;
          const decodedToken: any = jwtDecode(token);
          console.log(
            "🚀 ~ file: authenticated.tsx ~ line 37 ~ checkAuthorization ~ decodedToken",
            decodedToken
          );

          if (decodedToken.role !== "ADMIN") {
            toast({
              title: "Authorization Error",
              description: "You are not authorized to view this page.",
              variant: "destructive",
            });
            router.push("/");
          }
        }
      } catch (error) {
        router.push("/");
      } finally {
        setIsChecking(false);
      }
    };

    checkAuthorization();
  }, [router]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
};

export default AuthRedirect;
