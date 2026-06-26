'use client'

import Link from 'next/link'
import {useState} from 'react'

import Button from '@/app/components/suite24/Button'
import Logo from '@/app/components/suite24/Logo'
import {navLinks, site} from '@/app/components/suite24/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/5 bg-cream/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.bookUrl} className="px-5 py-2.5 text-[0.6rem]">
            Book Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`block h-0.5 w-6 bg-forest transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-forest/5 bg-cream px-6 py-6 lg:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block font-sans text-sm font-semibold uppercase tracking-[0.15em] text-forest"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href={site.bookUrl} className="w-full">
                Book Consultation
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
