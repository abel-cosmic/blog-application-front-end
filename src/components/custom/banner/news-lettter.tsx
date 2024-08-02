import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useCreateSubscriberMutation } from "@/hooks/subscriber";
import { subscriptionSchema } from "@/types/schema/subscription";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const NewsLetter = () => {
  const { mutate, isPending } = useCreateSubscriberMutation();
  const form = useForm<z.infer<typeof subscriptionSchema>>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof subscriptionSchema>) {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Success",
          description: "You have successfully subscribed to our newsletter.",
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
        });
      },
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full bg-black text-background p-20 max-md:p-14 flex flex-col gap-4 md:flex-row md:justify-between"
      >
        <div className="text-2xl md:text-3xl font-bold">
          Subscribe To Our Newsletter
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Sign up for our newsletter to receive updates on new blog posts,
            events, and more!
          </p>
          <div className="flex flex-row gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-2/3">
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-background text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="subscribe" className="min-w-32">
              {isPending ? <Loader2 className="animate-spin" /> : "Subscribe"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default NewsLetter;
