// app/mobile-app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaAndroid } from "react-icons/fa";

export const metadata = {
  title: "Εφαρμογή για Κινητά – Betsson GR",
  description:
    "Κατεβάστε την επίσημη εφαρμογή Betsson για iOS και Android και παίξτε όπου κι αν βρίσκεστε.",
};

const EXTERNAL_APP = "https://offers.betsson.gr/el/betsson-app?_gl=1*1ibquoc*_ga*MTk3MTU0NjQ3OS4xNjgxODIyMTMw*_ga_FKFK26WXKX*MTczMzc0Njc5OC4xMTY1LjEuMTczMzc0ODIzNy4wLjAuMA..";

export default function MobileAppPage() {
  return (
    <main className="relative bg-white py-24 overflow-hidden">
      {/* Декоративные фоны */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-200 opacity-20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Скриншот приложения */}
        <div className="md:w-1/2 flex justify-center">
          <div className="overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/mobile-app-screenshot.png"
              alt="Betsson Mobile App"
              width={800}
              height={600}
              className="max-w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Текстовая часть */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
            Εφαρμογή για Κινητά
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-6 rounded" />

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Η Betsson προσφέρει μια κορυφαία εφαρμογή για κινητά, που επιτρέπει
            στους παίκτες να παίζουν όπου κι αν βρίσκονται. Διαθέσιμη για iOS
            και Android, η εφαρμογή προσφέρει την ίδια εμπειρία με την
            ιστοσελίδα, με εύκολη πλοήγηση, Live Casino και στοίχημα σε
            πραγματικό χρόνο, καθώς και γρήγορες καταθέσεις και αναλήψεις.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href={EXTERNAL_APP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white px-4 py-3 rounded-lg shadow-lg transition hover:bg-gray-800"
            >
              <FaApple className="mr-2 text-2xl" />
              App Store
            </Link>
            <Link
              href={EXTERNAL_APP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg transition hover:bg-green-700"
            >
              <FaAndroid className="mr-2 text-2xl" />
              Google Play
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
