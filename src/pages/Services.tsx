import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import PricingSection from '../components/PricingSection'

export default function Services() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Dịch vụ Kế toán - Thuế
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Giải pháp kế toán, thuế và tư vấn doanh nghiệp toàn diện, giúp bạn tuân thủ đúng quy
            định pháp luật và tập trung phát triển hoạt động kinh doanh cốt lõi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <PricingSection />
    </>
  )
}
