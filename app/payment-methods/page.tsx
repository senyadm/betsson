// app/payment-methods/page.tsx
import React from "react";
import Link from "next/link";
import {
  CreditCard,
  Wallet,
  Apple,
  Banknote,
  MapPin,
  DollarSign,
} from "lucide-react";
import { BasePage, baseMetadata } from "@/lib/seo";

// SEO metadata
export const metadata = baseMetadata(
  "Μέθοδοι Κατάθεσης και Ανάληψης – Betsson GR",
  "Ανακαλύψτε τις ασφαλείς, γρήγορες και ευέλικτες μεθόδους πληρωμής που προσφέρει η Betsson στην Ελλάδα.",
  "/payment-methods"
);

const EXTERNAL_PAYMENT = "https://www.bettson.gr/el/prosfores"; // корректный URL

const iconClass = "text-primary w-12 h-12";

const methods = [
  { title: "Visa", icon: <CreditCard className={iconClass} /> },
  { title: "Mastercard", icon: <CreditCard className={iconClass} /> },
  { title: "Skrill & Neteller", icon: <Wallet className={iconClass} /> },
  { title: "Paysafecard", icon: <CreditCard className={iconClass} /> },
  { title: "PayPal", icon: <DollarSign className={iconClass} /> },
  { title: "Viva Wallet", icon: <Wallet className={iconClass} /> },
  { title: "Apple Pay", icon: <Apple className={iconClass} /> },
  { title: "Betsson.CASH", icon: <Banknote className={iconClass} /> },
  {
    title: "OKTO.CASH",
    icon: <MapPin className={iconClass} />,
    description:
      "Μέθοδος κατάθεσης με μετρητά σε περισσότερα από 13.000 σημεία πώλησης στην Ελλάδα",
  },
];

// JSON-LD schema for FinancialService
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: metadata.title,
  description: metadata.description,
  url: "https://www.bettson.gr/payment-methods",
  acceptedPaymentMethod: methods.map((m) => m.title),
};

export default function PaymentMethodsPage() {
  return (
    <BasePage jsonLd={jsonLd}>
      <main className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-6">
            Μέθοδοι Κατάθεσης και Ανάληψης
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12 leading-relaxed">
            Η Betsson υποστηρίζει ποικιλία ασφαλών και γρήγορων μεθόδων πληρωμής με
            ένα απλό κλικ:
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {methods.map(({ title, icon, description }, idx) => (
              <Link
                key={idx}
                href={EXTERNAL_PAYMENT}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="mb-4">{icon}</div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                {description && (
                  <p className="text-center text-gray-600 text-sm">
                    {description}
                  </p>
                )}
              </Link>
            ))}
          </div>

          <p className="mt-12 text-gray-700 text-lg max-w-xl mx-auto">
            Ελάχιστο ποσό κατάθεσης: <span className="font-semibold">5€</span>.
            <br />
            Επιπλέον, υπάρχουν επιλογές για καταθέσεις και αναλήψεις με μετρητά,
            όπως το Betsson.CASH και το OKTO.CASH.
          </p>
        </div>
      </main>
    </BasePage>
  );
}
