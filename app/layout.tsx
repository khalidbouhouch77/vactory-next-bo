import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next V4 - BO',
  description: 'void - next v4 back office',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338]"
        )}>
              <ModalProvider />
                {children}
                <Toaster />
        </body>
      </html>
  )
}