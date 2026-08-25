import { Link, useParams } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import { usePosts } from '../hooks/usePosts'
import MockDataNotice from '../components/MockDataNotice'
import Seo from '../components/Seo'
import Breadcrumb from '../components/Breadcrumb'

export default function BlogDetail() {
  const { slug } = useParams()
  const { post, loading, isMock } = usePost(slug)
  const { posts: allPosts } = usePosts()

  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      {post && (
        <Seo
          title={post.title}
          description={post.excerpt ?? `Bài viết ${post.title} trên blog CETA Academy.`}
        />
      )}

      <Breadcrumb
        items={[
          { label: 'Trang chủ', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post?.title ?? 'Bài viết' },
        ]}
      />

      {loading && <p className="text-slate-500">Đang tải bài viết...</p>}

      {!loading && !post && <p className="text-slate-500">Không tìm thấy bài viết này.</p>}

      {!loading && post && (
        <article>
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

      {relatedPosts.length > 0 && (
        <div className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-lg font-bold text-slate-900">Bài viết liên quan</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-gold-400 hover:shadow-md"
              >
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{p.title}</h3>
                <span className="mt-3 text-xs font-medium text-charcoal-800">Đọc tiếp →</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
