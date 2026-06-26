import Link from 'next/link'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({variant = 'dark', className = ''}: LogoProps) {
  const textColor = variant === 'light' ? 'text-cream' : 'text-forest'
  const goldColor = variant === 'light' ? 'text-gold' : 'text-gold'

  return (
    <Link href="/" className={`group inline-block ${className}`}>
      <div className={`font-serif leading-none ${textColor}`}>
        <span className="block text-2xl tracking-[0.15em] sm:text-3xl">
          SUITE <span className={goldColor}>24</span>
        </span>
        <span className="mt-1 block text-[0.55rem] font-sans font-normal tracking-[0.35em] sm:text-[0.65rem]">
          BOUTIQUE
        </span>
      </div>
    </Link>
  )
}
