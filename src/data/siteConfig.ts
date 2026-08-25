const hanoiAddress =
  "Tầng 5, Tòa nhà ABC Tower, 18 Phạm Hùng, Quận Nam Từ Liêm, Hà Nội";

export const siteConfig = {
  companyName: "CETA Academy",
  description:
    "CETA Academy cung cấp dịch vụ kế toán, thuế và đào tạo chuyên nghiệp, đồng hành cùng doanh nghiệp trên hành trình phát triển bền vững.",
  hotline: "0909 123 456",
  hotlineHref: "tel:0909123456",
  email: "lienhe@cetaacademy.vn",
  workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:30",
  zaloUrl: "https://zalo.me/0909123456",
  logoMarkUrl: "/logo-mark.png",
  logoFullUrl: "/logo-full.png",
  facebookLinks: [
    {
      label: "CETA - Center of Expert Tax and Accounting",
      url: "https://facebook.com/cetaacademy",
    },
    { label: "Đỗ Toán CPA", url: "https://facebook.com/cetaacademy.ketoan" },
  ],
  hanoiOfficeLabel: "Văn phòng Hà Nội",
  hanoiAddress,
  mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(hanoiAddress)}&output=embed`,
};
