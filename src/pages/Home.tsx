import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { team } from '../data/team'
import { useCourses } from '../hooks/useCourses'
import { usePosts } from '../hooks/usePosts'
import ServiceCard from '../components/ServiceCard'
import CourseCard from '../components/CourseCard'
import Avatar from '../components/Avatar'
import Seo from '../components/Seo'
import Icon, { type IconName } from '../components/Icon'
import FAQSection from '../components/FAQSection'
import QuickConsultForm from '../components/QuickConsultForm'

const stats: { value: string; label: string }[] = [
  { value: '10+', label: 'Năm kinh nghiệm' },
  { value: '500+', label: 'Khách hàng doanh nghiệp' },
  { value: '2.000+', label: 'Học viên đã đào tạo' },
  { value: '15.000+', label: 'Báo cáo thuế đã xử lý' },
]

const processSteps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'phone',
    title: 'Liên hệ tư vấn',
    description:
      'Chia sẻ nhu cầu, chúng tôi tư vấn giải pháp phù hợp với quy mô doanh nghiệp của bạn.',
  },
  {
    icon: 'check',
    title: 'Ký hợp đồng dịch vụ',
    description:
      'Thống nhất phạm vi công việc, chi phí và tiến hành ký kết hợp đồng dịch vụ.',
  },
  {
    icon: 'briefcase',
    title: 'Bàn giao hồ sơ',
    description: 'Tiếp nhận chứng từ, sổ sách và bàn giao dữ liệu để bắt đầu xử lý.',
  },
  {
    icon: 'clock',
    title: 'Xử lý và báo cáo định kỳ',
    description:
      'Thực hiện công việc, báo cáo kết quả định kỳ và đồng hành lâu dài cùng doanh nghiệp.',
  },
]

const partners: string[] = [
  'Công ty TNHH ABC',
  'Tập đoàn XYZ',
  'Doanh nghiệp Thành Đạt',
  'Công ty Phát Lộc',
  'Tập đoàn Miền Nam',
  'Công ty Sao Việt',
]

const testimonials: { name: string; role: string; quote: string }[] = [
  {
    name: 'Trần Minh Khôi',
    role: 'Giám đốc, Công ty TNHH Thương mại Minh Khôi',
    quote:
      'Đội ngũ hỗ trợ nhiệt tình, xử lý sổ sách chính xác, giúp chúng tôi yên tâm tập trung vào kinh doanh.',
  },
  {
    name: 'Nguyễn Thị Hồng Nhung',
    role: 'Kế toán trưởng, Công ty Cổ phần Xây dựng Hồng Phát',
    quote:
      'Khóa học Kế toán trưởng rất thực tế, giảng viên tận tâm, giúp tôi tự tin hơn rất nhiều trong công việc.',
  },
  {
    name: 'Lê Anh Tuấn',
    role: 'Chủ hộ kinh doanh, Cửa hàng Anh Tuấn Mart',
    quote:
      'Dịch vụ kế toán trọn gói tiết kiệm chi phí đáng kể so với thuê kế toán nội bộ, lại rất chuyên nghiệp.',
  },
]

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Dịch vụ kế toán trọn gói phù hợp với loại hình doanh nghiệp nào?',
    answer:
      'Phù hợp với hộ kinh doanh, doanh nghiệp mới thành lập cũng như doanh nghiệp vừa và nhỏ đang hoạt động, không muốn duy trì bộ phận kế toán nội bộ.',
  },
  {
    question: 'Chi phí dịch vụ được tính như thế nào?',
    answer:
      'Chi phí phụ thuộc vào quy mô, số lượng chứng từ phát sinh hàng tháng và loại hình dịch vụ. Chúng tôi sẽ khảo sát và báo giá cụ thể trước khi ký hợp đồng.',
  },
  {
    question: 'Tôi có cần bàn giao chứng từ giấy trực tiếp không?',
    answer:
      'Không bắt buộc. Bạn có thể gửi hóa đơn điện tử, file scan chứng từ qua email hoặc phần mềm quản lý, giúp tiết kiệm thời gian đi lại.',
  },
  {
    question: 'CETA Academy có hỗ trợ khi cơ quan thuế thanh, kiểm tra không?',
    answer:
      'Có. Đội ngũ chuyên gia sẽ đồng hành, hỗ trợ rà soát hồ sơ và giải trình cùng doanh nghiệp trong suốt quá trình làm việc với cơ quan thuế.',
  },
  {
    question: 'Học phí các khóa đào tạo có bao gồm tài liệu học tập không?',
    answer:
      'Có. Học viên được cung cấp đầy đủ giáo trình, tài liệu thực hành và hỗ trợ giải đáp trong suốt khóa học.',
  },
]

const reasons: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'shield',
    title: 'Uy tín, bảo mật',
    description:
      'Cam kết bảo mật tuyệt đối thông tin tài chính, số liệu kế toán của khách hàng.',
  },
  {
    icon: 'clock',
    title: 'Nhiều năm kinh nghiệm',
    description:
      'Đội ngũ đồng hành cùng hàng trăm doanh nghiệp thuộc nhiều lĩnh vực khác nhau.',
  },
  {
    icon: 'users',
    title: 'Đội ngũ chuyên môn',
    description:
      'Kế toán viên, chuyên gia thuế được đào tạo bài bản, cập nhật quy định liên tục.',
  },
  {
    icon: 'badge',
    title: 'Cam kết chất lượng',
    description:
      'Đảm bảo hồ sơ, báo cáo chính xác, nộp đúng hạn, hạn chế tối đa rủi ro thuế.',
  },
]

