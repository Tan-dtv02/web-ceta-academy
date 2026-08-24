export interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'ke-toan-tron-goi',
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
  },
  {
    slug: 'quyet-toan-thue',
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
  },
  {
    slug: 'tu-van-thue',
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
  },
  {
    slug: 'thanh-lap-doanh-nghiep',
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
  },
  {
    slug: 'dich-vu-luong-bhxh',
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
  },
]
