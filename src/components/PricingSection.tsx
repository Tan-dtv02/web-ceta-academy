import { Link } from 'react-router-dom'
import Icon from './Icon'

interface Plan {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: 'Cơ bản',
    description: 'Phù hợp hộ kinh doanh, doanh nghiệp mới thành lập',
    price: '800.000đ',
    period: '/tháng',
    features: [
      'Hạch toán chứng từ cơ bản',
      'Báo cáo thuế theo quý',
      'Báo cáo tài chính cuối năm',
      'Tư vấn qua điện thoại, email',
    ],
  },
  {
    name: 'Nâng cao',
    description: 'Phù hợp doanh nghiệp vừa và nhỏ đang hoạt động',
    price: '1.800.000đ',
    period: '/tháng',
    features: [
      'Toàn bộ quyền lợi gói Cơ bản',
      'Kế toán trọn gói hàng tháng',
      'Quyết toán thuế cuối năm',
      'Tư vấn thuế ưu tiên',
      'Đại diện làm việc với cơ quan thuế',
    ],
    highlighted: true,
  },
  {
    name: 'Doanh nghiệp',
    description: 'Phù hợp doanh nghiệp quy mô lớn, nhiều phát sinh',
    price: 'Liên hệ',
    period: 'báo giá',
    features: [
      'Toàn bộ quyền lợi gói Nâng cao',
      'Kế toán trưởng phụ trách riêng',
      'Tư vấn thuế, tài chính chuyên sâu',
      'Báo cáo quản trị theo yêu cầu',
      'Hỗ trợ 24/7',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Bảng giá dịch vụ</h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Chi phí tham khảo, sẽ được báo giá chính xác dựa trên quy mô và nhu cầu thực tế của
            doanh nghiệp.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-6 ${
                plan.highlighted
                  ? 'border-gold-500 bg-gold-50/40 shadow-md'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.highlighted && (
                <span className="mb-3 inline-block w-fit rounded-full bg-charcoal-900 px-3 py-1 text-xs font-semibold text-white">
                  Phổ biến nhất
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-700" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-gold-500 text-charcoal-900 hover:bg-gold-600'
                    : 'border border-charcoal-300 text-charcoal-700 hover:border-gold-400 hover:text-charcoal-900'
                }`}
              >
                Liên hệ tư vấn
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
