import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icon'
import { siteConfig } from '../data/siteConfig'
import { services, SERVICE_CATEGORIES } from '../data/services'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpen(false)
    setMobileServicesOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isServicesActive = location.pathname.startsWith('/services')

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-charcoal-900 text-white' : 'text-charcoal-700 hover:text-charcoal-900'
    }`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2.5 text-sm ${isActive ? 'font-semibold text-charcoal-900' : 'font-medium text-charcoal-700'}`

  return (
    <header className="sticky top-0 z-20 shadow-sm">
      {/* Topbar: hotline / email / giờ làm việc */}
      <div className="bg-charcoal-900 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.hotlineHref}
              className="flex items-center gap-1.5 transition hover:text-gold-400"
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-gold-400" />
              Hotline: {siteConfig.hotline}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden items-center gap-1.5 transition hover:text-gold-400 sm:flex"
            >
              <Icon name="mail" className="h-3.5 w-3.5 text-gold-400" />
              {siteConfig.email}
            </a>
          </div>
          <div className="hidden items-center gap-1.5 text-charcoal-200 md:flex">
            <Icon name="clock" className="h-3.5 w-3.5 text-gold-400" />
            {siteConfig.workingHours}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-charcoal-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img
              src={siteConfig.logoMarkUrl}
              alt={siteConfig.companyName}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <NavLink to="/" end className={navLinkClass}>
              Trang chủ
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              Giới thiệu
            </NavLink>

            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isServicesActive || servicesOpen
                    ? 'bg-charcoal-900 text-white'
                    : 'text-charcoal-700 hover:text-charcoal-900'
                }`}
                aria-expanded={servicesOpen}
              >
                Dịch vụ
                <Icon
                  name="chevron-down"
                  className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full w-80 rounded-xl border border-charcoal-100 bg-white p-2 shadow-lg">
                  {SERVICE_CATEGORIES.map((category) => {
                    const categoryServices = services.filter((s) => s.category === category)
                    if (categoryServices.length === 0) return null

                    return (
                      <div key={category} className="mb-1 last:mb-0">
                        <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-charcoal-400">
                          {category}
                        </p>
                        {categoryServices.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-charcoal-700 transition hover:bg-gold-50 hover:text-charcoal-900"
                          >
                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <NavLink to="/courses" className={navLinkClass}>
              Đào tạo
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Liên hệ
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.hotlineHref}
              className="hidden items-center gap-2 rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600 md:inline-flex"
            >
              <Icon name="phone" className="h-4 w-4" />
              {siteConfig.hotline}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-charcoal-700 hover:bg-charcoal-50 md:hidden"
              aria-label={open ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={open}
            >
              <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-charcoal-100 bg-white px-4 py-2 md:hidden">
            <NavLink to="/" end onClick={() => setOpen(false)} className={mobileLinkClass}>
              Trang chủ
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={mobileLinkClass}>
              Giới thiệu
            </NavLink>

            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-charcoal-700"
              aria-expanded={mobileServicesOpen}
            >
              Dịch vụ
              <Icon
                name="chevron-down"
                className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-1 border-l border-charcoal-100 pl-3">
                {SERVICE_CATEGORIES.map((category) => {
                  const categoryServices = services.filter((s) => s.category === category)
                  if (categoryServices.length === 0) return null

                  return (
                    <div key={category}>
                      <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-charcoal-400">
                        {category}
                      </p>
                      {categoryServices.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2.5 py-2 text-sm text-charcoal-600"
                        >
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )
                })}
              </div>
            )}

            <NavLink to="/courses" onClick={() => setOpen(false)} className={mobileLinkClass}>
              Đào tạo
            </NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)} className={mobileLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={mobileLinkClass}>
              Liên hệ
            </NavLink>

            <a
              href={siteConfig.hotlineHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 py-2.5 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600"
            >
              <Icon name="phone" className="h-4 w-4" />
              Gọi tư vấn: {siteConfig.hotline}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
