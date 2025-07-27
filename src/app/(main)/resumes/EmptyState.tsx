import { Sparkles } from "lucide-react"

const EmptyState = () => {
  return (
    <div className="space-y-6 py-16 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
        <Sparkles className="h-12 w-12 text-white" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">Create your first resume</h3>
        <p className="mx-auto max-w-sm text-gray-500">
          Get started with our professional resume builder and land your dream
          job faster.
        </p>
      </div>
    </div>
  )
}

export default EmptyState