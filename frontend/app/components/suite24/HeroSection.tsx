import Image from 'next/image'
import Link from 'next/link'

import Button from '@/app/components/suite24/Button'
import type {HomepageContent} from '@/sanity/lib/homepage'
import {dataAttr} from '@/sanity/lib/utils'

type HeroSectionProps = {
  content: HomepageContent['hero']
  bookUrl: string
  documentId?: string
}

export default function HeroSection({content, bookUrl, documentId}: HeroSectionProps) {
  return (
    <section
      className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2"
      data-sanity={
        documentId
          ? dataAttr({id: documentId, type: 'homepage', path: 'heroHeading'}).toString()
          : undefined
      }
    >
      <div className="flex flex-col justify-center bg-cream px-6 py-16 sm:px-12 lg:py-24">
        <p className="mb-6 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-forest/70">
          {content.tagline}
        </p>
        <h1 className="font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[3.25rem]">
          {content.heading}{' '}
          <span className="block font-script text-5xl font-normal text-gold sm:text-6xl lg:text-7xl">
            {content.headingAccent}
          </span>
        </h1>
        <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-forest/80 sm:text-base">
          {content.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button href={bookUrl}>Book Consultation</Button>
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
          src={content.imageUrl}
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
