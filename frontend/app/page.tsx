import AboutSection from '@/app/components/suite24/AboutSection'
import BookCtaSection from '@/app/components/suite24/BookCtaSection'
import GallerySection from '@/app/components/suite24/GallerySection'
import HeroSection from '@/app/components/suite24/HeroSection'
import ServicesSection from '@/app/components/suite24/ServicesSection'
import TestimonialsSection from '@/app/components/suite24/TestimonialsSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <BookCtaSection />
    </>
  )
}
