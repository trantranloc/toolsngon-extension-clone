'use client';

import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer id="footer" className="flex flex-col justify-center mt-12">
      <div className="container mx-auto px-4 lg:px-0 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-blue-950 rounded-2xl">
          <div className="flex flex-col items-start p-6">
            <a href="/">
              <Image
                src="/media/landing/logo/logo-full_apptoolsngon.png"
                alt="Logo"
                width={150}
                height={32}
                className="grayscale brightness-200 h-8 w-auto"
              />
            </a>
            <p className="text-white text-4xl my-2">
              Hãy bắt đầu hành trình kiếm tiền của bạn ngay hôm nay!
            </p>
            <p className="text-white">
              Quản lý và sử dụng tất cả tài khoản cao cấp trong một gói duy nhất. Đăng ký ngay hôm nay!
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 mb-4">
              <Image
                src="https://www.sellthetrend.com/images/trust-pilot--white-logo.svg"
                alt=""
                width={96}
                height={24}
                unoptimized
              />
              <Image
                src="https://www.sellthetrend.com/images/g2-logo.svg"
                alt=""
                width={96}
                height={24}
                unoptimized
              />
              <Image
                src="https://www.sellthetrend.com/images/shopify-colored.png"
                alt=""
                width={96}
                height={24}
                unoptimized
              />
            </div>
            <a
              href="#subscriptions"
              className="text-slate-800 p-3 rounded-2xl bg-white text-sm mt-4"
            >
              Mua Ngay
            </a>
          </div>

          <div className="relative">
            <div className="relative lg:h-80 w-full h-auto aspect-square lg:w-80 bottom-0 flex items-center justify-center">
              <div className="absolute -bottom-8 lg:left-0 left-4 max-w-44 lg:max-w-36 -rotate-[20deg] z-10">
                <Image
                  src="https://www.sellthetrend.com/images/half-chart.svg?id=6f4b9ff634716cd0eada6b40cd364b83"
                  alt=""
                  width={144}
                  height={144}
                  unoptimized
                />
              </div>
              <div className="absolute top-1/3 left-1/3 -translate-x-12 max-w-28 rotate-[20deg] ">
                <Image
                  src="https://www.sellthetrend.com/images/widget-sales.svg?id=d58b3a671c4601814e3597df1b8ed80d"
                  alt=""
                  width={112}
                  height={112}
                  unoptimized
                />
              </div>
              <div className="absolute top-1/3 left-1/2 translate-x-12 max-w-28 rotate-[30deg] ">
                <Image
                  src="https://www.sellthetrend.com/images/donut-chart.svg?id=c596ac5ff810c3985f5ea1f041b4ff9d"
                  alt=""
                  width={112}
                  height={112}
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0">
                <Image
                  src="https://www.sellthetrend.com/images/man-1-cropped.webp?id=ce973f9e73fc8b89932653ec404f922b"
                  alt=""
                  width={160}
                  height={240}
                  className="w-auto h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full container mx-auto py-12 space-y-10 mb-24 lg:mb-0">
        <nav className="flex justify-center flex-wrap gap-6 text-zinc-500 font-medium">
          <a className="hover:text-zinc-900 hover:underline" href="#">FAQ</a>
          <a className="hover:text-zinc-900 hover:underline" href="#">Terms of Service</a>
          <a className="hover:text-zinc-900 hover:underline" href="#">Refund Policy</a>
        </nav>

        <div className="flex justify-center space-x-5">
          <a href="https://facebook.com/toolsngon" target="_blank" rel="noopener noreferrer">
            <Image alt="Facebook" src="https://img.icons8.com/fluent/30/000000/facebook-new.png" width={30} height={30} unoptimized />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image alt="LinkedIn" src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" width={30} height={30} unoptimized />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image alt="Instagram" src="https://img.icons8.com/fluent/30/000000/instagram-new.png" width={30} height={30} unoptimized />
          </a>
          <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <Image alt="Messenger" src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" width={30} height={30} unoptimized />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image alt="Twitter" src="https://img.icons8.com/fluent/30/000000/twitter.png" width={30} height={30} unoptimized />
          </a>
        </div>

        <p className="text-center text-zinc-700 font-medium">
          Copyright 2022 Company Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
