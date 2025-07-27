"use client"

import ResumePreview from "@/components/ResumePreview"
import type { ResumeServerData } from "@/lib/types"
import { mapToResumeValues } from "@/lib/utils"
import { formatDate } from "date-fns"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import MoreMenu from "@/components/resumes/MoreMenu"
interface ResumeItemProps {
  resume: ResumeServerData
}

const ResumeItem = ({ resume }: ResumeItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: resume.title || "Resume",
  })

  const wasUpdated = resume.updatedAt !== resume.createdAt

  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-900 bg-white dark:bg-black p-4 transition-all duration-200 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <Link href={`/editor?resumeId=${resume.id}`} className="block">
            <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
              {resume.title || "No title"}
            </h3>
            {resume.description && <p className="line-clamp-2 text-sm text-gray-500 mb-3">{resume.description}</p>}
          </Link>
          <div className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 dark:bg-black py-1 text-xs font-medium text-gray-700 dark:text-white">
            <Calendar className="size-3" />
            <span>
              {wasUpdated ? "Updated" : "Created"} on {formatDate(resume.updatedAt, "MMM d, yyyy")}
            </span>
          </div>
        </div>

        <MoreMenu resumeId={resume.id} onPrintClick={reactToPrintFn} />
      </div>

      <Link href={`/editor?resumeId=${resume.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 ">
          <ResumePreview resumeData={mapToResumeValues(resume)} contentRef={contentRef} className="w-full" />

          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </Link>
    </div>
  )
}

export default ResumeItem