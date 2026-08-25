import { useState, type ChangeEvent, type FormEvent } from 'react'
import Seo from '../components/Seo'
import Icon, { type IconName } from '../components/Icon'
import { siteConfig } from '../data/siteConfig'

// Lấy trực tiếp từ siteConfig.ts để đảm bảo luôn khớp với Navbar/Footer —
// chỉ cần sửa 1 chỗ duy nhất (siteConfig.ts) khi thay thông tin thật.
const contactInfo: { icon: IconName; label: string; value: string }[] = [
  {
    icon: 'map-pin',
    label: siteConfig.hanoiOfficeLabel,
    value: siteConfig.hanoiAddress,
  },
  {
    icon: 'phone',
    label: 'Điện thoại',
    value: siteConfig.hotline,
  },
  {
    icon: 'mail',
    label: 'Email',
    value: siteConfig.email,
  },
  {
    icon: 'clock',
    label: 'Giờ làm việc',
    value: siteConfig.workingHours,
  },
]

const inputClass =
  'mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: 'Yêu cầu tư vấn mới từ website CETA Academy',
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Seo
        title="Liên hệ"
        description="Liên hệ CETA Academy để được tư vấn dịch vụ kế toán, thuế và các khóa học đào tạo phù hợp."
      />

      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Liên hệ</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Để lại thông tin, đội ngũ CETA Academy sẽ liên hệ tư vấn cho bạn trong thời gian sớm
          nhất.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-charcoal-800">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="mt-0.5 font-medium text-slate-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-charcoal-800">
                <Icon name="check" className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                Cảm ơn bạn đã liên hệ!
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Chúng tôi đã nhận được thông tin và sẽ phản hồi trong thời gian sớm nhất.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-charcoal-800 hover:text-gold-800 hover:underline"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Họ tên
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="09xx xxx xxx"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ban@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Nội dung cần tư vấn
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Mô tả ngắn gọn nhu cầu của bạn..."
                  className={inputClass}
                />
              </div>

              {status === 'error' && (
                <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
                  Gửi yêu cầu thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua số điện thoại /
                  email bên trên.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Đang gửi...' : 'Gửi yêu cầu'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
