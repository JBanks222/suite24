import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

const defaultServices = [
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
]

const defaultCredentials = [
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
]

const defaultTestimonials = [
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
]

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'about', title: 'About'},
    {name: 'services', title: 'Services'},
    {name: 'gallery', title: 'Gallery'},
    {name: 'testimonials', title: 'Testimonials'},
    {name: 'cta', title: 'Book CTA'},
  ],
  fields: [
    defineField({
      name: 'heroTagline',
      title: 'Tagline',
      type: 'string',
      group: 'hero',
      initialValue: 'Luxury. Intentional. Elevated.',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Heading',
      type: 'string',
      group: 'hero',
      initialValue: 'Luxury Hand-Tied Extensions',
    }),
    defineField({
      name: 'heroHeadingAccent',
      title: 'Heading accent (script)',
      type: 'string',
      group: 'hero',
      initialValue: '& Lived-In Color',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue:
        'Specializing in IBE® Hand-Tied Extensions and custom color for seamless, natural results that elevate your everyday.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      group: 'hero',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'about',
      initialValue: 'About Tamika',
    }),
    defineField({
      name: 'aboutHeading',
      title: 'Heading',
      type: 'string',
      group: 'about',
      initialValue: "Hi, I'm Tamika",
    }),
    defineField({
      name: 'aboutSubtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'about',
      initialValue: 'Licensed Cosmetologist · IBE® Certified Stylist',
    }),
    defineField({
      name: 'aboutBio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      group: 'about',
      initialValue:
        'I believe luxury hair should feel effortless. With years of experience in extensions and lived-in color, I create looks that are seamless, intentional, and uniquely yours — because you deserve to feel confident every single day.',
    }),
    defineField({
      name: 'aboutSignature',
      title: 'Signature',
      type: 'string',
      group: 'about',
      initialValue: 'Tamika',
    }),
    defineField({
      name: 'aboutPortrait',
      title: 'Portrait image',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      group: 'about',
      of: [defineArrayMember({type: 'credentialItem'})],
      initialValue: defaultCredentials,
    }),
    defineField({
      name: 'servicesEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'services',
      initialValue: 'Services',
    }),
    defineField({
      name: 'servicesHeading',
      title: 'Heading',
      type: 'string',
      group: 'services',
      initialValue: 'Luxury Services. Intentional Results.',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      group: 'services',
      of: [defineArrayMember({type: 'serviceItem'})],
      initialValue: defaultServices,
    }),
    defineField({
      name: 'galleryEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'gallery',
      initialValue: 'Transformations',
    }),
    defineField({
      name: 'galleryHeading',
      title: 'Heading',
      type: 'string',
      group: 'gallery',
      initialValue: 'Real Hair. Real Results.',
    }),
    defineField({
      name: 'transformations',
      title: 'Before & after gallery',
      type: 'array',
      group: 'gallery',
      of: [defineArrayMember({type: 'transformationItem'})],
    }),
    defineField({
      name: 'testimonialsEyebrow',
      title: 'Eyebrow',
      type: 'string',
      group: 'testimonials',
      initialValue: 'Client Love',
    }),
    defineField({
      name: 'testimonialsHeading',
      title: 'Heading',
      type: 'string',
      group: 'testimonials',
      initialValue: 'What My Clients Are Saying',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'testimonials',
      of: [defineArrayMember({type: 'testimonialItem'})],
      initialValue: defaultTestimonials,
    }),
    defineField({
      name: 'bookCtaHeading',
      title: 'Heading',
      type: 'string',
      group: 'cta',
      initialValue: 'Ready to Elevate Your Hair?',
    }),
    defineField({
      name: 'bookCtaDescription',
      title: 'Description',
      type: 'string',
      group: 'cta',
      initialValue: 'Appointments fill fast. Book your consultation today.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Homepage'}
    },
  },
})
