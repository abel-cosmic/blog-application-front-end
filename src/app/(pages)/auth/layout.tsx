"use client";
import logo from "/public/img/logo.png";
import logodark from "/public/img/logo-dark.png";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="flex items-center justify-center md:w-1/2 w-full max-md:flex-col max-md:gap-8">
        <Image
          src={logodark}
          alt={"logo of blog site"}
          width={0}
          height={0}
          className="h-10 object-contain md:hidden"
        />
        {children}
      </div>
      <div className="relative md:flex flex-col justify-end gap-2 px-20 py-20 w-1/2 h-full bg-primary text-background hidden">
        <Image
          src={logo}
          alt={"logo of blog site"}
          width={0}
          height={0}
          className="h-10 object-contain absolute right-10 top-10"
        />
        <h2 className="text-2xl font-bold mb-4">Discover More Blogs</h2>
        <p>
          Sign in to explore an extensive collection of blogs and articles that
          will keep you informed and inspired. Join our community to stay
          up-to-date with the latest trends and insights.
        </p>
      </div>
    </div>
  );
}
