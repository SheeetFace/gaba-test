import { Skeleton } from "@/components/ui/skeleton"

export function DashboardLoader() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-38 w-full rounded-lg" />
        ))}
      </div>

      <div className="space-y-2">
        <Skeleton className="h-[600px] w-full rounded-xl" />
      </div>
    </div>
  )
}
