import { useEffect, useRef } from 'react'

export const useScrollReveal = (options = {}) => {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, ...options }
    )

    if (ref.current) {
      ref.current.classList.add('animate-on-scroll-hidden')
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return ref
}