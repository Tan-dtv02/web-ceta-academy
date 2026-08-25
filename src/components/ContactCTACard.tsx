import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import Icon from './Icon'

export default function ContactCTACard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Cần tư vấn thêm?</h3>
      <p className="mt-2 text-sm text-slate-600">
        Đội ngũ {siteConfig.companyName} sẵn sàng hỗ trợ bạn nhanh chóng, chính xác.
      </p>

      <div className="mt-5 space-y-3 text-sm">
        <a
          href={siteConfig.hotlineHref}
          className="flex items-center gap-3 text-charcoal-800 transition hover:text-gold-800"
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-charcoal-800">
            <Icon name="phone" className="h-4 w-4" />
          </span>
          {siteConfig.hotline}
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-3 text-charcoal-800 transition hover:text-gold-800"
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-charcoal-800">
            <Icon name="mail" className="h-4 w-4" />
          </span>
          {siteConfig.email}
        </a>
        <div className="flex items-center gap-3 text-charcoal-700">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-charcoal-800">
            <Icon name="clock" className="h-4 w-4" />
          </span>
          {siteConfig.workingHours}
        </div>
      </div>

      <Link
        to="/contact"
        className="mt-6 block rounded-lg bg-gold-500 px-4 py-2.5 text-center text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600"
      >
        Liên hệ tư vấn ngay
      </Link>
    </div>
  )
}
