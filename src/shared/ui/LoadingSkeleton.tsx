import { cn } from '../lib/utils'
import { Skeleton } from './skeleton'
type Props = {
  isVisible: boolean
}
export function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <Skeleton className="h-4 w-[200px] bg-gray-500" />
      <Skeleton className="h-4 w-[250px] bg-gray-500" />
      <Skeleton className="h-20 w-full bg-gray-500" />
    </div>
  )
}
