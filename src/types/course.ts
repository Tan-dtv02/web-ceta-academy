export interface Course {
  id: string
  title: string
  slug: string
  description: string | null
  content: string | null
  duration: string | null
  format: string | null
  instructor_name: string | null
  instructor_title: string | null
  tuition_fee: string | null
  start_date: string | null
  cover_image: string | null
  created_at: string
}
