import type { Metadata } from 'next'
import './globals.css'
import kanit from '@/fonts/kanit'

export const metadata: Metadata = {
  title: 'Spyder - Create Subgraphs in Minutes',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={kanit.medium}>
      <body>
        {children}
      </body>
    </html>
  )
}