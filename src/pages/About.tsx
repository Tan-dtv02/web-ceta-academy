import Avatar from '../components/Avatar'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import { team } from '../data/team'

export default function About() {
  return (
    <>
      <Seo
        title="Giới thiệu"
        description="Tìm hiểu về CETA Academy - đội ngũ chuyên gia kế toán, thuế giàu kinh nghiệm, uy tín và tận tâm."
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Giới thiệu</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            CETA Academy là đơn vị cung cấp dịch vụ kế toán, thuế và đào tạo chuyên nghiệp, đồng
            hành cùng hàng trăm doanh nghiệp và học viên trên hành trình phát triển bền vững. Với
            đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến giải pháp chính xác,
            minh bạch và đáng tin cậy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Đội ngũ / Người sáng lập</h2>
          <p className="mt-2 text-slate-600">
            Những con người tận tâm đứng sau chất lượng dịch vụ của CETA Academy
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <Avatar name={member.name} className="h-14 w-14 text-lg" />
              <h3 className="mt-4 font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-gold-800">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">Hoạt động & Sự kiện</h2>
            <p className="mt-2 text-slate-600">
              Một số khoảnh khắc trong hoạt động của CETA Academy
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-charcoal-200 bg-charcoal-50 p-4 text-center text-charcoal-300"
              >
                <Icon name="image" className="h-7 w-7" />
                <span className="text-xs font-medium text-charcoal-400">
                  Ảnh sự kiện sẽ được cập nhật
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
