// app/components/SportsBetting.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const EXTERNAL_LIVE_BETTING = "https://www.betsson.gr/el/stoixima/live";

export default function SportsBetting() {
  return (
    <section className="relative bg-green-50 py-24 overflow-hidden">
      {/* Декоративные размытые круги */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-green-300 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Картинка слева на десктопах */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/betting.jpg"
              alt="Αθλητικός Στοιχηματισμός Betsson"
              width={500}
              height={350}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Текстовая часть справа на десктопах */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent">
            Αθλητικός Στοιχηματισμός
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8 rounded" />
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Η Betsson προσφέρει αθλητικά στοιχήματα με ποικιλία αθλημάτων και
            γεγονότων. Οι παίκτες μπορούν να στοιχηματίσουν σε διάφορα αθλήματα,
            όπως ποδόσφαιρο, μπάσκετ, τένις και πολλά άλλα. Η Betsson προσφέρει
            ζωντανό στοίχημα, με αθλητικά γεγονότα κάθε εβδομάδα, και οι παίκτες
            μπορούν να παρακολουθούν τα γεγονότα σε πραγματικό χρόνο. Επιπλέον,
            η δυνατότητα ‘Cash Out’ επιτρέπει στους παίκτες να εξασφαλίσουν τα
            στοιχήματά τους πριν την ολοκλήρωση των γεγονότων, προσφέροντας μια
            αίσθηση ασφάλειας και βελτιώνοντας την εμπειρία χρήστη.
          </p>

          {/* Кнопка CTA, ведущая на внешний live betting */}
          <Link
            href={EXTERNAL_LIVE_BETTING}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Στοιχημάτισε τώρα
          </Link>
        </div>
      </div>
    </section>
  );
}
