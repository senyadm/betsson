// app/safety-license/page.tsx
import React from "react";

const measures = [
  {
    title: "Όρια Κατάθεσης και Απώλειας",
    description:
      "Μπορείς να θέσεις ημερήσια, εβδομαδιαία ή μηνιαία όρια κατάθεσης και απώλειας για να ελέγχεις καλύτερα το παιχνίδι σου.",
  },
  {
    title: "Αυτοαποκλεισμός",
    description:
      "Έχεις τη δυνατότητα να αποκλείσεις προσωρινά ή μόνιμα τον εαυτό σου από την πλατφόρμα, εάν αισθανθείς ότι χάνεις τον έλεγχο.",
  },
  {
    title: "Ειδοποιήσεις Υπερβολικού Χρόνου",
    description:
      "Λαμβάνεις ειδοποιήσεις όταν παίζεις για μεγάλο χρονικό διάστημα, ώστε να θυμάσαι να κάνεις διαλείμματα.",
  },
];

export default function SafetyLicensePage() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Декоративные размытые круги */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-24 -right-32 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Градиентный заголовок */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent">
          Ασφάλεια και Αδειοδότηση στη Betsson
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded" />

        {/* Описание */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-700 mb-16 leading-relaxed">
          Η Betsson λειτουργεί νόμιμα στην Ελλάδα, έχοντας λάβει δύο άδειες από
          την ΕΕΕΠ — μία για παιχνίδια καζίνο (slots, πόκερ) και μία για
          αθλητικό στοίχημα, εξασφαλίζοντας επτά χρόνια πλήρους αδειοδότησης.
          Χρησιμοποιούμε SSL 256-bit encryption για να προστατεύουμε απόλυτα τα
          προσωπικά και οικονομικά σας δεδομένα.
        </p>

        {/* Сетка карточек */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {measures.map((m) => (
            <div
              key={m.title}
              className="group bg-purple-700 hover:bg-purple-600 text-white p-8 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Заголовок карточки */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {m.title}
              </h3>
              <div className="w-12 h-1 bg-primary mb-6 rounded mx-auto md:mx-0" />

              {/* Описание */}
              <p className="text-base md:text-lg leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
