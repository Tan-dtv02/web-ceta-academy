import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { mockCourses } from '../data/mockCourses'
import type { Course } from '../types/course'

export function useCourses(limit?: number) {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [isMock, setIsMock] = useState(false)

  useEffect(() => {
    let active = true
    setLoading(true)

    const fallbackToMock = () => {
      setCourses(limit ? mockCourses.slice(0, limit) : mockCourses)
      setIsMock(true)
    }

    if (!supabase) {
      fallbackToMock()
      setLoading(false)
      return
    }
    const client = supabase

    ;(async () => {
      try {
        let query = client.from('courses').select('*').order('created_at', { ascending: false })
        if (limit) query = query.limit(limit)
        const { data, error } = await query
        if (!active) return
        if (error || !data) {
          fallbackToMock()
        } else {
          setCourses(data)
          setIsMock(false)
        }
      } catch {
        if (!active) return
        fallbackToMock()
      } finally {
        if (active) setLoading(false)
      }
    })()

    return () => {
      active = false
    }
  }, [limit])

  return { courses, loading, isMock }
}
