// app/components/LiveCasino.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const EXTERNAL_LIVE_CASINO = "https://www.betsson.gr/el/live-casino";

export default function LiveCasino() {
  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Декоративные круги */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Текстовая часть */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent">
            Live Casino
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-8 mx-auto md:mx-0" />
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Το Live Casino της Betsson είναι μια εικονική παιδική χαρά για τους
            λάτρεις των διαδικτυακών καζίνο. Αρκεί να έχετε κάνει μια κατάθεση
            για να αποκτήσετε πρόσβαση στις υπηρεσίες ζωντανής ροής, εξασφαλίζοντας
            ότι μπορείτε να απολαύσετε ζωντανά στοιχήματα και εκδηλώσεις με
            ευκολία. Προσφέροντας μια ποικιλία από παιχνίδια καζίνο για παίκτες
            όλων των προτιμήσεων και επιπέδων δεξιότητας, η Betsson έχει κάτι
            για όλους, από επιτραπέζια παιχνίδια μέχρι παιχνίδια με ζωντανούς
            ντίλερ.
          </p>
          <Link
            href={EXTERNAL_LIVE_CASINO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Παίξε τώρα
          </Link>
        </div>

        {/* Изображение */}
        <div className="md:w-1/2 flex justify-center">
          <Link
            href={EXTERNAL_LIVE_CASINO}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105"
          >
            <Image
              src="/live-casino-2.jpg"
              alt="Live Casino Betsson"
              width={500}
              height={350}
              className="object-cover"
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
