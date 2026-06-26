export const site = {
  name: 'Suite 24',
  tagline: 'Boutique',
  phone: '(516) 555-0124',
  email: 'hello@suite24boutique.com',
  location: 'Hempstead, NY',
  bookUrl: '#book',
} as const

export const navLinks = [
  {label: 'Home', href: '/'},
  {label: 'Extensions', href: '#services'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Reviews', href: '#reviews'},
  {label: 'Book', href: '#book'},
] as const

export const services = [
  {
    title: 'IBE® Hand-Tied Extensions',
    description: 'Seamless, natural-looking extensions for volume, length, and confidence.',
  },
  {
    title: 'Lived-In Color',
    description: 'Soft, dimensional color designed to grow out beautifully and effortlessly.',
  },
  {
    title: 'Luxury Experience',
    description: 'Private studio. Premium results. One-on-one attention every visit.',
  },
  {
    title: 'Custom Blending & Styling',
    description: 'Thoughtful extension placement with precise, personalized results.',
  },
] as const

export const credentials = [
  {
    title: 'IBE® Certified',
    description: 'Hand-Tied Extension Specialist',
  },
  {
    title: 'Licensed',
    description: 'New York State Licensed Cosmetologist',
  },
  {
    title: 'Luxury Experience',
    description: 'Private Studio. Premium Results.',
  },
  {
    title: 'By Appointment Only',
    description: 'Personalized. Intentional. Never rushed.',
  },
] as const

export const testimonials = [
  {
    quote:
      "I've never felt more confident in my hair. Tamika listened to exactly what I wanted and delivered beyond my expectations.",
    name: 'Jasmine R.',
  },
  {
    quote:
      'My install was seamless and so natural. Everyone asks where I get my hair done — I always send them to Suite 24.',
    name: 'Ashley M.',
  },
  {
    quote:
      'The attention to detail was unmatched. From consultation to final style, everything felt intentional and luxurious.',
    name: 'Danielle T.',
  },
] as const

export const galleryImages = [
  {
    before:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop&crop=top',
    after:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=500&fit=crop&crop=top',
  },
  {
    before:
      'https://images.unsplash.com/photo-1595476108010-b1735973db35?w=400&h=500&fit=crop&crop=top',
    after:
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop&crop=top',
  },
  {
    before:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=500&fit=crop&crop=top',
    after:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=top',
  },
  {
    before:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=top',
    after:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=top',
  },
  {
    before:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=top',
    after:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop&crop=top',
  },
] as const
