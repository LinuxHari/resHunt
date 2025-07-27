import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

import { Trash2, Loader2 } from "lucide-react"
import { useTransition } from "react"
import { deleteResume } from "./actions"

interface DeleteConfirmationDialogProps {
  resumeId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DeleteConfirmationDialog = ({ resumeId, open, onOpenChange }: DeleteConfirmationDialogProps) => {
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  async function handleDelete() {
    startTransition(async () => {
      try {
        await deleteResume(resumeId)
        onOpenChange(false)
      } catch (error) {
        console.error(error)
        toast({
          variant: "destructive",
          description: "Something went wrong. Please try again.",
        })
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <Trash2 className="h-5 w-5 text-red-600" />
            </div>
            Delete Resume?
          </DialogTitle>
          <DialogDescription>This will permanently delete this resume. This action cannot be undone.</DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteConfirmationDialog
