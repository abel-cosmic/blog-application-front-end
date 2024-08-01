import Link from "next/link";

const NavLinkComponent = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link href={href} className="hover:underline py-2">
      {name}
    </Link>
  );
};
export default NavLinkComponent;
