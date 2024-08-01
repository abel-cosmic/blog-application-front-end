"use client";
import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";
import MenuBar from "@/components/custom/nav/menu-bar";
import MobileNav from "@/components/custom/nav/mobile-nav";

export default function Home() {
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
    <>
      <MobileNav />
      <MenuBar />
    </>
  );
}
