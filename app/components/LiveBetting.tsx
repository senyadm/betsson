// app/components/LiveBetting.tsx
import React from "react";

const steps = [
  "Συνδεθείτε στον λογαριασμό σας στην Betsson.",
  "Κάντε κλικ στη σελίδα “Ζωντανό Στοίχημα”.",
  "Επιλέξτε το άθλημα και τον αγώνα που θέλετε να στοιχηματίσετε.",
  "Επιλέξτε την επιλογή που θέλετε να στοιχηματίσετε.",
  "Πληκτρολογήστε το ποσό που θέλετε να ποντάρετε (ποντάρισμα).",
  "Κάντε κλικ στο κουμπί “Στοιχηματίζω” για να ολοκληρώσετε τη διαδικασία.",
];

export default function LiveBetting() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-6">
          Ζωντανό Στοίχημα
        </h2>
        {/* Описание */}
        <p className="max-w-2xl mx-auto text-lg text-gray-700 text-center leading-relaxed">
          Το ζωντανό στοίχημα σάς επιτρέπει να στοιχηματίζετε σε αγώνες που είναι ήδη σε εξέλιξη. Ακολουθήστε τα παρακάτω βήματα:
        </p>

        {/* Нумерованный список */}
        <ol className="mt-10 max-w-2xl mx-auto space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                {idx + 1}
              </div>
              <p className="ml-4 text-lg text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
