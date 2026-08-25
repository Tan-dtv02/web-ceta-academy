import type { IconName } from '../components/Icon'

export const SERVICE_CATEGORIES = ['Kế toán & Thuế', 'Doanh nghiệp & Nhân sự'] as const

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number]

export interface Service {
  slug: string
  icon: IconName
  category: ServiceCategory
  title: string
  shortDescription: string
  description: string
  features: string[]
  process: string[]
}

export const services: Service[] = [
  {
    slug: 'ke-toan-tron-goi',
    icon: 'briefcase',
    category: 'Kế toán & Thuế',
    title: 'Kế toán trọn gói',
    shortDescription:
      'Đảm nhận toàn bộ công tác kế toán hàng tháng, giúp doanh nghiệp tuân thủ đúng quy định pháp luật.',
    description:
      'Chúng tôi thay mặt doanh nghiệp xử lý toàn bộ nghiệp vụ kế toán hàng ngày, từ hạch toán chứng từ đến lập báo cáo thuế định kỳ, giúp bạn tiết kiệm chi phí vận hành phòng kế toán nội bộ mà vẫn đảm bảo số liệu chính xác, minh bạch.',
    features: [
      'Hạch toán chứng từ, sổ sách kế toán hàng tháng',
      'Lập và nộp báo cáo thuế GTGT, TNCN định kỳ',
      'Lập báo cáo tài chính cuối năm',
      'Tư vấn tối ưu chi phí, thuế hợp pháp',
      'Đại diện làm việc với cơ quan thuế khi cần',
    ],
    process: [
      'Khảo sát tình hình sổ sách kế toán hiện tại của doanh nghiệp',
      'Ký hợp đồng dịch vụ, bàn giao chứng từ',
      'Xử lý hạch toán và kê khai thuế định kỳ hàng tháng',
      'Báo cáo kết quả và tư vấn định kỳ',
    ],
  },
  {
    slug: 'quyet-toan-thue',
    icon: 'badge',
    category: 'Kế toán & Thuế',
    title: 'Quyết toán thuế',
    shortDescription:
      'Rà soát, lập và nộp hồ sơ quyết toán thuế TNDN, TNCN cuối năm, hạn chế rủi ro bị truy thu, xử phạt.',
    description:
      'Dịch vụ quyết toán thuế giúp doanh nghiệp chuẩn hoá lại toàn bộ sổ sách, chứng từ trong năm tài chính, đảm bảo hồ sơ quyết toán chính xác, đúng hạn và giảm thiểu tối đa rủi ro khi cơ quan thuế thanh, kiểm tra.',
    features: [
      'Rà soát sổ sách, chứng từ trước quyết toán',
      'Lập tờ khai quyết toán thuế TNDN, TNCN',
      'Chuẩn hoá hồ sơ, chứng từ theo quy định',
      'Đồng hành giải trình khi cơ quan thuế yêu cầu',
      'Tư vấn xử lý các khoản chi phí không hợp lệ',
    ],
    process: [
      'Tiếp nhận và rà soát toàn bộ hồ sơ, chứng từ trong năm',
      'Đối chiếu, chuẩn hoá số liệu kế toán',
      'Lập và nộp hồ sơ quyết toán thuế',
      'Hỗ trợ giải trình sau quyết toán (nếu có)',
    ],
  },
  {
    slug: 'tu-van-thue',
    icon: 'shield',
    category: 'Kế toán & Thuế',
    title: 'Tư vấn thuế',
    shortDescription:
      'Tư vấn chính sách thuế, tối ưu nghĩa vụ thuế và xử lý các tình huống phát sinh trong quá trình kinh doanh.',
    description:
      'Đội ngũ chuyên gia thuế của chúng tôi hỗ trợ tư vấn theo từng tình huống thực tế của doanh nghiệp, cập nhật kịp thời các thay đổi chính sách để giúp bạn ra quyết định đúng đắn và an toàn về mặt pháp lý.',
    features: [
      'Tư vấn chính sách thuế GTGT, TNDN, TNCN',
      'Tư vấn phương án tối ưu thuế hợp pháp',
      'Hỗ trợ xử lý vướng mắc khi thanh, kiểm tra thuế',
      'Cập nhật văn bản pháp luật thuế mới nhất',
      'Tư vấn theo từng tình huống thực tế của doanh nghiệp',
    ],
    process: [
      'Tiếp nhận câu hỏi, tình huống cụ thể của doanh nghiệp',
      'Nghiên cứu, đối chiếu quy định pháp luật hiện hành',
      'Đưa ra phương án tư vấn, giải pháp cụ thể',
      'Đồng hành hỗ trợ triển khai thực tế',
    ],
  },
  {
    slug: 'thanh-lap-doanh-nghiep',
    icon: 'check',
    category: 'Doanh nghiệp & Nhân sự',
    title: 'Thành lập doanh nghiệp',
    shortDescription:
      'Hỗ trợ trọn gói thủ tục thành lập công ty, đăng ký kinh doanh nhanh chóng, đúng quy định.',
    description:
      'Chúng tôi hỗ trợ trọn gói từ tư vấn loại hình doanh nghiệp, soạn hồ sơ đến hoàn tất các thủ tục pháp lý sau thành lập, giúp bạn nhanh chóng đi vào hoạt động kinh doanh mà không phải lo lắng về thủ tục hành chính.',
    features: [
      'Tư vấn loại hình doanh nghiệp phù hợp',
      'Soạn hồ sơ đăng ký kinh doanh',
      'Đăng ký mã số thuế, hoá đơn điện tử',
      'Khắc dấu, mở tài khoản ngân hàng',
      'Hướng dẫn thủ tục sau thành lập',
    ],
    process: [
      'Tư vấn loại hình doanh nghiệp, ngành nghề kinh doanh',
      'Soạn hồ sơ và nộp đăng ký tại cơ quan có thẩm quyền',
      'Hỗ trợ khắc dấu, đăng ký mã số thuế, hoá đơn điện tử',
      'Hoàn tất thủ tục sau thành lập',
    ],
  },
  {
    slug: 'dich-vu-luong-bhxh',
    icon: 'users',
    category: 'Doanh nghiệp & Nhân sự',
    title: 'Dịch vụ lương & BHXH',
    shortDescription:
      'Tính lương, thuế TNCN và thực hiện thủ tục bảo hiểm xã hội cho người lao động chính xác, đúng hạn.',
    description:
      'Dịch vụ tính lương và bảo hiểm xã hội giúp doanh nghiệp quản lý chính xác quyền lợi người lao động, tuân thủ đúng quy định pháp luật lao động, đồng thời bảo mật tuyệt đối thông tin lương thưởng.',
    features: [
      'Tính bảng lương, thuế TNCN hàng tháng',
      'Đăng ký, báo tăng giảm lao động BHXH',
      'Lập hồ sơ hưởng chế độ BHXH, BHTN',
      'Tư vấn quy định lao động, tiền lương',
      'Bảo mật thông tin lương của người lao động',
    ],
    process: [
      'Tiếp nhận dữ liệu chấm công, hợp đồng lao động',
      'Tính bảng lương, thuế TNCN hàng tháng',
      'Thực hiện thủ tục báo tăng, báo giảm BHXH',
      'Bàn giao báo cáo, tư vấn khi có phát sinh',
    ],
  },
]
