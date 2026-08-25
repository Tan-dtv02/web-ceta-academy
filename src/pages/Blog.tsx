import { Link } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'
import MockDataNotice from '../components/MockDataNotice'
import Seo from '../components/Seo'

export default function Blog() {
  const { posts, loading, isMock } = usePosts()

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Seo
        title="Blog"
        description="Chia sẻ kiến thức, kinh nghiệm thực tế về kế toán, thuế và quản trị doanh nghiệp từ CETA Academy."
      />

      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Chia sẻ kiến thức, kinh nghiệm thực tế về kế toán, thuế và quản trị doanh nghiệp.
        </p>
      </div>

      {loading && <p className="mt-12 text-center text-slate-500">Đang tải bài viết...</p>}

      {!loading && posts.length === 0 && (
        <p className="mt-12 text-center text-slate-500">
          Chưa có bài viết nào. Vui lòng quay lại sau.
        </p>
      )}

      {!loading && posts.length > 0 && (
        <div className="mt-12">
          {isMock && <MockDataNotice />}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-gold-400 hover:shadow-md"
              >
                {post.cover_image && (
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-slate-900">{post.title}</h2>
                  {post.excerpt && (
                    <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                  )}
                  <span className="mt-4 text-sm font-medium text-charcoal-800">Đọc tiếp →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
