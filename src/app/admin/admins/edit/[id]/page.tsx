"use client";
import UpdateAdminForm from "@/components/custom/form/admin/edit";
import { useParams } from "next/navigation";

const EditPage = () => {
  const params = useParams();
  const id = params?.id;
  console.log(Number(id));
  return (
    <>
      <UpdateAdminForm id={Number(id)} />
    </>
  );
};

export default EditPage;
