import Image from 'next/image'
import Link from 'next/link'

import Button from '@/app/components/suite24/Button'
import {site} from '@/app/components/suite24/content'

export default function HeroSection() {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-cream px-6 py-16 sm:px-12 lg:py-24">
        <p className="mb-6 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-forest/70">
          Luxury. Intentional. Elevated.
        </p>
        <h1 className="font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[3.25rem]">
          Luxury Hand-Tied Extensions{' '}
          <span className="block font-script text-5xl font-normal text-gold sm:text-6xl lg:text-7xl">
            &amp; Lived-In Color
          </span>
        </h1>
        <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-forest/80 sm:text-base">
          Specializing in IBE® Hand-Tied Extensions and custom color for seamless, natural results
          that elevate your everyday.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button href={site.bookUrl}>Book Consultation</Button>
          <Link
            href="#gallery"
            className="group inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-forest transition-colors hover:text-gold"
          >
            View Gallery
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
      <div className="relative min-h-[50vh] lg:min-h-full">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&h=1200&fit=crop"
          alt="Stylist working on client hair in Suite 24 Boutique studio"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/20 to-transparent lg:hidden" />
      </div>
    </section>
  )
}
