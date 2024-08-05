"use client";
import { ViewBlogForm } from "@/components/custom/form/blog/view";
import { useParams } from "next/navigation";

const ViewPage = () => {
  const params = useParams();
  const id = params?.id;
  console.log(Number(id));
  return (
    <>
      <ViewBlogForm id={Number(id)} />
    </>
  );
};

export default ViewPage;
