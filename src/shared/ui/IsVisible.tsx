import { ReactNode } from 'react'
import { cn } from '../lib/utils'

type Props = {
  isVisible: boolean
  children: ReactNode
}
export function IsVisible({ isVisible, children }: Props) {
  return (
    <div className={cn({ visible: isVisible, invisible: !isVisible })}>
      {' '}
      {children}
    </div>
  )
}
