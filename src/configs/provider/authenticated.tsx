"use client";

// import LoadingElement from "@/components/custom/loaders";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
const AuthRedirect = ({ children }: { children: ReactNode }) => {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (status === "loading") return;

  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session, status, router]);
  // if (status === "loading" || !session) {
  //   return <LoadingElement />;
  // }
  return <>{children}</>;
};
export default AuthRedirect;
