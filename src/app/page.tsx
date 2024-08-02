"use client";
import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";
import MenuBar from "@/components/custom/nav/menu-bar";
import MobileNav from "@/components/custom/nav/mobile-nav";
import BlogCard from "@/components/custom/card/blog";

import Footer from "@/components/custom/footer";
import NewsLetter from "@/components/custom/banner/news-lettter";
import FAQBanner from "@/components/custom/banner/faq";
import { blogItems } from "@/configs/objects/blog";

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
    <div className="flex flex-col gap-20 max-md:pt-20">
      <MobileNav />
      <MenuBar />
      <div className="flex flex-col items-center justify-center px-10 gap-8 md:flex-row md:flex-wrap md:gap-4">
        {blogItems.map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            description={item.description}
            content={item.content}
            image={item.image}
            link={item.link}
            location={item.location}
            date={item.date}
          />
        ))}
      </div>
      <NewsLetter />
      <FAQBanner />
      <Footer />
    </div>
  );
}
