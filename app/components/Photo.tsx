'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Plain <img> with lazy loading and a graceful fallback: if the file is not
 * uploaded yet, show initials on an ivory/tint background instead of a broken image.
 */
export default function Photo({
  src,
  alt,
  className = '',
  position = 'center 30%',
  fallbackLabel,
  eager = false,
}: {
  src: string
  alt: string
  className?: string
  position?: string
  fallbackLabel?: string
  eager?: boolean
}) {
  const [failed, setFailed] = useState(false)
  const ref = useRef<HTMLImageElement>(null)
  // Catch errors that fired before hydration (onError would have been missed).
  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [src])
  if (failed) {
    const initials = (fallbackLabel ?? alt)
      .replace(/^Portrait of /, '')
      .split(/\s+/)
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-tint-200 text-evergreen font-extrabold ${className}`}
      >
        <span aria-hidden="true" style={{ fontSize: 'clamp(18px, 28%, 64px)' }}>
          {initials}
        </span>
      </div>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  )
}
