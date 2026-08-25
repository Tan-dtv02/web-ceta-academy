import { Link } from 'react-router-dom'
import Icon from './Icon'

export interface BreadcrumbItem {
  label: string
  to?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <Icon name="chevron-right" className="h-3.5 w-3.5 text-slate-300" />}
            {item.to && !isLast ? (
              <Link to={item.to} className="text-slate-500 transition hover:text-gold-800">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'font-medium text-charcoal-800' : 'text-slate-500'}>
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
