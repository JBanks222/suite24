import Link from 'next/link'

import BeforeAfterSlider from '@/app/components/suite24/BeforeAfterSlider'
import type {HomepageContent} from '@/sanity/lib/homepage'
import {dataAttr} from '@/sanity/lib/utils'

type GallerySectionProps = {
  content: HomepageContent['gallery']
  documentId?: string
}

export default function GallerySection({content, documentId}: GallerySectionProps) {
  return (
    <section
      id="gallery"
      className="bg-cream py-20 lg:py-28"
      data-sanity={
        documentId
          ? dataAttr({id: documentId, type: 'homepage', path: 'galleryHeading'}).toString()
          : undefined
      }
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-forest/60">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-forest sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {content.items.map((image, index) => (
            <BeforeAfterSlider
              key={index}
              before={image.before}
              after={image.after}
              alt={`Hair transformation ${index + 1}`}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="#gallery"
            className="group inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-forest transition-colors hover:text-gold"
          >
            View Full Gallery
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
