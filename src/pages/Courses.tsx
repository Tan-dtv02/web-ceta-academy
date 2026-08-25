import { useCourses } from '../hooks/useCourses'
import CourseCard from '../components/CourseCard'
import MockDataNotice from '../components/MockDataNotice'
import Seo from '../components/Seo'

export default function Courses() {
  const { courses, loading, isMock } = useCourses()

  return (
    <>
      <Seo
        title="Đào tạo Kế toán - Thuế"
        description="Các khóa học Kế toán trưởng, ôn thi CPA, kế toán thực hành và thuế chuyên sâu tại CETA Academy."
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Đào tạo Kế toán - Thuế
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Các khóa học thực chiến, cập nhật quy định mới nhất, được giảng dạy bởi đội ngũ
            chuyên gia giàu kinh nghiệm trong lĩnh vực kế toán, kiểm toán và thuế.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        {loading && <p className="text-center text-slate-500">Đang tải danh sách khóa học...</p>}

        {!loading && courses.length === 0 && (
          <p className="text-center text-slate-500">
            Chưa có khóa học nào được cập nhật. Vui lòng quay lại sau.
          </p>
        )}

        {!loading && courses.length > 0 && (
          <>
            {isMock && <MockDataNotice />}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}
