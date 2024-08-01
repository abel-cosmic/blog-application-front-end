"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export const NextAuthClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => <SessionProvider>{children}</SessionProvider>;
