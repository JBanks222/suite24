import Button from '@/app/components/suite24/Button'
import type {HomepageContent} from '@/sanity/lib/homepage'
import {dataAttr} from '@/sanity/lib/utils'

type BookCtaSectionProps = {
  content: HomepageContent['bookCta']
  bookUrl: string
  documentId?: string
}

export default function BookCtaSection({content, bookUrl, documentId}: BookCtaSectionProps) {
  return (
    <section
      id="book"
      className="bg-forest py-16 lg:py-20"
      data-sanity={
        documentId
          ? dataAttr({id: documentId, type: 'homepage', path: 'bookCtaHeading'}).toString()
          : undefined
      }
    >
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-serif text-3xl text-cream sm:text-4xl">{content.heading}</h2>
            <p className="mt-3 font-sans text-sm text-cream/75 sm:text-base">{content.description}</p>
          </div>
          <Button href={bookUrl} variant="gold" className="shrink-0 px-10 py-4">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
