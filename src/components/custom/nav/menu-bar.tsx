import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { links } from "@/configs/objects/nav";
import NavLinkComponent from "./links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import logodark from "/public/img/logo-dark.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MenuBar = () => {
  const navigate = useRouter();
  return (
    <Menubar className="max-md:hidden w-full flex flex-row justify-between px-12 items-center  sticky top-0 right-0 left-0 py-10 bg-white/90 backdrop-blur-md z-50">
      <Image
        src={logodark}
        alt={"logo of blog site"}
        width={0}
        height={0}
        className="w-24 object-contain cursor-pointer"
        onClick={() => {
          navigate.push("/");
        }}
      />
      <div className="flex flex-row gap-2">
        <MenubarMenu>
          {links.map((link, index) => (
            <MenubarTrigger key={index}>
              <NavLinkComponent name={link.name} href={link.href} />
            </MenubarTrigger>
          ))}
          <MenubarTrigger>
            <div className="relative">
              <Input className="rounded-lg" />
              <Button
                variant="link"
                size="icon"
                className="absolute right-2 top-0"
              >
                <Search />
              </Button>
            </div>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex flex-row w-60 gap-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            navigate.push("/auth/sign-in");
          }}
        >
          Sign In
        </Button>
        <Button
          className="w-full"
          onClick={() => {
            navigate.push("/auth/sign-up");
          }}
        >
          Sign Up
        </Button>
      </div>
    </Menubar>
  );
};
export default MenuBar;
