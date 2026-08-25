import { useState } from 'react'
import Icon from './Icon'

export interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection({
  title = 'Câu hỏi thường gặp',
  subtitle,
  items,
  className = 'border-t border-slate-200 bg-white',
}: {
  title?: string
  subtitle?: string
  items: FAQItem[]
  className?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={className}>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
        <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 bg-white px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-charcoal-50 sm:text-base"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <Icon
                    name="chevron-down"
                    className={`h-4 w-4 flex-shrink-0 text-charcoal-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="bg-white px-5 pb-5 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
