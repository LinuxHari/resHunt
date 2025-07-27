import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Printer, Trash2 } from "lucide-react"
import { useState } from "react"
import DeleteConfirmationDialog from "@/components/resumes/DeleteConfirmDialog"

interface MoreMenuProps {
  resumeId: string
  onPrintClick: () => void
}

const MoreMenu = ({ resumeId, onPrintClick }: MoreMenuProps) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-md text-gray-500 hover:bg-gray-100 hover:dark:bg-black flex-shrink-0"
          >
            <MoreVertical className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem
            className="flex items-center gap-2 text-gray-700 dark:text-white hover:bg-blue-50 hover:text-blue-600"
            onClick={onPrintClick}
          >
            <Printer className="size-4" />
            Print
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2 text-red-600 hover:!text-red-600"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            <Trash2 className="size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteConfirmationDialog
        resumeId={resumeId}
        open={showDeleteConfirmation}
        onOpenChange={setShowDeleteConfirmation}
      />
    </>
  )
}

export default MoreMenu