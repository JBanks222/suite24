import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Great_Vibes, Lato, Playfair_Display} from 'next/font/google'
import {draftMode} from 'next/headers'
import {toPlainText} from 'next-sanity'
import {VisualEditing} from 'next-sanity/visual-editing'
import {Toaster} from 'sonner'

import DraftModeToast from '@/app/components/DraftModeToast'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {handleError} from '@/app/client-utils'
import {resolveSiteSettings} from '@/sanity/lib/homepage'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'

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

export async function generateMetadata(): Promise<Metadata> {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
    stega: false,
  })

  const title = settings?.title || 'Suite 24 Boutique'
  const description =
    settings?.description && Array.isArray(settings.description)
      ? toPlainText(settings.description)
      : 'Luxury hand-tied extensions and lived-in color in Hempstead, NY.'

  const ogImage = resolveOpenGraphImage(settings?.ogImage)

  return {
    title: {
      template: `%s | ${title}`,
      default: `${title} | Luxury Hand-Tied Extensions & Lived-In Color`,
    },
    description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export default async function RootLayout({children}: LayoutProps<'/'>) {
  const {isEnabled: isDraftMode} = await draftMode()
  const {data: settings} = await sanityFetch({query: settingsQuery})
  const siteSettings = resolveSiteSettings(settings)

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
        <Header settings={siteSettings} />
        <main className="pt-20">{children}</main>
        <Footer settings={siteSettings} />
        <SpeedInsights />
      </body>
    </html>
  )
}
