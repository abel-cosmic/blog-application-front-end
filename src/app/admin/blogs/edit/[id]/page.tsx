"use client";
import { EditBlogForm } from "@/components/custom/form/blog/edit";
import { useParams } from "next/navigation";

const EditPage = () => {
  const params = useParams();
  const id = params?.id;
  console.log(Number(id));
  return (
    <>
      <EditBlogForm id={Number(id)} />
    </>
  );
};

export default EditPage;
