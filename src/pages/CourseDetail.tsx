import { Link, useParams } from 'react-router-dom'
import { useCourse } from '../hooks/useCourse'
import MockDataNotice from '../components/MockDataNotice'

export default function CourseDetail() {
  const { slug } = useParams()
  const { course, loading, isMock } = useCourse(slug)

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/courses" className="text-sm font-medium text-blue-700 hover:underline">
        ← Quay lại Đào tạo
      </Link>

      {loading && <p className="mt-8 text-slate-500">Đang tải thông tin khóa học...</p>}

      {!loading && !course && (
        <p className="mt-8 text-slate-500">Không tìm thấy khóa học này.</p>
      )}

      {!loading && course && (
        <>
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
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                {course.instructor_name.trim().split(' ').pop()?.[0] ?? ''}
              </span>
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
            className="mt-10 inline-block rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Đăng ký ngay
          </Link>
        </>
      )}
    </section>
  )
}
