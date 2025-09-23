"use client"

import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger} from "@/components/ui/dialog"
import {DialogTitle} from "@radix-ui/react-dialog";


export const CreateNotebookButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Notebook</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}