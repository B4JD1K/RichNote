"use client"

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Notebook} from "@/db/schema";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Loader, Trash2} from "lucide-react";
import {deleteNotebook} from "@/server/notebooks";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface NotebookCardProps {
  notebook: Notebook;
  children?: React.ReactNode;
}

export default function NotebookCard({notebook}: NotebookCardProps) {
  const router = useRouter();

  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    const response = await deleteNotebook(notebook.id);
    try {
      if (response.success) {
        toast.success(response.message);
        router.refresh();
      }
    } catch {
      toast.error(response.message);
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{notebook.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{notebook.notes?.length ?? 0} notes</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Link href={`/dashboard/notebooks/${notebook.id}`}>
          <Button variant="outline">View</Button>
        </Link>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger asChild>
            <Link href={"/dashboard"}>
              <Button
                variant="destructive"
                disabled={isDeleting}
              >
                {isDeleting ? <Loader className="size-4 animate-spin"/> : <Trash2 className="size-4"/>}
              </Button>
            </Link>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}