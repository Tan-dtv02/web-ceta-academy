import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { mockPosts } from '../data/mockPosts'
import type { Post } from '../types/post'

export function usePost(slug: string | undefined) {
  const [post, setPost] = useState<Post | null>(null)
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
      setPost(mockPosts.find((p) => p.slug === slug) ?? null)
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
        const { data, error } = await client.from('posts').select('*').eq('slug', slug).maybeSingle()
        if (!active) return
        if (error) {
          fallbackToMock()
        } else {
          setPost(data)
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

  return { post, loading, isMock }
}
