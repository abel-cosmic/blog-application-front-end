"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import MobileNav from "@/components/custom/nav/mobile-nav";
import MenuBar from "@/components/custom/nav/menu-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <MobileNav />
      <MenuBar />
      {children}
    </div>
  );
}
