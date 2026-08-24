import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { mockPosts } from '../data/mockPosts'
import type { Post } from '../types/post'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [isMock, setIsMock] = useState(false)

  useEffect(() => {
    let active = true
    setLoading(true)

    if (!supabase) {
      setPosts(mockPosts)
      setIsMock(true)
      setLoading(false)
      return
    }
    const client = supabase

    ;(async () => {
      try {
        const { data, error } = await client
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false })
        if (!active) return
        if (error || !data) {
          setPosts(mockPosts)
          setIsMock(true)
        } else {
          setPosts(data)
          setIsMock(false)
        }
      } catch {
        if (!active) return
        setPosts(mockPosts)
        setIsMock(true)
      } finally {
        if (active) setLoading(false)
      }
    })()

    return () => {
      active = false
    }
  }, [])

  return { posts, loading, isMock }
}
