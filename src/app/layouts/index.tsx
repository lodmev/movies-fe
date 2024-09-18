import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles'
import { cn } from '@/shared/lib/utils'
import { QueryProvider } from '../providers/query-provider'
import { queryClient } from '@/shared/api'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies app',
  description: 'Top movies imdb',
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('p-1 w-full h-full', inter.className)}>
        <QueryProvider client={queryClient}>{children}</QueryProvider>
      </body>
    </html>
  )
}
