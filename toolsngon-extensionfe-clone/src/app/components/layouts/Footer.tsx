export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Cột 1: Giới thiệu */}
        <div>
          <h3 className="text-xl font-bold mb-4">ToolsNgon</h3>
          <p className="text-sm text-gray-400">
            Bộ công cụ tiện ích giúp bạn làm việc hiệu quả hơn mỗi ngày.
          </p>
        </div>

        {/* Cột 2: Điều hướng */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Liên kết</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:underline">Tính năng</a></li>
            <li><a href="#tools" className="hover:underline">Công cụ</a></li>
            <li><a href="#pricing" className="hover:underline">Gói cước</a></li>
            <li><a href="#contact" className="hover:underline">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3: Bản quyền */}
        <div className="md:text-right">
          <h4 className="text-lg font-semibold mb-3">Thông tin</h4>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} ToolsNgon.com</p>
          <p className="text-sm text-gray-400">Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
