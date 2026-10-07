import { useEffect, useRef, useState, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode | ((isVisible: boolean) => ReactNode)
  className?: string
  delay?: number
  threshold?: number
}

export const FadeIn = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 pointer-events-none'
      } ${className}`}
    >
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  )
}
