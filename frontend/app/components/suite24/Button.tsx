import Link from 'next/link'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'gold' | 'outline'
  className?: string
}

const variants = {
  primary: 'bg-forest text-cream hover:bg-forest-light',
  gold: 'bg-gold text-forest hover:bg-gold-light',
  outline: 'border border-gold text-gold hover:bg-gold/10',
}

export default function Button({href, children, variant = 'primary', className = ''}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-xs font-sans font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
