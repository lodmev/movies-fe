import '../styles'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { queryClient } from '@/shared/api'
import { cn } from '@/shared/lib/utils'
import { QueryProvider } from '../providers/query-provider'
import { MainMenu } from '@/widget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movies app',
  description: 'Top movies imdb',
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('p-1 w-full h-full sm:mt-11', inter.className)}>
        <QueryProvider client={queryClient}>
          <MainMenu />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
