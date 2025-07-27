import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import Link from "next/link";

const CreateResumeButton = () => {
    
      return (
        <div className="space-y-4 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            <Link href={`/editor`} className="flex items-center gap-x-1">
            <PlusSquare className="mr-2 size-6" />
            Create New Resume</Link>
          </Button>
        </div>
      );
}

export default CreateResumeButton