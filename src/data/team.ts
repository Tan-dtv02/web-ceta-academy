export interface TeamMember {
  name: string
  role: string
  bio: string
}

export const team: TeamMember[] = [
  {
    name: 'Nguyễn Văn Cường',
    role: 'Nhà sáng lập & Giám đốc',
    bio: 'Hơn 15 năm kinh nghiệm trong lĩnh vực kế toán - kiểm toán, từng làm việc tại các công ty kiểm toán hàng đầu.',
  },
  {
    name: 'Phạm Thị Lan',
    role: 'Trưởng phòng Dịch vụ Kế toán',
    bio: 'Chuyên gia tư vấn thuế với nhiều năm kinh nghiệm đồng hành cùng doanh nghiệp vừa và nhỏ.',
  },
  {
    name: 'Đỗ Minh Quân',
    role: 'Trưởng phòng Đào tạo',
    bio: 'Giảng viên giàu kinh nghiệm thực chiến, trực tiếp phụ trách các khóa học Kế toán trưởng, CPA.',
  },
  {
    name: 'Vũ Thu Trang',
    role: 'Chuyên viên Tư vấn Thuế',
    bio: 'Am hiểu sâu chính sách thuế, hỗ trợ khách hàng xử lý các tình huống thuế phức tạp.',
  },
]
