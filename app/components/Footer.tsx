// app/components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Логотип слева */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Betsson Logo"
            width={100}
            height={32}
            priority
          />
        </Link>

        {/* © YEAR и текст */}
        <span className="text-sm">
          © {new Date().getFullYear()} Betsson. Όλα τα δικαιώματα διατηρούνται.
        </span>

        {/* Кнопка вверх */}
        <button
          onClick={scrollToTop}
          aria-label="Επάνω"
          className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </footer>
  );
}
