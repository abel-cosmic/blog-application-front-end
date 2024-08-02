"use client";
import { Menu } from "lucide-react";
import logodark from "/public/img/logo-dark.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import LandingSheet from "../sheet/landing";

const MobileNav = () => {
  return (
    <div className="md:hidden flex flex-row w-full justify-between px-10 py-4 backdrop-blur-md bg-background ">
      <Image
        src={logodark}
        alt={"logo of blog site"}
        width={0}
        height={0}
        className="w-24 object-contain md:hidden"
      />

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu className="w-10 h-fit p-2" />
          </Button>
        </SheetTrigger>
        <LandingSheet />
      </Sheet>
    </div>
  );
};

export default MobileNav;
