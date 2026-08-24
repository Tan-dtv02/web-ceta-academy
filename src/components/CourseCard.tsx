import { Link } from 'react-router-dom'
import Icon from './Icon'
import type { Course } from '../types/course'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
        <Icon name="book" className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
      {course.description && (
        <p className="mt-2 flex-1 text-sm text-slate-600">{course.description}</p>
      )}

      {(course.duration || course.format) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {course.duration && (
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {course.duration}
            </span>
          )}
          {course.format && (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {course.format}
            </span>
          )}
        </div>
      )}

      <Link
        to={`/courses/${course.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 transition-all hover:gap-2"
      >
        Xem chi tiết
        <Icon name="arrow-right" className="h-4 w-4" />
      </Link>
    </div>
  )
}
