import { Link } from 'react-router-dom'
import Icon from './Icon'
import type { Service } from '../data/services'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-gold-400 hover:shadow-md"
    >
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-charcoal-800">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{service.shortDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-charcoal-800 transition-all group-hover:gap-2 group-hover:text-gold-800">
        Xem chi tiết
        <Icon name="arrow-right" className="h-4 w-4" />
      </span>
    </Link>
  )
}