export default function Home() {
  const featuredServices = services.slice(0, 4)
  const { courses: featuredCourses, loading: coursesLoading } = useCourses(3)
  const { posts, loading: postsLoading } = usePosts()
  const featuredPosts = posts.slice(0, 3)
  const featuredTeam = team.slice(0, 3)

  return (
    <>
      <Seo
        title="Trang chủ"
        description="CETA Academy cung cấp dịch vụ kế toán, thuế và đào tạo chuyên nghiệp, đồng hành cùng doanh nghiệp phát triển bền vững."
      />

      <section className="bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:py-24">
          <span className="rounded-full bg-gold-100 px-4 py-1 text-sm font-medium text-charcoal-800">
            Dịch vụ Kế toán - Thuế trọn gói
          </span>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            Đồng hành cùng doanh nghiệp trên hành trình phát triển bền vững
          </h1>
          <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
            CETA Academy cung cấp dịch vụ kế toán, thuế và tư vấn doanh nghiệp chuyên nghiệp,
            giúp bạn yên tâm tập trung vào hoạt động kinh doanh cốt lõi.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600"
            >
              Liên hệ tư vấn miễn phí
            </Link>
            <Link
              to="/services"
              className="rounded-lg border border-charcoal-300 px-6 py-3 text-sm font-semibold text-charcoal-700 transition hover:border-gold-400 hover:text-charcoal-900"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal-700 via-charcoal-900 to-charcoal-900 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Phát video giới thiệu CETA Academy"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-charcoal-900 shadow-lg transition hover:bg-white sm:h-20 sm:w-20"
              >
                <Icon name="play" className="h-7 w-7 translate-x-0.5 sm:h-8 sm:w-8" />
              </button>
            </div>
            <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/80 sm:text-base">
              Video giới thiệu CETA Academy — sẽ được cập nhật sớm
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-900">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 py-10 text-center sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-gold-400 sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-charcoal-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Dịch vụ nổi bật</h2>
          <p className="mt-2 text-slate-600">
            Giải pháp kế toán - thuế phù hợp với từng giai đoạn phát triển của doanh nghiệp
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="text-sm font-medium text-charcoal-800 hover:text-gold-800 hover:underline"
          >
            Xem tất cả dịch vụ →
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Quy trình làm việc</h2>
            <p className="mt-2 text-slate-600">
              4 bước đơn giản để bắt đầu hợp tác cùng CETA Academy
            </p>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-gold-200 lg:block" />
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-charcoal-800">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold-800">
                    Bước {index + 1}
                  </span>
                  <h3 className="mt-1 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Khóa học nổi bật</h2>
            <p className="mt-2 text-slate-600">
              Nâng cao chuyên môn kế toán - thuế cùng đội ngũ giảng viên giàu kinh nghiệm
            </p>
          </div>
          {coursesLoading && (
            <p className="mt-10 text-center text-slate-500">Đang tải khóa học...</p>
          )}

          {!coursesLoading && featuredCourses.length === 0 && (
            <p className="mt-10 text-center text-slate-500">
              Chưa có khóa học nào được cập nhật.
            </p>
          )}

          {!coursesLoading && featuredCourses.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              to="/courses"
              className="text-sm font-medium text-charcoal-800 hover:text-gold-800 hover:underline"
            >
              Xem tất cả khóa học →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Bài viết mới nhất</h2>
            <p className="mt-2 text-slate-600">
              Cập nhật kiến thức kế toán, thuế và quản trị doanh nghiệp
            </p>
          </div>

          {postsLoading && (
            <p className="mt-10 text-center text-slate-500">Đang tải bài viết...</p>
          )}

          {!postsLoading && featuredPosts.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
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
                    <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-600">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="mt-4 text-sm font-medium text-charcoal-800">Đọc tiếp →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="text-sm font-medium text-charcoal-800 hover:text-gold-800 hover:underline"
            >
              Xem tất cả bài viết →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Đối tác & Khách hàng tiêu biểu</h2>
            <p className="mt-2 text-slate-600">
              Vinh dự đồng hành cùng nhiều doanh nghiệp trong và ngoài nước
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-20 items-center justify-center rounded-lg border border-slate-200 px-3 text-center text-sm font-medium text-slate-400"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Khách hàng nói gì về chúng tôi</h2>
            <p className="mt-2 text-slate-600">
              Sự tin tưởng của khách hàng là động lực để chúng tôi không ngừng hoàn thiện
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="flex-1 text-sm text-slate-600">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar name={testimonial.name} />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Vì sao chọn chúng tôi</h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-charcoal-800">
                  <Icon name={reason.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Đội ngũ chuyên gia</h2>
            <p className="mt-2 text-slate-600">
              Những con người tận tâm đứng sau chất lượng dịch vụ của CETA Academy
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {featuredTeam.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <Avatar name={member.name} className="h-14 w-14 text-lg" />
                <h3 className="mt-4 font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold-800">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="text-sm font-medium text-charcoal-800 hover:text-gold-800 hover:underline"
            >
              Xem toàn bộ đội ngũ →
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        subtitle="Một số thắc mắc phổ biến trước khi sử dụng dịch vụ của chúng tôi"
        items={faqs}
        className="border-t border-slate-200"
      />

      <section className="border-t border-slate-200 bg-charcoal-900">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">Đăng ký tư vấn nhanh</h2>
          <p className="mt-2 text-charcoal-300">
            Để lại số điện thoại, đội ngũ CETA Academy sẽ liên hệ tư vấn miễn phí trong thời gian
            sớm nhất.
          </p>
          <div className="mt-8">
            <QuickConsultForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Sẵn sàng đồng hành cùng doanh nghiệp của bạn
        </h2>
        <p className="mt-2 text-slate-600">
          Liên hệ ngay để được tư vấn giải pháp kế toán - thuế phù hợp nhất.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-gold-600"
        >
          Liên hệ ngay
        </Link>
      </section>
    </>
  )
}
