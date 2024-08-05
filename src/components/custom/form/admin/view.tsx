import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/types/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useGetUserByIdQuery } from "@/hooks/user";

export default function ViewAdminForm({ id }: { id: number }) {
  const { data } = useGetUserByIdQuery(id);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: data?.name,
      email: data?.email,
    },
  });

  function onSubmit(data: z.infer<typeof signUpSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto grid gap-6 w-full"
      >
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Register Admin</h1>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel htmlFor="name">Nick Name</FormLabel>
              <FormControl>
                <Input id="name" type="text" disabled {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  disabled
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
