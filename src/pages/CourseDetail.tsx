import { Link, useParams } from 'react-router-dom'
import { useCourse } from '../hooks/useCourse'
import MockDataNotice from '../components/MockDataNotice'
import Avatar from '../components/Avatar'
import Seo from '../components/Seo'
import Breadcrumb from '../components/Breadcrumb'
import ContactCTACard from '../components/ContactCTACard'

export default function CourseDetail() {
  const { slug } = useParams()
  const { course, loading, isMock } = useCourse(slug)

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {course && (
        <Seo
          title={course.title}
          description={course.description ?? `Thông tin chi tiết khóa học ${course.title} tại CETA Academy.`}
        />
      )}

      <Breadcrumb
        items={[
          { label: 'Trang chủ', to: '/' },
          { label: 'Đào tạo', to: '/courses' },
          { label: course?.title ?? 'Chi tiết khóa học' },
        ]}
      />

      {loading && <p className="text-slate-500">Đang tải thông tin khóa học...</p>}

      {!loading && !course && <p className="text-slate-500">Không tìm thấy khóa học này.</p>}

      {!loading && course && (
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {isMock && <MockDataNotice />}
            <h1 className="mt-4 text-3xl font-bold text-slate-900">{course.title}</h1>
            {course.description && <p className="mt-4 text-slate-600">{course.description}</p>}

            {(course.duration || course.format || course.start_date || course.tuition_fee) && (
              <div className="mt-6 grid gap-4 rounded-xl border border-slate-200 bg-white p-6 sm:grid-cols-2">
                {course.duration && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Thời lượng
                    </p>
                    <p className="mt-1 font-medium text-slate-900">{course.duration}</p>
                  </div>
                )}
                {course.format && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Hình thức học
                    </p>
                    <p className="mt-1 font-medium text-slate-900">{course.format}</p>
                  </div>
                )}
                {course.start_date && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Ngày khai giảng
                    </p>
                    <p className="mt-1 font-medium text-slate-900">
                      {new Date(course.start_date).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                )}
                {course.tuition_fee && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Học phí
                    </p>
                    <p className="mt-1 font-medium text-slate-900">{course.tuition_fee}</p>
                  </div>
                )}
              </div>
            )}

            {course.content && (
              <>
                <h2 className="mt-8 text-lg font-semibold text-slate-900">Nội dung khóa học</h2>
                <div className="mt-4 whitespace-pre-line leading-relaxed text-slate-600">
                  {course.content}
                </div>
              </>
            )}

            {course.instructor_name && (
              <div className="mt-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <Avatar name={course.instructor_name} />
                <div>
                  <p className="font-semibold text-slate-900">{course.instructor_name}</p>
                  {course.instructor_title && (
                    <p className="text-sm text-slate-600">{course.instructor_title}</p>
                  )}
                </div>
              </div>
            )}

            <Link
              to="/contact"
              className="mt-10 inline-block rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600"
            >
              Đăng ký ngay
            </Link>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <ContactCTACard />
          </aside>
        </div>
      )}
    </section>
  )
}
