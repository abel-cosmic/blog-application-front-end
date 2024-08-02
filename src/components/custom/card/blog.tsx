import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  title,
  description,
  content,
  image,
  link,
  location,
  date,
}) => {
  return (
    <Card className="max-md:max-w-96  md:w-[28rem] mx-auto hover:cursor-pointer">
      <CardContent>
        <CardHeader>
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <Image
              src={image}
              alt="blog"
              className="h-60 w-full object-cover rounded-t-lg transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </CardHeader>
        <div className="flex flex-col gap-2 px-8 py-2">
          <h2 className="text-xl font-semibold line-clamp-1">{title}</h2>
          <div className="flex flex-row gap-2">
            <Badge className="text-xs">{location}</Badge>
            <Badge className="text-xs">{date}</Badge>
          </div>
          <p className=" font-light line-clamp-1">{description}</p>
          <p className="text-sm  line-clamp-3">{content}</p>

          <Link
            href={link}
            className="flex flex-row gap-2 items-center hover:underline hover:gap-4 ease-linear transition-all text-sm"
          >
            Read More <ArrowRight />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
