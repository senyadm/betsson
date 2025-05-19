// app/payment-methods/page.tsx
import React from "react";
import Image from "next/image";
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

const methods = [
  {
    title: "Visa",
    description: "",
    icon: <FaCcVisa size={48} className="text-primary" />,
  },
  {
    title: "Mastercard",
    description: "",
    icon: <FaCcMastercard size={48} className="text-primary" />,
  },
  {
    title: "Skrill & Neteller",
    description: "",
    icon: <FaWallet size={48} className="text-primary" />,
  },
  {
    title: "Paysafecard",
    description: "",
    icon: <FaCreditCard size={48} className="text-primary" />,
  },
  {
    title: "PayPal",
    description: "",
    icon: <FaCcPaypal size={48} className="text-primary" />,
  },
  {
    title: "Viva Wallet",
    description: "",
    icon: <FaWallet size={48} className="text-primary" />,
  },
  {
    title: "Apple Pay",
    description: "",
    icon: <FaApplePay size={48} className="text-primary" />,
  },
  {
    title: "Betsson.CASH",
    description: "",
    icon: <FaCashRegister size={48} className="text-primary" />,
  },
  {
    title: "OKTO.CASH",
    description:
      "Μέθοδος κατάθεσης με μετρητά σε περισσότερα από 13.000 σημεία πώλησης στην Ελλάδα",
    icon: <FaMapMarkerAlt size={48} className="text-primary" />,
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
        {/* Опциональное изображение */}
        {/*
        <div className="mb-12">
          <Image
            src="/payment-methods.jpg"
            alt="Payment Methods"
            width={800}
            height={300}
            className="rounded-lg object-cover shadow-lg"
            priority
          />
        </div>
        */}

        <h1 className="text-4xl font-bold text-secondary mb-6">
          Μέθοδοι Κατάθεσης και Ανάληψης
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12 leading-relaxed">
          Η Betsson υποστηρίζει ποικιλία ασφαλών και γρήγορων μεθόδων πληρωμής με
          ένα απλό κλικ:
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {methods.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{icon}</div>
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              {description && (
                <p className="text-center text-gray-600">{description}</p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-700 text-lg max-w-xl mx-auto">
          Ελάχιστο ποσό κατάθεσης: <span className="font-semibold">5€</span>.
          <br />
          Επιπλέον, υπάρχουν επιλογές για καταθέσεις και αναλήψεις με μετρητά, όπως
          το Betsson.CASH και το OKTO.CASH.
        </p>
      </div>
    </main>
  );
}
