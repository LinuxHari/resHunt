import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import Link from "next/link";

const CreateResumeButton = () => {
    
      return (
        <div className="space-y-4 text-center">
          <Button size="lg" className="btn-primary text-lg">
            <Link href={`/editor`} className="flex items-center gap-x-1">
            <PlusSquare className="mr-2 size-6" />
            Create New Resume</Link>
          </Button>
        </div>
      );
}

export default CreateResumeButton