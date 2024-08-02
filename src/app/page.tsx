"use client";
import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";
import MenuBar from "@/components/custom/nav/menu-bar";
import MobileNav from "@/components/custom/nav/mobile-nav";
import BlogCard from "@/components/custom/card/blog";

import blogImage1 from "/public/img/blog1.jpg";
import blogImage2 from "/public/img/blog2.jpg";
import blogImage3 from "/public/img/blog3.jpg";
import blogImage4 from "/public/img/blog4.jpg";
import blogImage5 from "/public/img/blog5.jpg";
import blogImage6 from "/public/img/blog6.jpg";
import Footer from "@/components/custom/footer";
import NewsLetter from "@/components/custom/banner/news-lettter";
import FAQBanner from "@/components/custom/banner/faq";

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

  const blogItems = [
    {
      title: "Exploring the Future of Technology",
      description:
        "A deep dive into the latest advancements and what they mean for our future.",
      content:
        "In this article, we explore the recent technological advancements and how they are poised to shape our future. From AI to quantum computing, discover the innovations that are driving change.",
      image: blogImage1,
      link: "/blog/future-of-technology",
      location: "Tech Conference 2024",
      date: "August 1, 2024",
    },
    {
      title: "The Rise of Remote Work",
      description:
        "How remote work is transforming industries and what it means for the workforce.",
      content:
        "Remote work has become a significant trend in recent years, accelerated by the global pandemic. This blog examines the benefits and challenges of remote work, and its impact on productivity and employee well-being.",
      image: blogImage2,
      link: "/blog/rise-of-remote-work",
      location: "Remote Work Summit",
      date: "July 15, 2024",
    },
    {
      title: "Sustainable Living: Tips and Tricks",
      description:
        "Simple steps you can take to live a more sustainable and eco-friendly life.",
      content:
        "Sustainability is more important than ever. In this blog, we provide practical tips and tricks for leading a more sustainable lifestyle, from reducing waste to making eco-friendly choices.",
      image: blogImage3,
      link: "/blog/sustainable-living",
      location: "Eco Expo 2024",
      date: "June 20, 2024",
    },
    {
      title: "Healthy Eating on a Budget",
      description: "Learn how to eat healthy without breaking the bank.",
      content:
        "Eating healthy doesn't have to be expensive. This blog provides tips and tricks for maintaining a nutritious diet while sticking to a budget. Learn about affordable superfoods, meal planning, and smart shopping strategies.",
      image: blogImage4,
      link: "/blog/healthy-eating",
      location: "Health & Wellness Fair",
      date: "July 10, 2024",
    },
    {
      title: "Traveling the World: Top Destinations for 2024",
      description:
        "Discover the best travel destinations for the upcoming year.",
      content:
        "Planning your next vacation? This blog highlights the top travel destinations for 2024. From tropical beaches to historic cities, find out where you should go for an unforgettable experience.",
      image: blogImage5,
      link: "/blog/top-destinations-2024",
      location: "World Travel Expo",
      date: "May 5, 2024",
    },
    {
      title: "The Benefits of Mindfulness Meditation",
      description: "How mindfulness meditation can improve your life.",
      content:
        "Mindfulness meditation has numerous benefits for mental and physical health. This blog explores the science behind mindfulness and provides practical tips for incorporating meditation into your daily routine.",
      image: blogImage6,
      link: "/blog/mindfulness-meditation",
      location: "Mindfulness Retreat",
      date: "April 12, 2024",
    },
  ];

  return (
    <div className="flex flex-col gap-6 max-md:pt-20">
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
