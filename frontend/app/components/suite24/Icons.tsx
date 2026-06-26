type IconProps = {
  className?: string
}

export function HairIcon({className = 'h-10 w-10'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M20 4c-4 0-8 3-8 8 0 3 2 5 4 6v16M20 4c4 0 8 3 8 8 0 3-2 5-4 6v16M12 18c-2 2-4 6-4 10M28 18c2 2 4 6 4 10" />
    </svg>
  )
}

export function BrushIcon({className = 'h-10 w-10'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M8 32l12-12M20 20l8-8 4 4-8 8M28 12l4-4M12 28l-4 4" />
      <rect x="6" y="30" width="8" height="4" rx="1" />
    </svg>
  )
}

export function ChairIcon({className = 'h-10 w-10'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 16h16v14H12zM14 30v4M26 30v4M10 20h20" />
      <path d="M16 16V10a4 4 0 018 0v6" />
    </svg>
  )
}

export function BottleIcon({className = 'h-10 w-10'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M16 8h8v4l2 4v16H14V16l2-4V8z" />
      <path d="M14 24h12" />
    </svg>
  )
}

export function CertIcon({className = 'h-8 w-8'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="16" cy="16" r="12" />
      <path d="M11 16l3 3 7-7" />
    </svg>
  )
}

export function LicenseIcon({className = 'h-8 w-8'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="6" y="4" width="20" height="24" rx="2" />
      <path d="M10 12h12M10 18h8" />
    </svg>
  )
}

export function DiamondIcon({className = 'h-8 w-8'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M16 4l12 8-12 16L4 12z" />
    </svg>
  )
}

export function CalendarIcon({className = 'h-8 w-8'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="4" y="6" width="24" height="22" rx="2" />
      <path d="M4 12h24M10 4v4M22 4v4" />
    </svg>
  )
}

export function StarIcon({className = 'h-4 w-4'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L.8 6.2l5-.7z" />
    </svg>
  )
}

export function SealIcon({className = 'h-32 w-32'}: IconProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fill="currentColor"
        fontSize="28"
        fontFamily="serif"
        fontWeight="400"
      >
        S
      </text>
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fill="currentColor"
        fontSize="14"
        fontFamily="sans-serif"
        letterSpacing="2"
      >
        24
      </text>
    </svg>
  )
}

const serviceIcons = [HairIcon, BrushIcon, ChairIcon, BottleIcon] as const
const credentialIcons = [CertIcon, LicenseIcon, DiamondIcon, CalendarIcon] as const

export {serviceIcons, credentialIcons}
