import Button from '@/app/components/suite24/Button'
import {serviceIcons} from '@/app/components/suite24/Icons'
import {services} from '@/app/components/suite24/content'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-forest py-20 text-cream lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold">
            Services
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Luxury Services. Intentional Results.
          </h2>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto mb-6 flex justify-center text-gold">
                  <Icon />
                </div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.15em]">
                  {service.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-cream/75">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
        <div className="mt-14 text-center">
          <Button href="#services" variant="outline" className="border-cream/40 text-cream hover:bg-cream/10">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
