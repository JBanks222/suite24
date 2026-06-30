/**
 * Seeds the homepage and site settings singleton documents.
 * Run: npm run seed --workspace=studio
 */
import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN

if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID')
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-09-25',
  token,
  useCdn: false,
})

const homepageDoc = {
  _id: 'homepage',
  _type: 'homepage',
  heroTagline: 'Luxury. Intentional. Elevated.',
  heroHeading: 'Luxury Hand-Tied Extensions',
  heroHeadingAccent: '& Lived-In Color',
  heroDescription:
    'Specializing in IBE® Hand-Tied Extensions and custom color for seamless, natural results that elevate your everyday.',
  aboutEyebrow: 'About Tamika',
  aboutHeading: "Hi, I'm Tamika",
  aboutSubtitle: 'Licensed Cosmetologist · IBE® Certified Stylist',
  aboutBio:
    'I believe luxury hair should feel effortless. With years of experience in extensions and lived-in color, I create looks that are seamless, intentional, and uniquely yours — because you deserve to feel confident every single day.',
  aboutSignature: 'Tamika',
  credentials: [
    {_key: 'cred1', title: 'IBE® Certified', description: 'Hand-Tied Extension Specialist'},
    {
      _key: 'cred2',
      title: 'Licensed',
      description: 'New York State Licensed Cosmetologist',
    },
    {
      _key: 'cred3',
      title: 'Luxury Experience',
      description: 'Private Studio. Premium Results.',
    },
    {
      _key: 'cred4',
      title: 'By Appointment Only',
      description: 'Personalized. Intentional. Never rushed.',
    },
  ],
  servicesEyebrow: 'Services',
  servicesHeading: 'Luxury Services. Intentional Results.',
  services: [
    {
      _key: 'svc1',
      title: 'IBE® Hand-Tied Extensions',
      description: 'Seamless, natural-looking extensions for volume, length, and confidence.',
    },
    {
      _key: 'svc2',
      title: 'Lived-In Color',
      description: 'Soft, dimensional color designed to grow out beautifully and effortlessly.',
    },
    {
      _key: 'svc3',
      title: 'Luxury Experience',
      description: 'Private studio. Premium results. One-on-one attention every visit.',
    },
    {
      _key: 'svc4',
      title: 'Custom Blending & Styling',
      description: 'Thoughtful extension placement with precise, personalized results.',
    },
  ],
  galleryEyebrow: 'Transformations',
  galleryHeading: 'Real Hair. Real Results.',
  testimonialsEyebrow: 'Client Love',
  testimonialsHeading: 'What My Clients Are Saying',
  testimonials: [
    {
      _key: 't1',
      quote:
        "I've never felt more confident in my hair. Tamika listened to exactly what I wanted and delivered beyond my expectations.",
      authorName: 'Jasmine R.',
    },
    {
      _key: 't2',
      quote:
        'My install was seamless and so natural. Everyone asks where I get my hair done — I always send them to Suite 24.',
      authorName: 'Ashley M.',
    },
    {
      _key: 't3',
      quote:
        'The attention to detail was unmatched. From consultation to final style, everything felt intentional and luxurious.',
      authorName: 'Danielle T.',
    },
  ],
  bookCtaHeading: 'Ready to Elevate Your Hair?',
  bookCtaDescription: 'Appointments fill fast. Book your consultation today.',
}

const settingsDoc = {
  _id: 'siteSettings',
  _type: 'settings',
  title: 'Suite 24 Boutique',
  phone: '(516) 555-0124',
  email: 'hello@suite24boutique.com',
  location: 'Hempstead, NY',
  bookUrl: '#book',
  footerTagline: 'Luxury. Hand-tied. Elevated.',
}

async function seed() {
  await client.createOrReplace(homepageDoc)
  await client.createOrReplace(settingsDoc)
  console.log('Seeded homepage and site settings documents.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
