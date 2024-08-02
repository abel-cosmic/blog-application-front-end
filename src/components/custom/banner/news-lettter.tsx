import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <div className="w-full bg-black text-background p-20 max-md:p-14 flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="text-2xl md:text-3xl font-bold">
        Subscribe To Our Newsletter
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Sign up for our newsletter to receive updates on new blog posts,
          events, and more!
        </p>
        <div className="flex flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="bg-background text-black"
          />
          <Button variant="subscribe">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
