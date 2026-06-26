import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Great_Vibes, Lato, Playfair_Display} from 'next/font/google'
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity/visual-editing'
import {Toaster} from 'sonner'

import DraftModeToast from '@/app/components/DraftModeToast'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {handleError} from '@/app/client-utils'
import {SanityLive} from '@/sanity/lib/live'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  variable: '--font-lato',
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Suite 24 Boutique | Luxury Hand-Tied Extensions & Lived-In Color',
  description:
    'Specializing in IBE® Hand-Tied Extensions and custom color for seamless, natural results that elevate your everyday.',
}

export default async function RootLayout({children}: LayoutProps<'/'>) {
  const {isEnabled: isDraftMode} = await draftMode()

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} font-sans`}
    >
      <body>
        <Toaster />
        {isDraftMode && (
          <>
            <DraftModeToast />
            <VisualEditing />
          </>
        )}
        <SanityLive onError={handleError} />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
