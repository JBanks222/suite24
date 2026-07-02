import type {HomepageQueryResult, SettingsQueryResult} from '@/sanity.types'
import {stegaClean} from '@sanity/client/stega'
import {
  credentials as defaultCredentials,
  galleryImages as defaultGallery,
  services as defaultServices,
  site as defaultSite,
  testimonials as defaultTestimonials,
} from '@/app/components/suite24/content'
import {getImageUrl} from '@/sanity/lib/utils'

const defaultHeroImage =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&h=1200&fit=crop'
const defaultPortraitImage =
  'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=800&fit=crop'

export type SiteSettings = {
  bookUrl: string
  phone: string
  email: string
  location: string
  footerTagline: string
  socialLinks: {platform: string; url: string}[]
}

export type HomepageContent = {
  _id?: string
  hero: {
    tagline: string
    heading: string
    headingAccent: string
    description: string
    imageUrl: string
  }
  about: {
    eyebrow: string
    heading: string
    subtitle: string
    bio: string
    signature: string
    imageUrl: string
    credentials: {title: string; description: string}[]
  }
  services: {
    eyebrow: string
    heading: string
    items: {title: string; description: string}[]
  }
  gallery: {
    eyebrow: string
    heading: string
    items: {before: string; after: string; beforeImage?: unknown; afterImage?: unknown}[]
  }
  testimonials: {
    eyebrow: string
    heading: string
    items: {quote: string; name: string}[]
  }
  bookCta: {
    heading: string
    description: string
  }
}

export function resolveSiteSettings(settings: SettingsQueryResult | null): SiteSettings {
  return {
    bookUrl: stegaClean(settings?.bookUrl || defaultSite.bookUrl),
    phone: stegaClean(settings?.phone || defaultSite.phone),
    email: stegaClean(settings?.email || defaultSite.email),
    location: stegaClean(settings?.location || defaultSite.location),
    footerTagline: stegaClean(settings?.footerTagline || 'Luxury. Hand-tied. Elevated.'),
    socialLinks:
      settings?.socialLinks?.filter((link) => link?.platform && link?.url).map((link) => ({
        platform: stegaClean(link.platform!),
        url: stegaClean(link.url!),
      })) ?? [],
  }
}

export function resolveHomepageContent(data: HomepageQueryResult | null): HomepageContent {
  const galleryItems =
    data?.transformations?.length && data.transformations.some((t) => t?.afterImage)
      ? data.transformations
          .filter((t) => t?.beforeImage && t?.afterImage)
          .map((t) => ({
            before: getImageUrl(t.beforeImage, 400, 500) ?? defaultGallery[0].before,
            after: getImageUrl(t.afterImage, 400, 500) ?? defaultGallery[0].after,
            beforeImage: t.beforeImage,
            afterImage: t.afterImage,
          }))
      : defaultGallery.map((item) => ({...item}))

  return {
    _id: data?._id,
    hero: {
      tagline: data?.heroTagline ?? 'Luxury. Intentional. Elevated.',
      heading: data?.heroHeading ?? 'Luxury Hand-Tied Extensions',
      headingAccent: data?.heroHeadingAccent ?? '& Lived-In Color',
      description:
        data?.heroDescription ??
        'Specializing in IBE® Hand-Tied Extensions and custom color for seamless, natural results that elevate your everyday.',
      imageUrl: getImageUrl(data?.heroImage, 900, 1200) ?? defaultHeroImage,
    },
    about: {
      eyebrow: data?.aboutEyebrow ?? 'About Tamika',
      heading: data?.aboutHeading ?? "Hi, I'm Tamika",
      subtitle: data?.aboutSubtitle ?? 'Licensed Cosmetologist · IBE® Certified Stylist',
      bio:
        data?.aboutBio ??
        'I believe luxury hair should feel effortless. With years of experience in extensions and lived-in color, I create looks that are seamless, intentional, and uniquely yours — because you deserve to feel confident every single day.',
      signature: data?.aboutSignature ?? 'Tamika',
      imageUrl: getImageUrl(data?.aboutPortrait, 600, 800) ?? defaultPortraitImage,
      credentials:
        data?.credentials?.filter((c) => c?.title && c?.description).map((c) => ({
          title: c.title!,
          description: c.description!,
        })) ?? [...defaultCredentials],
    },
    services: {
      eyebrow: data?.servicesEyebrow ?? 'Services',
      heading: data?.servicesHeading ?? 'Luxury Services. Intentional Results.',
      items:
        data?.services?.filter((s) => s?.title && s?.description).map((s) => ({
          title: s.title!,
          description: s.description!,
        })) ?? [...defaultServices],
    },
    gallery: {
      eyebrow: data?.galleryEyebrow ?? 'Transformations',
      heading: data?.galleryHeading ?? 'Real Hair. Real Results.',
      items: galleryItems,
    },
    testimonials: {
      eyebrow: data?.testimonialsEyebrow ?? 'Client Love',
      heading: data?.testimonialsHeading ?? 'What My Clients Are Saying',
      items:
        data?.testimonials?.filter((t) => t?.quote && t?.authorName).map((t) => ({
          quote: t.quote!,
          name: t.authorName!,
        })) ?? defaultTestimonials.map((t) => ({quote: t.quote, name: t.name})),
    },
    bookCta: {
      heading: data?.bookCtaHeading ?? 'Ready to Elevate Your Hair?',
      description:
        data?.bookCtaDescription ?? 'Appointments fill fast. Book your consultation today.',
    },
  }
}
