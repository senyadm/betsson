// app/customer-support/page.tsx
import React from "react";
import { FaComments, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "Υποστήριξη Πελατών – Betsson GR",
  description:
    "24/7 υποστήριξη πελατών στα ελληνικά μέσω Live Chat, Email και Τηλεφώνου.",
};

export default function CustomerSupportPage() {
  return (
    <main className="relative bg-white py-20 overflow-hidden">
      {/* Декоративные полупрозрачные круги */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary text-center mb-4">
          Υποστήριξη Πελατών
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded" />

        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-16 leading-relaxed text-center">
          Η Betsson προσφέρει υποστήριξη πελατών και υπηρεσίες επικοινωνίας στα
          ελληνικά, διαθέσιμη 24/7 μέσω:
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {/* Live Chat */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <FaComments className="text-primary mb-4" size={40} />
            <h2 className="text-2xl font-semibold mb-2">Live Chat</h2>
            <p className="text-gray-700 text-center">
              Διαθέσιμο καθημερινά από τις 10:00 έως τη 01:00. Ενεργοποιείται
              μέσω του λογαριασμού σας στην ιστοσελίδα.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <FaEnvelope className="text-primary mb-4" size={40} />
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-gray-700 text-center">
              Στείλτε μήνυμα στο{" "}
              <a
                href="mailto:ypostirixi@betsson.gr"
                className="text-primary hover:underline"
              >
                ypostirixi@betsson.gr
              </a>{" "}
              για οποιαδήποτε απορία.
            </p>
          </div>

          {/* Τηλεφωνική Υποστήριξη */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <FaPhone className="text-primary mb-4" size={40} />
            <h2 className="text-2xl font-semibold mb-2">Τηλεφώνου</h2>
            <p className="text-gray-700 text-center mb-2">
              Από σταθερό (δωρεάν): +800 127 010  
              <br />
              Από κινητό (αστική χρέωση): +30 210 300 2469
            </p>
            <p className="text-gray-700 text-center">
              Ώρες: Καθημερινά, 11:00–19:00
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/customer-support.jpg"
            alt="Customer Support"
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
       
      </div>
    </main>
  );
}
