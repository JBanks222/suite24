import {StarIcon} from '@/app/components/suite24/Icons'
import {testimonials} from '@/app/components/suite24/content'

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-cream-dark py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-forest/60">
            Client Love
          </p>
          <h2 className="mt-3 font-serif text-3xl text-forest sm:text-4xl lg:text-5xl">
            What My Clients Are Saying
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="border border-forest/10 bg-cream p-8 text-center"
            >
              <div className="mb-4 flex justify-center gap-1 text-gold">
                {Array.from({length: 5}).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="font-serif text-base italic leading-relaxed text-forest/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-forest/70">
                — {testimonial.name}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`h-2 w-2 rounded-full ${dot === 0 ? 'bg-gold' : 'bg-forest/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
