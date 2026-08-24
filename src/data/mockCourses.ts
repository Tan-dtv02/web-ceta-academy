import type { Course } from '../types/course'

export const mockCourses: Course[] = [
  {
    id: 'mock-course-1',
    slug: 'ke-toan-truong',
    title: 'Khóa Kế toán trưởng',
    description:
      'Trang bị kiến thức quản trị, nghiệp vụ chuyên sâu và điều kiện để đảm nhận vị trí kế toán trưởng theo quy định.',
    content:
      'Khóa học giúp học viên nắm vững vai trò quản trị, tổ chức bộ máy kế toán và kiểm soát nội bộ, đáp ứng đầy đủ điều kiện, tiêu chuẩn của kế toán trưởng theo quy định pháp luật hiện hành.\n\nNội dung chương trình:\n- Vai trò, trách nhiệm pháp lý của kế toán trưởng\n- Tổ chức bộ máy kế toán, kiểm soát nội bộ\n- Phân tích báo cáo tài chính chuyên sâu\n- Cập nhật chuẩn mực kế toán, quy định thuế mới\n- Thực hành xử lý tình huống thực tế',
    duration: '3 tháng (24 buổi)',
    format: 'Offline & Online',
    instructor_name: 'Nguyễn Văn A',
    instructor_title: 'Thạc sĩ Kế toán - Kiểm toán, hơn 15 năm kinh nghiệm',
    tuition_fee: '6.500.000đ',
    start_date: '2026-09-01',
    cover_image: null,
    created_at: '2026-08-01T00:00:00.000Z',
  },
  {
    id: 'mock-course-2',
    slug: 'on-thi-cpa',
    title: 'Khóa Ôn thi CPA',
    description:
      'Hệ thống hoá kiến thức, luyện đề sát cấu trúc kỳ thi Chứng chỉ Kiểm toán viên (CPA) Việt Nam.',
    content:
      'Chương trình ôn luyện tập trung vào các môn thi CPA theo đề cương của Bộ Tài chính, kết hợp lý thuyết trọng tâm với luyện đề thực chiến, giúp học viên tự tin bước vào kỳ thi.\n\nNội dung chương trình:\n- Hệ thống hoá kiến thức các môn thi theo đề cương Bộ Tài chính\n- Luyện đề bám sát cấu trúc đề thi thực tế\n- Giải đáp thắc mắc trực tiếp cùng giảng viên\n- Tài liệu, ngân hàng câu hỏi ôn tập\n- Chia sẻ kinh nghiệm làm bài thi hiệu quả',
    duration: '4 tháng',
    format: 'Online',
    instructor_name: 'Trần Thị B',
    instructor_title: 'Kiểm toán viên (CPA), Kiểm toán viên hành nghề',
    tuition_fee: '8.900.000đ',
    start_date: '2026-09-15',
    cover_image: null,
    created_at: '2026-07-20T00:00:00.000Z',
  },
  {
    id: 'mock-course-3',
    slug: 'ke-toan-thuc-hanh-cho-nguoi-moi-bat-dau',
    title: 'Khóa Kế toán thực hành cho người mới bắt đầu',
    description:
      'Học thực hành trên chứng từ, sổ sách thực tế, phù hợp người chưa có kinh nghiệm kế toán.',
    content:
      'Khóa học phù hợp với người mới bắt đầu, sinh viên mới ra trường hoặc người muốn chuyển ngành sang kế toán, tập trung thực hành trên bộ chứng từ và phần mềm kế toán thực tế của doanh nghiệp.\n\nNội dung chương trình:\n- Làm quen chứng từ, hoá đơn, sổ sách kế toán\n- Thực hành hạch toán trên phần mềm kế toán\n- Lập báo cáo thuế GTGT, TNCN cơ bản\n- Lập báo cáo tài chính đơn giản\n- Thực hành trên bộ chứng từ doanh nghiệp thực tế',
    duration: '2 tháng (16 buổi)',
    format: 'Offline',
    instructor_name: 'Lê Văn C',
    instructor_title: 'Kế toán trưởng doanh nghiệp, giảng viên thực hành',
    tuition_fee: '3.200.000đ',
    start_date: '2026-09-08',
    cover_image: null,
    created_at: '2026-07-01T00:00:00.000Z',
  },
  {
    id: 'mock-course-4',
    slug: 'thue-chuyen-sau-doanh-nghiep',
    title: 'Khóa Thuế chuyên sâu doanh nghiệp',
    description:
      'Cập nhật chính sách thuế mới nhất, xử lý tình huống thuế thực tế phát sinh trong doanh nghiệp.',
    content:
      'Khóa học dành cho kế toán viên, chủ doanh nghiệp muốn nắm vững và cập nhật các quy định thuế mới nhất, đồng thời rèn luyện kỹ năng xử lý tình huống thuế thường gặp trong thực tế.\n\nNội dung chương trình:\n- Cập nhật Luật thuế GTGT, TNDN, TNCN mới nhất\n- Xử lý tình huống thuế thường gặp trong doanh nghiệp\n- Kỹ năng làm việc, giải trình với cơ quan thuế\n- Tối ưu chi phí thuế hợp pháp\n- Thảo luận case study thực tế từ doanh nghiệp',
    duration: '1.5 tháng (12 buổi)',
    format: 'Online & Offline',
    instructor_name: 'Phạm Thị D',
    instructor_title: 'Chuyên gia tư vấn thuế, nguyên cán bộ ngành thuế',
    tuition_fee: '4.500.000đ',
    start_date: '2026-10-01',
    cover_image: null,
    created_at: '2026-06-15T00:00:00.000Z',
  },
]
