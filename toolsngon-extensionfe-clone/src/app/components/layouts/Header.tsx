// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Tools Ngon
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-indigo-600 font-medium">
              Tính năng
            </Link>
            <Link href="#pricing" className="hover:text-indigo-600 font-medium">
              Gói cước
            </Link>
            <Link href="#contact" className="hover:text-indigo-600 font-medium">
              Liên hệ
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link href="#features" className="block py-2">
            Tính năng
          </Link>
          <Link href="#pricing" className="block py-2">
            Gói cước
          </Link>
          <Link href="#contact" className="block py-2">
            Liên hệ
          </Link>
        </div>
      )}
    </header>
  );
}
