import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Không tìm thấy trang"
        description="Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển."
      />
      <section className="mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center">
        <p className="text-sm font-semibold text-gold-800">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Không tìm thấy trang
        </h1>
        <p className="mt-4 max-w-md text-slate-600">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. Vui lòng quay về trang chủ
          để tiếp tục.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600"
        >
          Quay về Trang chủ
        </Link>
      </section>
    </>
  )
}
