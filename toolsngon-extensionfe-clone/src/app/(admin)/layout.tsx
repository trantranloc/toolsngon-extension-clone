export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-800 text-xl font-bold">Admin Area</header>
      <main className="p-6">{children}</main>
    </div>
  );
}
