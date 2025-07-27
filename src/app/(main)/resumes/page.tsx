import { FileText } from "lucide-react";
import ResumeItem from "./ResumeItem";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import CreateResumeButton from "./CreateResumeButton";
import EmptyState from "./EmptyState";

export default async function ResumesPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const [resumes, totalCount] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black">
      <main className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="mb-12 space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Your Resumes
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-500">
              Manage and edit your professional resumes. Create multiple
              versions for different opportunities.
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>
                {totalCount} {totalCount === 1 ? "Resume" : "Resumes"}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <CreateResumeButton />
        </div>

        {resumes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resumes.map((resume) => (
              <ResumeItem key={resume.id} resume={resume} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}
