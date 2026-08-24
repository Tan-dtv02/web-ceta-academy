import { Link, useParams } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import MockDataNotice from '../components/MockDataNotice'

export default function BlogDetail() {
  const { slug } = useParams()
  const { post, loading, isMock } = usePost(slug)

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/blog" className="text-sm font-medium text-blue-700 hover:underline">
        ← Quay lại Blog
      </Link>

      {loading && <p className="mt-8 text-slate-500">Đang tải bài viết...</p>}

      {!loading && !post && (
        <p className="mt-8 text-slate-500">Không tìm thấy bài viết này.</p>
      )}

      {!loading && post && (
        <article className="mt-4">
          {isMock && <MockDataNotice />}
          {post.cover_image && (
            <img
              src={post.cover_image}
              alt={post.title}
              className="mb-6 aspect-video w-full rounded-xl object-cover"
            />
          )}
          <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
          <p className="mt-2 text-sm text-slate-500">
            {new Date(post.created_at).toLocaleDateString('vi-VN')}
          </p>
          <div className="mt-6 whitespace-pre-line leading-relaxed text-slate-600">
            {post.content}
          </div>
        </article>
      )}
    </section>
  )
}
