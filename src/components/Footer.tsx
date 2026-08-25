import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'
import Icon from './Icon'

const quickLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/about', label: 'Giới thiệu' },
  { to: '/services', label: 'Dịch vụ' },
  { to: '/courses', label: 'Đào tạo' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Liên hệ' },
]

const footerServices = services.slice(0, 5)

const trustBadges = ['Bảo mật thông tin', 'Hỗ trợ tận tâm']

export default function Footer() {
  return (
    <footer>
      <div className="h-64 w-full sm:h-80">
        <iframe
          src={siteConfig.mapEmbedSrc}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Bản đồ văn phòng ${siteConfig.companyName}`}
        />
      </div>

      <div className="bg-charcoal-900 text-charcoal-200">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <img
                src={siteConfig.logoFullUrl}
                alt={siteConfig.companyName}
                className="h-16 w-auto"
              />
              <p className="mt-3 text-sm leading-relaxed text-charcoal-300">
                {siteConfig.description}
              </p>
              <div className="mt-5 flex flex-col items-start gap-2">
                {siteConfig.facebookLinks.map((fb) => (
                  <a
                    key={fb.url}
                    href={fb.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white transition hover:bg-white/10"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1877F2] text-xs font-bold text-white">
                      f
                    </span>
                    {fb.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">Dịch vụ</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {footerServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-charcoal-300 transition hover:text-gold-400"
                    >
                      › {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                Liên kết nhanh
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-charcoal-300 transition hover:text-gold-400">
                      › {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">Liên hệ</p>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                  <a href={siteConfig.hotlineHref} className="text-charcoal-300 hover:text-white">
                    {siteConfig.hotline}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                  <a href={`mailto:${siteConfig.email}`} className="text-charcoal-300 hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="clock" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                  <span className="text-charcoal-300">{siteConfig.workingHours}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="map-pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                  <span className="text-charcoal-300">
                    <span className="block font-medium text-white">
                      {siteConfig.hanoiOfficeLabel}
                    </span>
                    {siteConfig.hanoiAddress}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-5 text-center text-xs text-charcoal-300 sm:flex-row sm:justify-between sm:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 px-3 py-1 text-charcoal-200"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
