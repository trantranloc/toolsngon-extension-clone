export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-4 bg-blue-500 text-white text-xl font-bold">Client Area</header>
      <main className="p-6">{children}</main>
    </div>
  );
}
