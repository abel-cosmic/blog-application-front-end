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
import {
  useCreateBlogMutation,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/hooks/blog";
import { Loader2 } from "lucide-react";
import { blogSchema } from "@/types/schema/blog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import Image from "next/image";

type BlogFormInputs = z.infer<typeof blogSchema>;

export function EditBlogForm({ id }: { id: number }) {
  const { data } = useGetBlogByIdQuery(id);
  const { mutate: createBlog, isPending } = useUpdateBlogMutation(id);
  const [files, setFiles] = useState<any[]>([]);

  const form = useForm<BlogFormInputs>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: data?.title,
      description: data?.description,
      content: data?.content,
      link: data?.link,
      location: data?.location,
      date: data?.date,
    },
  });

  const onSubmit = (data: BlogFormInputs) => {
    const selectedFile = files[0]?.file;
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("link", data.link);
    formData.append("location", data.location);
    formData.append("date", data.date);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
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
          description: error?.message,
          variant: "destructive",
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
          <Image
            src={data?.image}
            alt={data?.title}
            width={10000}
            height={10000}
            className="w-full h-fit"
          />
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            name="files"
            acceptedFileTypes={["image/*"]}
            labelIdle='Drag or <span class="filepond--label-action">Browse</span> your Blog image '
          />
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? <Loader2 className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </ScrollArea>
    </Form>
  );
}
