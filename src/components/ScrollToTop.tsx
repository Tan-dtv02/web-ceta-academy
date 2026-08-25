import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Đảm bảo mỗi lần chuyển route (kể cả bấm vào 1 dịch vụ/khóa học/bài viết cụ
 * thể trong danh sách), trang tự động cuộn lên đầu — giống hành vi tải trang
 * mới, thay vì giữ nguyên vị trí cuộn cũ như mặc định của React Router.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
