import Button from '@/app/components/suite24/Button'
import {site} from '@/app/components/suite24/content'

export default function BookCtaSection() {
  return (
    <section id="book" className="bg-forest py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-serif text-3xl text-cream sm:text-4xl">
              Ready to Elevate Your Hair?
            </h2>
            <p className="mt-3 font-sans text-sm text-cream/75 sm:text-base">
              Appointments fill fast. Book your consultation today.
            </p>
          </div>
          <Button href={site.bookUrl} variant="gold" className="shrink-0 px-10 py-4">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
