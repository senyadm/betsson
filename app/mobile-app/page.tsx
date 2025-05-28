// app/mobile-app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Apple } from "lucide-react";
import { BasePage, baseMetadata } from "@/lib/seo";

// Внешняя ссылка на загрузку приложения
const EXTERNAL_APP = "https://offers.betsson.gr/el/betsson-app";

// SEO metadata
export const metadata = baseMetadata(
  "Εφαρμογή για Κινητά – Betsson GR",
  "Κατεβάστε την επίσημη εφαρμογή Betsson για iOS και Android και παίξτε όπου κι αν βρίσκεστε.",
  "/mobile-app"
);

// JSON-LD schema for MobileApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Betsson Mobile App",
  operatingSystem: ["iOS", "Android"],
  applicationCategory: "Game",
  description: metadata.description,
  installUrl: EXTERNAL_APP,
  url: EXTERNAL_APP,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR"
  }
};

export default function MobileAppPage() {
  return (
    <BasePage jsonLd={jsonLd}>
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
                <Apple className="mr-2 w-6 h-6 text-white" />
                App Store
              </Link>
              <Link
                href={EXTERNAL_APP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg transition hover:bg-green-700"
              >
                <div className="mr-2 w-6 h-6 text-white" />
                Google Play
              </Link>
            </div>
          </div>
        </div>
      </main>
    </BasePage>
  );
}
