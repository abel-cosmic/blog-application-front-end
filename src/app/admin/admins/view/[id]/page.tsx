"use client";
import ViewAdminForm from "@/components/custom/form/admin/view";
import { useParams } from "next/navigation";

const ViewPage = () => {
  const params = useParams();
  const id = params?.id;
  console.log(Number(id));
  return (
    <>
      <ViewAdminForm id={Number(id)} />
    </>
  );
};

export default ViewPage;
