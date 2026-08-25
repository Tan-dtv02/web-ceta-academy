import { services, SERVICE_CATEGORIES } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import Seo from '../components/Seo'

const serviceFaqs: { question: string; answer: string }[] = [
  {
    question: 'Tôi có thể đăng ký nhiều dịch vụ cùng lúc để tối ưu chi phí không?',
    answer:
      'Có. Chúng tôi có thể kết hợp nhiều dịch vụ (kế toán trọn gói, tư vấn thuế, lương & BHXH...) trong cùng một hợp đồng để tối ưu chi phí và đầu mối làm việc cho doanh nghiệp.',
  },
  {
    question: 'Hợp đồng dịch vụ kế toán tối thiểu là bao lâu?',
    answer:
      'Tùy nhu cầu, hợp đồng có thể theo tháng, theo quý hoặc theo năm. Chúng tôi luôn thỏa thuận linh hoạt để phù hợp với tình hình thực tế của doanh nghiệp.',
  },
  {
    question: 'Doanh nghiệp đang dùng phần mềm kế toán khác có chuyển đổi được không?',
    answer:
      'Được. Đội ngũ sẽ hỗ trợ rà soát dữ liệu hiện có và chuyển đổi sang hệ thống phù hợp mà không làm gián đoạn hoạt động kế toán của doanh nghiệp.',
  },
  {
    question: 'Nếu phát sinh công việc ngoài phạm vi hợp đồng thì tính phí thế nào?',
    answer:
      'Mọi công việc phát sinh ngoài phạm vi ban đầu đều được tư vấn và báo giá rõ ràng trước khi thực hiện, đảm bảo minh bạch về chi phí.',
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Dịch vụ Kế toán - Thuế"
        description="Khám phá các dịch vụ kế toán trọn gói, quyết toán thuế, tư vấn thuế và thành lập doanh nghiệp của CETA Academy."
      />

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
        {SERVICE_CATEGORIES.map((category, index) => {
          const categoryServices = services.filter((service) => service.category === category)
          if (categoryServices.length === 0) return null

          return (
            <div key={category} className={index > 0 ? 'mt-14' : ''}>
              <h2 className="text-xl font-bold text-slate-900">{category}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <PricingSection />

      <FAQSection
        subtitle="Giải đáp nhanh những băn khoăn thường gặp về dịch vụ"
        items={serviceFaqs}
        className="border-t border-slate-200"
      />
    </>
  )
}
