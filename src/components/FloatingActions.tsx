import { useEffect, useState } from 'react'
import { siteConfig } from '../data/siteConfig'
import Icon from './Icon'

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Lên đầu trang"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-charcoal-900 shadow-lg transition hover:bg-gold-600 sm:h-12 sm:w-12"
        >
          <Icon name="arrow-up" className="h-5 w-5" />
        </button>
      )}

      <a
        href={siteConfig.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0068FF] text-[11px] font-bold leading-none text-white shadow-lg transition hover:bg-[#0055d1] sm:h-12 sm:w-12 sm:text-xs"
      >
        Zalo
      </a>

      <a
        href={siteConfig.hotlineHref}
        aria-label="Gọi điện tư vấn"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-900 text-white shadow-lg transition hover:bg-charcoal-800 sm:h-12 sm:w-12"
      >
        <Icon name="phone" className="h-5 w-5" />
      </a>
    </div>
  )
}
