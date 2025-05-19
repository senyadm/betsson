// app/payment-methods/page.tsx
import React from "react";
import Link from "next/link";
import {
  FaCcVisa,
  FaCcMastercard,
  FaWallet,
  FaCreditCard,
  FaCcPaypal,
  FaApplePay,
  FaCashRegister,
  FaMapMarkerAlt,
} from "react-icons/fa";

const EXTERNAL_PAYMENT = "https://www.betsson.gr/el/prosfores"; // или нужный вам внешний URL

const methods = [
  {
    title: "Visa",
    icon: <FaCcVisa size={48} className="text-primary" />,
  },
  {
    title: "Mastercard",
    icon: <FaCcMastercard size={48} className="text-primary" />,
  },
  {
    title: "Skrill & Neteller",
    icon: <FaWallet size={48} className="text-primary" />,
  },
  {
    title: "Paysafecard",
    icon: <FaCreditCard size={48} className="text-primary" />,
  },
  {
    title: "PayPal",
    icon: <FaCcPaypal size={48} className="text-primary" />,
  },
  {
    title: "Viva Wallet",
    icon: <FaWallet size={48} className="text-primary" />,
  },
  {
    title: "Apple Pay",
    icon: <FaApplePay size={48} className="text-primary" />,
  },
  {
    title: "Betsson.CASH",
    icon: <FaCashRegister size={48} className="text-primary" />,
  },
  {
    title: "OKTO.CASH",
    icon: <FaMapMarkerAlt size={48} className="text-primary" />,
    description:
      "Μέθοδος κατάθεσης με μετρητά σε περισσότερα από 13.000 σημεία πώλησης στην Ελλάδα",
  },
];

export const metadata = {
  title: "Μέθοδοι Κατάθεσης και Ανάληψης – Betsson GR",
  description:
    "Ανακαλύψτε τις ασφαλείς, γρήγορες και ευέλικτες μεθόδους πληρωμής που προσφέρει η Betsson στην Ελλάδα.",
};

export default function PaymentMethodsPage() {
  return (
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
                <p className="text-center text-gray-600">{description}</p>
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
  );
}
