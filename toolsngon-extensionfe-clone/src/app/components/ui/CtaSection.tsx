export default function CtaSection() {
  return (
    <section
      id="join"
      className="container mx-auto py-16 px-4 lg:px-0 flex items-center relative overflow-hidden"
    >
      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 lg:p-6 p-4 w-full bg-blue-500 rounded-2xl"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/666af7a69bcdffb8285569b0_banner1-background.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="text-white dark:text-slate-100 text-4xl mb-4">
            Tham gia cùng hơn 5.000 thành viên sử dụng Tools Ngon
          </h1>
          <div className="flex items-center gap-2 text-slate-100 dark:text-slate-100 text-lg mb-4">
            Tận dụng các công cụ của Tools Ngon để hành trình kiếm tiền của bạn dễ dàng hơn đồng thời tăng cơ hội thành công.
          </div>
          <a
            href="https://app.toolsngon.com/signup/"
            className="text-slate-800 p-3 rounded-2xl bg-white text-sm"
          >
            Dùng Thử Miễn Phí
          </a>
        </div>
        <div className="rounded-xl w-full lg:w-96 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/6668551da3a255b9631ffddf/6782416e6a800be58e81b406_dropship-ad-library-ad-spend.avif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
