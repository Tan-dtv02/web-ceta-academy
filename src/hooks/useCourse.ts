import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { mockCourses } from '../data/mockCourses'
import type { Course } from '../types/course'

export function useCourse(slug: string | undefined) {
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [isMock, setIsMock] = useState(false)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }

    let active = true
    setLoading(true)

    const fallbackToMock = () => {
      setCourse(mockCourses.find((c) => c.slug === slug) ?? null)
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
        const { data, error } = await client
          .from('courses')
          .select('*')
          .eq('slug', slug)
          .maybeSingle()
        if (!active) return
        if (error) {
          fallbackToMock()
        } else {
          setCourse(data)
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
  }, [slug])

  return { course, loading, isMock }
}
