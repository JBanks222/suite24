import AboutSection from '@/app/components/suite24/AboutSection'
import BookCtaSection from '@/app/components/suite24/BookCtaSection'
import GallerySection from '@/app/components/suite24/GallerySection'
import HeroSection from '@/app/components/suite24/HeroSection'
import ServicesSection from '@/app/components/suite24/ServicesSection'
import TestimonialsSection from '@/app/components/suite24/TestimonialsSection'
import {resolveHomepageContent, resolveSiteSettings} from '@/sanity/lib/homepage'
import {sanityFetch} from '@/sanity/lib/live'
import {homepageQuery, settingsQuery} from '@/sanity/lib/queries'

export default async function Page() {
  const [{data: homepage}, {data: settings}] = await Promise.all([
    sanityFetch({query: homepageQuery}),
    sanityFetch({query: settingsQuery}),
  ])

  const content = resolveHomepageContent(homepage)
  const siteSettings = resolveSiteSettings(settings)

  return (
    <>
      <HeroSection content={content.hero} bookUrl={siteSettings.bookUrl} documentId={content._id} />
      <AboutSection content={content.about} documentId={content._id} />
      <ServicesSection content={content.services} documentId={content._id} />
      <GallerySection content={content.gallery} documentId={content._id} />
      <TestimonialsSection content={content.testimonials} documentId={content._id} />
      <BookCtaSection
        content={content.bookCta}
        bookUrl={siteSettings.bookUrl}
        documentId={content._id}
      />
    </>
  )
}
