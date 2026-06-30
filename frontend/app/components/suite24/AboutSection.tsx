import Image from 'next/image'

import {credentialIcons} from '@/app/components/suite24/Icons'
import type {HomepageContent} from '@/sanity/lib/homepage'
import {dataAttr} from '@/sanity/lib/utils'

type AboutSectionProps = {
  content: HomepageContent['about']
  documentId?: string
}

export default function AboutSection({content, documentId}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-cream py-20 lg:py-28"
      data-sanity={
        documentId
          ? dataAttr({id: documentId, type: 'homepage', path: 'aboutHeading'}).toString()
          : undefined
      }
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
            <Image
              src={content.imageUrl}
              alt={`${content.heading}, licensed cosmetologist and IBE certified stylist`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-forest/60">
                {content.eyebrow}
              </p>
              <h2 className="font-serif text-4xl text-forest sm:text-5xl">{content.heading}</h2>
              <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {content.subtitle}
              </p>
              <p className="mt-6 font-sans text-sm leading-relaxed text-forest/80 sm:text-base">
                {content.bio}
              </p>
              <p className="mt-8 font-script text-4xl text-gold">{content.signature}</p>
            </div>
            <ul className="space-y-8 border-t border-forest/10 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              {content.credentials.map((item, index) => {
                const Icon = credentialIcons[index] ?? credentialIcons[0]
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
