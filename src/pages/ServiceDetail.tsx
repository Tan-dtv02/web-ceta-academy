import { Link, Navigate, useParams } from 'react-router-dom'
import { services } from '../data/services'
import Icon from '../components/Icon'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/services" className="text-sm font-medium text-blue-700 hover:underline">
        ← Quay lại Dịch vụ
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-slate-900">{service.title}</h1>
      <p className="mt-4 text-slate-600">{service.description}</p>

      <h2 className="mt-8 text-lg font-semibold text-slate-900">Nội dung công việc bao gồm</h2>
      <ul className="mt-4 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-slate-600">
            <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mt-10 inline-block rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        Liên hệ tư vấn
      </Link>
    </section>
  )
}
