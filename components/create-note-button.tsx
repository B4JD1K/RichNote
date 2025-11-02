"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "sonner";
import {useState} from "react";
import {Loader} from "lucide-react";
import {useRouter} from "next/navigation";
import {createNote} from "@/server/notes";

const formSchema = z.object({
  name: z.string().min(2).max(50),
});

export const CreateNoteButton = ({notebookId}: { notebookId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const response = await createNote({
        title: values.name,
        content: {},
        notebookId,
      });

      if (response.success) {
        form.reset();
        toast.success("Note created successfully");
        router.refresh();
        setIsOpened(false);
      } else {
        toast.error(response.message);
      }
      console.log(response)
    } catch (e) {
      console.error(e);
      toast.error("Failed while creating the note");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogTrigger asChild>
        <Button className="w-max">Create Note</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Note</DialogTitle>
          <DialogDescription>
            Create new note.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Note" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type="submit">
              {isLoading ? <Loader className="size-4 animate-spin"/> : "Create"}
            </Button>
          </form>
        </Form>

      </DialogContent>
    </Dialog>
  )
}