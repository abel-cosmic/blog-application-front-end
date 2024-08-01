import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
// import MobileProfile from "../profile/mobile";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import NavLinkComponent from "../nav/links";
import logodark from "/public/img/logo-dark.png";
import Image from "next/image";

const LandingSheet = () => {
  const links = [
    { name: "Blog", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ];
  return (
    <SheetContent className="py-20 flex flex-col gap-2 backdrop-blur-md bg-white/50">
      <SheetHeader className="flex flex-col gap-2 py-2 items-start">
        <Image
          src={logodark}
          alt={"logo of blog site"}
          width={0}
          height={0}
          className="w-24 object-contain md:hidden"
        />

        <SheetTitle>Subscribe to our newsletter</SheetTitle>
        {/* <MobileProfile /> */}
      </SheetHeader>
      <div className="relative">
        <Input className="rounded-lg" />
        <Button variant="link" size="icon" className="absolute right-2 top-0">
          <Search />
        </Button>
      </div>
      <div className="flex flex-col gap-6 py-8">
        {links.map((link, index) => (
          <NavLinkComponent name={link.name} href={link.href} />
        ))}
      </div>
      <SheetDescription>
        Sign up to get the latest blogs and articles from our community
      </SheetDescription>
      <SheetFooter className="flex flex-col gap-2">
        <SheetClose asChild>
          <Button type="submit" variant="outline">
            Sign In
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button type="submit">Sign Up</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default LandingSheet;
