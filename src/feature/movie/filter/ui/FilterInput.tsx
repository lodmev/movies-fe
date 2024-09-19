import { Dispatch, SetStateAction, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
type Props = {
  inputControls: [string, Dispatch<SetStateAction<string>>]
}
export function FilterInput({ inputControls }: Props) {
  const [value, setValue] = inputControls
  return (
    <div className="flex flex-col max-w-4xl gap-2">
      <div className="flex items-center space-x-2 gap-2">
        <Label htmlFor="filter-by-name">Search by name:</Label>
        <div className="max-w-xs">
          <Input
            id="filter-by-name"
            placeholder="movie's name"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}
