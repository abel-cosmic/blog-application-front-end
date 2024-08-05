"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { blogSchema } from "@/types/schema/blog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useGetBlogByIdQuery } from "@/hooks/blog";

type BlogFormInputs = z.infer<typeof blogSchema>;

export function ViewBlogForm({ id }: { id: number }) {
  const { data } = useGetBlogByIdQuery(id);
  const form = useForm<BlogFormInputs>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: data?.title,
      description: data?.description,
      content: data?.content,
      link: data?.link,
      location: data?.location,
    },
  });

  return (
    <Form {...form}>
      <ScrollArea className="h-[40rem]">
        <form className="space-y-8 p-6 bg-white rounded-md shadow-md">
          <Image
            src={data?.image}
            alt={data?.title}
            width={10000}
            height={10000}
            className="w-fit h-72"
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Blog Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Blog Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input placeholder="Blog Content" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input placeholder="Blog Link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Blog Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </ScrollArea>
    </Form>
  );
}
