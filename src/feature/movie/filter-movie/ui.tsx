import { FC, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
type Props = {
  FilterList: FC<{ searchString: string }>
}
export function FilteredMovies({ FilterList }: Props) {
  const [searchText, setSearchText] = useState('')
  const [debounce] = useDebounce(searchText, 500)

  return (
    <div className="flex flex-col max-w-4xl gap-2 m-auto">
      <div className="flex items-center space-x-2 gap-2">
        <Label htmlFor="filter-by-name">Search by movie name</Label>
        <div className="max-w-xs">
          <Input
            id="filter-by-name"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value
              setSearchText(value)
            }}
          />
        </div>
      </div>
      <FilterList searchString={debounce} />
    </div>
  )
}
