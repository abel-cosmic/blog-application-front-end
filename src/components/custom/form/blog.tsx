"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useCreateBlogMutation } from "@/hooks/blog";
import { Loader2 } from "lucide-react";
import { blogSchema } from "@/types/schema/blog";
import { ScrollArea } from "@/components/ui/scroll-area";

type BlogFormInputs = z.infer<typeof blogSchema>;

export function BlogForm() {
  const { mutate: createBlog, isPending } = useCreateBlogMutation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<BlogFormInputs>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      link: "",
      location: "",
      date: "",
    },
  });

  const onSubmit = (data: BlogFormInputs) => {
    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("link", data.link);
    formData.append("location", data.location);
    formData.append("date", data.date);
    console.log("data", {
      title: data.title,
      description: data.description,
      content: data.content,
      link: data.link,
      location: data.location,
      date: data.date,
      img: selectedFile,
    });
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    // Use mutation hook to create blog
    createBlog(formData, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Success",
          description: "Blog post created successfully.",
        });
      },
      onError: (error: any) => {
        toast({
          title: "Error",
          description:
            error?.message || "An error occurred while creating the blog post.",
        });
      },
    });
  };

  return (
    <Form {...form}>
      <ScrollArea className="h-[40rem]">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-6 bg-white rounded-md shadow-md"
        >
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
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input placeholder="Blog Date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
            <FormMessage />
          </FormItem>
          <Button type="submit" disabled={isPending}>
            {isPending ? <Loader2 className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </ScrollArea>
    </Form>
  );
}
