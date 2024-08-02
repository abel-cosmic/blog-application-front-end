import Link from "next/link";

const NavLinkComponent = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link href={href} className="hover:underline">
      {name}
    </Link>
  );
};
export default NavLinkComponent;
