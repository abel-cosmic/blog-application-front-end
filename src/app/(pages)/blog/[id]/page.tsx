"use client";

import { useParams } from "next/navigation";
import blogImage1 from "/public/img/blog1.jpg";
import blogImage2 from "/public/img/blog2.jpg";
import blogImage3 from "/public/img/blog3.jpg";
import { Badge } from "@/components/ui/badge";

const blogItems = [
  {
    id: "1",
    title: "Exploring the Future of Technology",
    description:
      "A deep dive into the latest advancements and what they mean for our future.",
    content:
      "In this article, we explore the recent technological advancements and how they are poised to shape our future. From AI to quantum computing, discover the innovations that are driving change.",
    image: blogImage1,
    link: "/blog/1",
    location: "Tech Conference 2024",
    date: "August 1, 2024",
    time: "10:00 AM",
  },
  {
    id: "2",
    title: "The Rise of Remote Work",
    description:
      "How remote work is transforming industries and what it means for the workforce.",
    content:
      "Remote work has become a significant trend in recent years, accelerated by the global pandemic. This blog examines the benefits and challenges of remote work, and its impact on productivity and employee well-being.",
    image: blogImage2,
    link: "/blog/2",
    location: "Remote Work Summit",
    date: "July 15, 2024",
    time: "2:00 PM",
  },
  {
    id: "3",
    title: "Sustainable Living: Tips and Tricks",
    description:
      "Simple steps you can take to live a more sustainable and eco-friendly life.",
    content:
      "Sustainability is more important than ever. In this blog, we provide practical tips and tricks for leading a more sustainable lifestyle, from reducing waste to making eco-friendly choices.",
    image: blogImage3,
    link: "/blog/3",
    location: "Eco Expo 2024",
    date: "June 20, 2024",
    time: "11:00 AM",
  },
];

export default function BlogDetail() {
  const { id } = useParams();

  const blog = blogItems.find((item) => item.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="md:px-20 px-10 gap-4 md:gap-10 flex flex-col md:flex-row md:items-center max-md:pt-20">
      <img
        src={blog.image.src}
        alt={blog.title}
        className="md:w-1/2 max-md:w-full md:h-[35rem] max-md:h-96 object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col gap-4 md:w-2/3 max-md:w-full">
        <div className="flex flex-row gap-2">
          <Badge className="text-xs">{blog.location}</Badge>
          <Badge className="text-xs">{blog.date}</Badge>
        </div>
        <h1 className="text-3xl font-semibold">{blog.title}</h1>

        <p className="text-sm">{blog.description}</p>

        <div className="text-gray-800">{blog.content}</div>
      </div>
    </div>
  );
}
