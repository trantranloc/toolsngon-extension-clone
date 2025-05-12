// components/Testimonials.tsx
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Người dùng nói gì?</h2>
                    <p className="text-gray-600 text-lg">
                        Một vài lời chia sẻ thực tế từ cộng đồng sử dụng ToolsNgon mỗi ngày.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-md transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src="/images/testimonials/user1.jpg"
                                    alt="User 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Nguyễn Văn A</h4>
                                <span className="text-sm text-gray-500">Nhà phát triển web</span>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                            "Tôi sử dụng ToolsNgon hàng ngày để tạo mã QR và các tiện ích văn bản. Rất nhanh và miễn phí!"
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-md transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src="/images/testimonials/user2.jpg"
                                    alt="User 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Trần Thị B</h4>
                                <span className="text-sm text-gray-500">Marketer</span>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                            "Các công cụ rất tiện, đặc biệt là chức năng rút gọn link và thống kê lượt nhấp."
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-md transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src="/images/testimonials/user3.jpg"
                                    alt="User 3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Lê Văn C</h4><span className="text-sm text-gray-500">Sinh viên</span>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm">
                            "Giao diện đơn giản dễ dùng, không quảng cáo rối mắt. Mình dùng cả trên máy tính và điện thoại."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}