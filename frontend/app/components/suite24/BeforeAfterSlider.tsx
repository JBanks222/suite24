'use client'

import Image from 'next/image'
import {useCallback, useRef, useState} from 'react'

type BeforeAfterSliderProps = {
  before: string
  after: string
  alt: string
}

export default function BeforeAfterSlider({before, after, alt}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] cursor-col-resize overflow-hidden bg-cream-dark select-none"
      onMouseMove={(e) => e.buttons === 1 && updatePosition(e.clientX)}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      onClick={(e) => updatePosition(e.clientX)}
    >
      <Image src={after} alt={`${alt} after`} fill className="object-cover" sizes="240px" />
      <div
        className="absolute inset-0"
        style={{clipPath: `inset(0 ${100 - position}% 0 0)`}}
      >
        <Image src={before} alt={`${alt} before`} fill className="object-cover" sizes="240px" />
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/80"
        style={{left: `${position}%`}}
      >
        <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-forest/40 backdrop-blur-sm">
          <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="currentColor">
            <path d="M4 2L1 6l3 4V2zm4 0v8l3-4-3-4z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
