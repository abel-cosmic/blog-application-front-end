"use client";

import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { blogItems } from "@/configs/objects/blog";
import Image from "next/image";
import { useGetBlogByIdQuery } from "@/hooks/blog";

export default function BlogDetail() {
  const { id } = useParams();
  const { data: blogItem } = useGetBlogByIdQuery(Number(id));
  const blog = blogItem || blogItems.find((item) => item.id === Number(id));

  // const blog = blogItems.find((item) => item.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="md:px-20 px-10 gap-4 md:gap-10 flex flex-col md:flex-row md:items-center max-md:pt-20">
      <Image
        src={blog.image}
        alt={blog.title}
        width={10000}
        height={10000}
        className="md:w-1/2 max-md:w-full md:h-[35rem] max-md:h-96 object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col gap-4 md:w-2/3 max-md:w-full">
        <div className="flex flex-row gap-2">
          <Badge className="text-xs">{blog.location}</Badge>
          <Badge className="text-xs">{blog.date}</Badge>
        </div>
        <h1 className="text-3xl font-semibold">{blog.title}</h1>
        <p className="hover:underline cursor-pointer">{blog.link}</p>
        <p className="text-sm">{blog.description}</p>
        <div className="text-gray-800">{blog.content}</div>
      </div>
    </div>
  );
}
