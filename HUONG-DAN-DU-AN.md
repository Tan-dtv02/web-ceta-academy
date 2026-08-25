# Hướng dẫn dự án CETA Academy

Tài liệu này giúp bạn tự tìm đúng file cần sửa khi muốn thay nội dung thật, mà không cần nhờ AI mỗi lần. Cứ giữ file này trong repo, mở lại bất cứ khi nào cần.

## 1. Chạy dự án trên máy

```
npm install       # chỉ cần chạy 1 lần đầu, hoặc khi package.json đổi
npm run dev        # chạy thử, xem trực tiếp tại http://localhost:5173
npm run build       # build bản production, đồng thời kiểm tra lỗi TypeScript
npm run lint        # kiểm tra lỗi/warning code style
```

Sau khi sửa file `.tsx`/`.ts`, `npm run dev` sẽ tự tải lại trang (hot reload) — không cần tắt bật lại.

## 2. Cấu trúc thư mục

```
src/
  pages/        1 file = 1 trang (route). Ví dụ Home.tsx là trang chủ.
  components/   Các mảnh giao diện dùng lại nhiều nơi (Navbar, Footer, ServiceCard...)
  data/         Nội dung tĩnh (không qua database) — sửa TRỰC TIẾP ở đây để thay thông tin thật
  hooks/        Logic lấy dữ liệu Khóa học/Blog (từ Supabase hoặc mock)
  lib/          Kết nối Supabase
  types/        Định nghĩa kiểu dữ liệu TypeScript cho Course/Post
public/         Ảnh tĩnh: logo, favicon, icon — file trong này truy cập được qua đường dẫn "/ten-file"
```

## 3. Muốn sửa thông tin thật thì vào file nào?

| Muốn sửa gì | Sửa file |
|---|---|
| Tên công ty, hotline, email, giờ làm việc, địa chỉ, link Facebook, link Zalo, logo | `src/data/siteConfig.ts` |
| Danh sách dịch vụ, mô tả, tính năng, quy trình thực hiện, danh mục dịch vụ | `src/data/services.ts` |
| Đội ngũ nhân sự (tên, chức danh, tiểu sử) — dùng chung cho trang Giới thiệu và trang chủ | `src/data/team.ts` |
| Bảng giá dịch vụ (3 gói) | `src/components/PricingSection.tsx` — mảng `plans` ở đầu file |
| Số liệu thống kê, quy trình làm việc 4 bước, testimonial khách hàng, đối tác, lý do chọn CETA, câu hỏi thường gặp (trang chủ) | `src/pages/Home.tsx` — các mảng const ở đầu file (`stats`, `processSteps`, `testimonials`, `partners`, `reasons`, `faqs`) |
| Ảnh sự kiện, hoạt động | `src/pages/About.tsx` — hiện đang là khung giữ chỗ, thay bằng ảnh thật khi có |
| Khóa học, bài viết Blog | Xem mục 4 bên dưới (qua Supabase) |

**Quan trọng:** `siteConfig.ts` là nguồn thông tin liên hệ DUY NHẤT — Navbar, Footer, trang Liên hệ đều lấy từ đây. Chỉ cần sửa 1 chỗ, mọi nơi tự cập nhật theo (mình vừa dọn lại chỗ này, trước đó trang Liên hệ từng có địa chỉ hardcode riêng, đã hợp nhất lại).

## 4. Khóa học & Blog — dữ liệu qua Supabase

2 phần này khác các phần trên: không sửa trực tiếp trong code mà quản lý qua Supabase (database). Cơ chế:

- File `src/lib/supabase.ts` đọc 2 biến môi trường `VITE_SUPABASE_URL` và `VITE_SUPABASE_ANON_KEY` từ file `.env` (bạn tự tạo, copy từ `.env.example`, **không commit lên git**).
- Nếu chưa điền 2 biến này → tự động hiển thị dữ liệu mẫu (`src/data/mockCourses.ts`, `src/data/mockPosts.ts`) kèm banner "dữ liệu mẫu".
- Khi bạn tạo project Supabase thật, tạo 2 bảng `courses` và `posts` (cấu trúc cột xem trong `src/types/course.ts` và `src/types/post.ts`), điền URL + key thật vào `.env` → web tự động chuyển sang hiển thị dữ liệu thật, **không cần sửa dòng code nào**.

Không tự thêm trường mới vào `types/course.ts`, `types/post.ts`, các file trong `hooks/`, `lib/supabase.ts`, hoặc 2 file mock — đây là phần "ổ cắm backend" đã thiết kế sẵn, sửa vào có thể làm hỏng cơ chế fallback.

## 5. Quy ước màu sắc

Bảng màu định nghĩa ở `src/index.css` (đầu file, trong khối `@theme`) — lấy đúng 2 màu từ logo: xám (`charcoal`) và vàng (`gold`), mỗi màu có 9 sắc độ (50 nhạt nhất → 900 đậm nhất). Quy ước đang dùng xuyên suốt site (đọc comment ngay trong file để nhớ lại):

- Nút bấm chính: nền `gold-500` + chữ `charcoal-900`
- Nền tối (topbar/footer/1 số section): `charcoal-900` hoặc `charcoal-800` + chữ trắng/`gold-400`
- Link, chữ nhấn trên nền trắng: `charcoal-700`/`charcoal-800`, hover sang `gold-700`/`gold-800`
- Vòng tròn icon: nền `gold-100` + chữ `charcoal-800`
- Không dùng `gold-500` làm màu CHỮ trên nền trắng — độ tương phản quá thấp, khó đọc

Muốn đổi tông màu thương hiệu sau này, chỉ cần đổi 2 giá trị gốc `--color-gold-500` và `--color-charcoal-500`, các sắc độ còn lại giữ nguyên tỉ lệ.

## 6. Trước khi commit/push

1. `npm run build` — phải chạy xong không lỗi (bắt lỗi TypeScript + lỗi cú pháp)
2. `npm run lint` — phải sạch (vài warning `set-state-in-effect` có sẵn từ đầu dự án, không phải lỗi mới, có thể bỏ qua)
3. `npm run dev` — mở thử bằng mắt, đặc biệt trang vừa sửa
4. `git add`, `git commit`, `git push` như bình thường

## 7. Không được đụng vào

- File `.env` (chứa key thật) — không commit lên git, không chia sẻ cho ai
- `src/types/course.ts`, `src/types/post.ts`, `src/lib/supabase.ts`, `src/hooks/useCourse.ts`, `src/hooks/useCourses.ts`, `src/hooks/usePost.ts`, `src/hooks/usePosts.ts`, `src/data/mockCourses.ts`, `src/data/mockPosts.ts` — trừ khi bạn hiểu rõ cơ chế Supabase fallback và cố tình muốn đổi
