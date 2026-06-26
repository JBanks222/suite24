import Image from 'next/image'

import {credentialIcons} from '@/app/components/suite24/Icons'
import {credentials} from '@/app/components/suite24/content'

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=800&fit=crop"
              alt="Tamika, licensed cosmetologist and IBE certified stylist"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-forest/60">
                About Tamika
              </p>
              <h2 className="font-serif text-4xl text-forest sm:text-5xl">Hi, I&apos;m Tamika</h2>
              <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Licensed Cosmetologist · IBE® Certified Stylist
              </p>
              <p className="mt-6 font-sans text-sm leading-relaxed text-forest/80 sm:text-base">
                I believe luxury hair should feel effortless. With years of experience in
                extensions and lived-in color, I create looks that are seamless, intentional, and
                uniquely yours — because you deserve to feel confident every single day.
              </p>
              <p className="mt-8 font-script text-4xl text-gold">Tamika</p>
            </div>
            <ul className="space-y-8 border-t border-forest/10 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              {credentials.map((item, index) => {
                const Icon = credentialIcons[index]
                return (
                  <li key={item.title} className="flex gap-4">
                    <div className="shrink-0 text-gold">
                      <Icon />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-forest">
                        {item.title}
                      </p>
                      <p className="mt-1 font-sans text-sm text-forest/70">{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
