import type { Metadata } from 'next'
import './globals.css'
import kanit from '@/fonts/kanit'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Spidey - Create Subgraphs in Minutes',
  description: 'Spidey let\'s you create subgraphs in minutes with no-code',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={kanit.medium}>
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="AW-16548335604" />
    </html>
  )
}
