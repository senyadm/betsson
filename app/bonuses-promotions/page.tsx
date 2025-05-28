// app/bonuses-promotions/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BasePage, baseMetadata } from "@/lib/seo";

const EXTERNAL_PROMOS = "https://www.betsson.gr/el/prosfores";

const bonuses = [
  {
    title: "100% μπόνους έως 1.000€ στην πρώτη κατάθεση",
    description:
      "Ενεργοποιήστε το μπόνους με την πρώτη σας κατάθεση και λάβετε έως 1.000€ επιπλέον!",
    imageSrc: "/bonus-deposit.jpg",
  },
  {
    title: "100 δωρεάν περιστροφές σε επιλεγμένα φρουτάκια",
    description:
      "Λάβετε 100 δωρεάν περιστροφές σε επιλεγμένα κορυφαία φρουτάκια.",
    imageSrc: "/bonus-spins.jpg",
  },
  {
    title: "200 δωρεάν περιστροφές χωρίς κατάθεση",
    description:
      "Λάβετε 200 δωρεάν περιστροφές μετά την ταυτοποίηση του λογαριασμού σας.",
    imageSrc: "/bonus-no-deposit.jpg",
  },
  {
    title: "20€ δωρεάν στοίχημα χωρίς κατάθεση",
    description:
      "Δοκιμάστε τις αγορές στοίχηματος χωρίς ρίσκο με 20€ δωρεάν στοίχημα.",
    imageSrc: "/bonus-free-bet.jpg",
  },
];

export const metadata = baseMetadata(
  "Μπόνους Καλωσορίσματος και Προσφορές – Betsson GR",
  "Δείτε όλα τα μπόνους καλωσορίσματος και τις τρέχουσες προσφορές που προσφέρει η Betsson GR.",
  "/bonuses-promotions"
);

// JSON-LD схема для PromotionEvent + Offer
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PromotionEvent",
  name: metadata.title,
  url: "https://www.bettson.gr/bonuses-promotions",
  offers: bonuses.map(({ title, description, imageSrc }) => ({
    "@type": "Offer",
    name: title,
    description,
    url: EXTERNAL_PROMOS,
    image: `https://www.bettson.gr${imageSrc}`,
  })),
};

export default function BonusesPromotionsPage() {
  return (
    <BasePage jsonLd={jsonLd}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-secondary mb-6">
          Μπόνους Καλωσορίσματος και Προσφορές
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12 leading-relaxed">
          Οι νέοι παίκτες στην Betsson μπορούν να επωφεληθούν από ένα γενναιόδωρο
          πακέτο καλωσορίσματος:
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {bonuses.map(({ title, description, imageSrc }, idx) => (
            <Link
              key={idx}
              href={EXTERNAL_PROMOS}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-700 rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105"
            >
              <div className="relative w-full h-48">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">
                  {idx + 1}. {title}
                </h2>
                <p className="text-base leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="max-w-2xl mx-auto mt-12 text-lg text-gray-700 leading-relaxed">
          Οι χρήστες μπορούν να έχουν πρόσβαση σε όλες τις διαθέσιμες υπηρεσίες,
          είτε πρόκειται για ζωντανό στοίχημα, παιχνίδια καζίνο ή εφαρμογές για
          κινητά. Η πλατφόρμα κάνει την εμπειρία στοιχηματισμού πιο ελκυστική με τις
          δυναμικές της δυνατότητες και τις πελατοκεντρικές υπηρεσίες.
        </p>

        <div className="text-center mt-8">
          <Link
            href={EXTERNAL_PROMOS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            Εγγραφή &amp; Παίξε Τώρα
          </Link>
        </div>
      </div>
    </BasePage>
  );
}
