import type { Metadata } from 'next'
import './globals.css'
import kanit from '@/fonts/kanit'
import { GoogleAnalytics } from '@next/third-parties/google'
import { CSPostHogProvider } from './Provider'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Spidey - Create Subgraphs in Minutes',
  description: 'Spidey let\'s you create subgraphs in minutes with no-code',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={kanit.medium}>
      <Head>
        <meta name="ahrefs-site-verification" content="09305276438e3a11c93711e67aaaf84256cadedce40b9a0f5bb54a3b00baa6a3" />
      </Head>
      <CSPostHogProvider>
        <body>
          {children}
        </body>
      </CSPostHogProvider>
      <GoogleAnalytics gaId="AW-16548335604" />
    </html>
  )
}
