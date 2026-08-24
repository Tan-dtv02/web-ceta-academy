import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { useCourses } from '../hooks/useCourses'
import ServiceCard from '../components/ServiceCard'
import CourseCard from '../components/CourseCard'
import Icon, { type IconName } from '../components/Icon'

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'shield',
    title: 'Uy tín, bảo mật',
    description:
      'Cam kết bảo mật tuyệt đối thông tin tài chính, số liệu kế toán của khách hàng.',
  },
  {
    icon: 'clock',
    title: 'Nhiều năm kinh nghiệm',
    description:
      'Đội ngũ đồng hành cùng hàng trăm doanh nghiệp thuộc nhiều lĩnh vực khác nhau.',
  },
  {
    icon: 'users',
    title: 'Đội ngũ chuyên môn',
    description:
      'Kế toán viên, chuyên gia thuế được đào tạo bài bản, cập nhật quy định liên tục.',
  },
  {
    icon: 'badge',
    title: 'Cam kết chất lượng',
    description:
      'Đảm bảo hồ sơ, báo cáo chính xác, nộp đúng hạn, hạn chế tối đa rủi ro thuế.',
  },
]

export default function Home() {
  const featuredServices = services.slice(0, 4)
  const { courses: featuredCourses, loading: coursesLoading } = useCourses(3)

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:py-24">
          <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Dịch vụ Kế toán - Thuế trọn gói
          </span>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            Đồng hành cùng doanh nghiệp trên hành trình phát triển bền vững
          </h1>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            CETA Academy cung cấp dịch vụ kế toán, thuế và tư vấn doanh nghiệp chuyên nghiệp,
            giúp bạn yên tâm tập trung vào hoạt động kinh doanh cốt lõi.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Liên hệ tư vấn miễn phí
            </Link>
            <Link
              to="/services"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Dịch vụ nổi bật</h2>
          <p className="mt-2 text-slate-600">
            Giải pháp kế toán - thuế phù hợp với từng giai đoạn phát triển của doanh nghiệp
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="text-sm font-medium text-blue-700 hover:underline">
            Xem tất cả dịch vụ →
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Khóa học nổi bật</h2>
            <p className="mt-2 text-slate-600">
              Nâng cao chuyên môn kế toán - thuế cùng đội ngũ giảng viên giàu kinh nghiệm
            </p>
          </div>
          {coursesLoading && (
            <p className="mt-10 text-center text-slate-500">Đang tải khóa học...</p>
          )}

          {!coursesLoading && featuredCourses.length === 0 && (
            <p className="mt-10 text-center text-slate-500">
              Chưa có khóa học nào được cập nhật.
            </p>
          )}

          {!coursesLoading && featuredCourses.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link to="/courses" className="text-sm font-medium text-blue-700 hover:underline">
              Xem tất cả khóa học →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Vì sao chọn chúng tôi</h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <Icon name={reason.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Sẵn sàng đồng hành cùng doanh nghiệp của bạn
        </h2>
        <p className="mt-2 text-slate-600">
          Liên hệ ngay để được tư vấn giải pháp kế toán - thuế phù hợp nhất.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Liên hệ ngay
        </Link>
      </section>
    </>
  )
}
