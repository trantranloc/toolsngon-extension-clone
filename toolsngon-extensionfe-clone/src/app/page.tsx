// src/app/page.tsx
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 dark:from-gray-900 dark:via-purple-900 dark:to-black">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        Hello world
      </h1>
      <Testimonials />
    </div>
  );
}
