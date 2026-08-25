import { Link, Navigate, useParams } from 'react-router-dom'
import { services } from '../data/services'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import Breadcrumb from '../components/Breadcrumb'
import ContactCTACard from '../components/ContactCTACard'
import ServiceCard from '../components/ServiceCard'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Seo title={service.title} description={service.shortDescription} />

      <Breadcrumb
        items={[
          { label: 'Trang chủ', to: '/' },
          { label: 'Dịch vụ', to: '/services' },
          { label: service.title },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-charcoal-800">
            <Icon name={service.icon} className="h-7 w-7" />
          </span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">{service.title}</h1>
          <p className="mt-4 text-slate-600">{service.description}</p>

          <h2 className="mt-8 text-lg font-semibold text-slate-900">Nội dung công việc bao gồm</h2>
          <ul className="mt-4 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-slate-600">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-700" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-semibold text-slate-900">Quy trình thực hiện</h2>
          <ol className="mt-4 space-y-4">
            {service.process.map((step, index) => (
              <li key={step} className="flex items-start gap-4 text-slate-600">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-semibold text-charcoal-900">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          <Link
            to="/contact"
            className="mt-10 inline-block rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600"
          >
            Liên hệ tư vấn
          </Link>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <ContactCTACard />
        </aside>
      </div>

      {relatedServices.length > 0 && (
        <div className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-xl font-bold text-slate-900">Dịch vụ liên quan</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
