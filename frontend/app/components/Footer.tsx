import Link from 'next/link'

import Logo from '@/app/components/suite24/Logo'
import {SealIcon} from '@/app/components/suite24/Icons'
import {navLinks, site} from '@/app/components/suite24/content'

const infoLinks = [
  {label: 'About', href: '#about'},
  {label: 'Policies', href: '#'},
  {label: 'Aftercare', href: '#'},
  {label: 'FAQ', href: '#'},
] as const

const socialLinks = [
  {label: 'Instagram', href: '#'},
  {label: 'TikTok', href: '#'},
  {label: 'Facebook', href: '#'},
  {label: 'Pinterest', href: '#'},
] as const

export default function Footer() {
  return (
    <footer className="bg-cream-dark">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] lg:gap-8">
          <div>
            <Logo />
            <p className="mt-4 font-script text-2xl text-gold">Luxury. Hand-tied. Elevated.</p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-forest"
                >
                  <span className="font-sans text-[0.6rem] font-bold">{social.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/60">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-forest/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/60">
              Info
            </p>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-forest/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/60">
              Contact
            </p>
            <ul className="space-y-2 font-sans text-sm text-forest/80">
              <li>
                <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
              <li className="text-forest/60">By Appointment Only</li>
            </ul>
          </div>

          <div className="hidden text-gold lg:block">
            <SealIcon />
          </div>
        </div>
      </div>

      <div className="border-t border-forest/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="font-sans text-xs text-forest/50">
            © {new Date().getFullYear()} Suite 24 Boutique. All Rights Reserved.
          </p>
          <p className="font-sans text-xs text-forest/50">Site designed with luxury in mind</p>
        </div>
      </div>
    </footer>
  )
}
