import { useState, type ChangeEvent, type FormEvent } from 'react'
import { siteConfig } from '../data/siteConfig'
import Icon from './Icon'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function QuickConsultForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', phone: '' })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          subject: 'Yêu cầu tư vấn nhanh từ trang chủ CETA Academy',
          name: form.name,
          phone: form.phone,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm({ name: '', phone: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-charcoal-900">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <p className="font-semibold text-white">Cảm ơn bạn! Chúng tôi sẽ gọi lại sớm nhất.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm text-gold-400 transition hover:underline"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Họ tên của bạn"
          className="w-full rounded-lg border-0 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500 sm:flex-1"
        />
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="Số điện thoại"
          className="w-full rounded-lg border-0 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500 sm:flex-1"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex-shrink-0 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Đang gửi...' : 'Đăng ký tư vấn'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-300">
          Gửi thất bại, vui lòng thử lại hoặc gọi hotline {siteConfig.hotline}.
        </p>
      )}
    </div>
  )
}
