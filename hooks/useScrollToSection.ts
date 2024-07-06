import { useCallback } from 'react'
import { Section } from '@/app/page'

export const useScrollToSection = (sections: Section[]) => {
  const scrollToSection = useCallback(
    (index: number): void => {
      const sectionId = sections[index].id
      const element = document.getElementById(sectionId)
      if (element) {
        const targetPosition = element.getBoundingClientRect().top
        const startPosition = window.scrollY
        const distance = targetPosition - startPosition
        const duration = 1000 // ms
        let start: number | null = null

        const step = (timestamp: number) => {
          if (!start) start = timestamp
          const progress = timestamp - start
          const percentage = Math.min(progress / duration, 1)

          window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage))

          if (progress < duration) {
            window.requestAnimationFrame(step)
          }
        }

        window.requestAnimationFrame(step)
      }
    },
    [sections]
  )

  return { scrollToSection }
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}
