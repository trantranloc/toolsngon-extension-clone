'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="pt-12 sm:pt-16 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-left">
            <h1 className="text-slate-900 dark:text-slate-100 font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Nền tảng công cụ kiếm tiền toàn diện
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Tích hợp các công cụ hỗ trợ kiếm tiền online: từ tìm sản phẩm, thiết kế, content, quảng cáo đến tạo video, chatbot, AI… tất cả trong 1.
            </p>
            <div className="flex gap-4">
              <a
                href="https://app.toolsngon.com/signup/"
                className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Dùng thử miễn phí
              </a>
              <a
                href="#subscriptions"
                className="inline-block text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition"
              >
                Xem bảng giá
              </a>
            </div>
          </div>

          <div className="relative w-full h-auto aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/placeholder-hero.jpg" // ✅ Bạn tự thay ảnh đúng sau
              alt="Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
